// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract GearMarketplace is ReentrancyGuard {
    // Structure to hold information about a listed NFT
    struct Listing {
        uint256 price;
        address seller;
    }

    // Mapping from NFT contract address to Token ID to its Listing
    mapping(address => mapping(uint256 => Listing)) public listings;

    // Address of the charity wallet that receives the donation splits
    address public charityWallet;

    // Events
    event ItemListed(address indexed nftContract, uint256 indexed tokenId, uint256 price, address indexed seller);
    event ItemCanceled(address indexed nftContract, uint256 indexed tokenId, address indexed seller);
    event ItemSold(address indexed nftContract, uint256 indexed tokenId, uint256 price, address buyer, address indexed seller);
    event DonationRecorded(address indexed buyer, address indexed seller, uint256 amount, address indexed charity);

    /**
     * @dev Sets the charity wallet address during deployment
     */
    constructor(address _charityWallet) {
        require(_charityWallet != address(0), "Invalid charity wallet address");
        charityWallet = _charityWallet;
    }

    /**
     * @dev List an NFT on the marketplace.
     * The marketplace must be approved to transfer the NFT.
     */
    function listItem(address nftContract, uint256 tokenId, uint256 price) external {
        require(price > 0, "Price must be strictly positive");
        IERC721 nft = IERC721(nftContract);
        
        require(nft.ownerOf(tokenId) == msg.sender, "Not the owner");
        require(
            nft.getApproved(tokenId) == address(this) || nft.isApprovedForAll(msg.sender, address(this)),
            "Marketplace not approved to transfer this NFT"
        );

        listings[nftContract][tokenId] = Listing({
            price: price,
            seller: msg.sender
        });

        emit ItemListed(nftContract, tokenId, price, msg.sender);
    }

    /**
     * @dev Cancel an active listing
     */
    function cancelListing(address nftContract, uint256 tokenId) external {
        Listing memory listing = listings[nftContract][tokenId];
        require(listing.price > 0, "Item is not listed");
        require(listing.seller == msg.sender, "Not the seller");

        // Remove the listing
        delete listings[nftContract][tokenId];

        emit ItemCanceled(nftContract, tokenId, msg.sender);
    }

    /**
     * @dev Buy an item, split the payment (10% seller, 90% charity), and transfer the NFT.
     * Protected by nonReentrant to prevent re-entrancy attacks during ETH transfers.
     */
    function buyItem(address nftContract, uint256 tokenId) external payable nonReentrant {
        Listing memory listing = listings[nftContract][tokenId];
        require(listing.price > 0, "Item is not listed");
        require(msg.value == listing.price, "Price mismatch: sent value must equal listing price");

        // Remove listing before transferring out funds and NFTs to prevent re-entrancy
        delete listings[nftContract][tokenId];

        // Calculate payment split (90% charity, 10% seller)
        uint256 charityAmount = (msg.value * 90) / 100;
        uint256 sellerAmount = msg.value - charityAmount;

        // 1. Transfer the NFT from seller to buyer
        IERC721(nftContract).safeTransferFrom(listing.seller, msg.sender, tokenId);

        // 2. Transfer funds to the seller (10%)
        (bool successSeller, ) = payable(listing.seller).call{value: sellerAmount}("");
        require(successSeller, "Seller fund transfer failed");

        // 3. Transfer funds to the charity (90%)
        (bool successCharity, ) = payable(charityWallet).call{value: charityAmount}("");
        require(successCharity, "Charity fund transfer failed");

        // Emit events
        emit ItemSold(nftContract, tokenId, listing.price, msg.sender, listing.seller);
        emit DonationRecorded(msg.sender, listing.seller, charityAmount, charityWallet);
    }
}
