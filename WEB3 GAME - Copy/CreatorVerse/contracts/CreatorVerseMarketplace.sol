// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title CreatorVerseMarketplace
 * @dev Marketplace for listing and buying NFT gear.
 *      On every sale: 90% → charity wallet, 10% → seller.
 *      Emits DonationMade events for the frontend dashboard.
 */
contract CreatorVerseMarketplace is Ownable, ReentrancyGuard {
    
    struct Listing {
        address seller;
        address nftContract;
        uint256 tokenId;
        uint256 price;
        bool active;
    }

    address public charityWallet;
    uint256 public charityPercentage = 90; // 90% to charity
    uint256 public totalDonations;
    uint256 private _nextListingId;

    mapping(uint256 => Listing) public listings;
    mapping(address => uint256) public userDonations;

    event ItemListed(
        uint256 indexed listingId,
        address indexed seller,
        address nftContract,
        uint256 tokenId,
        uint256 price
    );

    event ItemSold(
        uint256 indexed listingId,
        address indexed buyer,
        address indexed seller,
        uint256 price
    );

    event DonationMade(
        uint256 indexed listingId,
        address indexed buyer,
        address indexed seller,
        uint256 donationAmount,
        address charityWallet,
        uint256 timestamp
    );

    event ListingCancelled(uint256 indexed listingId, address indexed seller);

    constructor(address _charityWallet) Ownable(msg.sender) {
        require(_charityWallet != address(0), "Invalid charity wallet");
        charityWallet = _charityWallet;
    }

    /**
     * @dev Update the charity wallet address
     */
    function setCharityWallet(address _charityWallet) external onlyOwner {
        require(_charityWallet != address(0), "Invalid charity wallet");
        charityWallet = _charityWallet;
    }

    /**
     * @dev Update the charity percentage (max 100)
     */
    function setCharityPercentage(uint256 _percentage) external onlyOwner {
        require(_percentage <= 100, "Percentage cannot exceed 100");
        charityPercentage = _percentage;
    }

    /**
     * @dev List an NFT for sale
     */
    function listItem(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) external returns (uint256) {
        require(price > 0, "Price must be greater than zero");
        
        IERC721 nft = IERC721(nftContract);
        require(nft.ownerOf(tokenId) == msg.sender, "Not the owner");
        require(
            nft.isApprovedForAll(msg.sender, address(this)) ||
            nft.getApproved(tokenId) == address(this),
            "Marketplace not approved"
        );

        uint256 listingId = _nextListingId++;
        listings[listingId] = Listing({
            seller: msg.sender,
            nftContract: nftContract,
            tokenId: tokenId,
            price: price,
            active: true
        });

        emit ItemListed(listingId, msg.sender, nftContract, tokenId, price);
        return listingId;
    }

    /**
     * @dev Buy a listed NFT. 90% to charity, 10% to seller.
     */
    function buyItem(uint256 listingId) external payable nonReentrant {
        Listing storage listing = listings[listingId];
        require(listing.active, "Listing not active");
        require(msg.value == listing.price, "Incorrect price");
        require(msg.sender != listing.seller, "Cannot buy your own item");

        listing.active = false;

        // Calculate splits
        uint256 donationAmount = (msg.value * charityPercentage) / 100;
        uint256 sellerAmount = msg.value - donationAmount;

        // Transfer NFT to buyer
        IERC721(listing.nftContract).safeTransferFrom(
            listing.seller,
            msg.sender,
            listing.tokenId
        );

        // Send charity donation
        (bool charitySuccess, ) = payable(charityWallet).call{value: donationAmount}("");
        require(charitySuccess, "Charity transfer failed");

        // Send seller payment
        (bool sellerSuccess, ) = payable(listing.seller).call{value: sellerAmount}("");
        require(sellerSuccess, "Seller transfer failed");

        // Update donation tracking
        totalDonations += donationAmount;
        userDonations[msg.sender] += donationAmount;

        emit ItemSold(listingId, msg.sender, listing.seller, msg.value);
        emit DonationMade(
            listingId,
            msg.sender,
            listing.seller,
            donationAmount,
            charityWallet,
            block.timestamp
        );
    }

    /**
     * @dev Cancel a listing
     */
    function cancelListing(uint256 listingId) external {
        Listing storage listing = listings[listingId];
        require(listing.active, "Listing not active");
        require(listing.seller == msg.sender, "Not the seller");

        listing.active = false;
        emit ListingCancelled(listingId, msg.sender);
    }

    /**
     * @dev Get active listings count
     */
    function getListingsCount() external view returns (uint256) {
        return _nextListingId;
    }
}
