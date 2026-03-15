// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract GearMarketplace is ReentrancyGuard {
    // Structure to hold information about a listed NFT
    struct Listing {
        uint256 price;
        address seller;
        bool isPersonalSale;       // true = 100% to seller; false = 90% charity, 10% seller
        address charityBeneficiary; // if isPersonalSale false and this is set, 90% goes here; else contract charityWallet
    }

    // Mapping from NFT contract address to Token ID to its Listing
    mapping(address => mapping(uint256 => Listing)) public listings;

    // Address of the charity wallet that receives the donation splits (used when charityBeneficiary is zero)
    address public charityWallet;

    // Events
    event ItemListed(address indexed nftContract, uint256 indexed tokenId, uint256 price, address indexed seller);
    event ItemListedForCharity(address indexed nftContract, uint256 indexed tokenId, uint256 price, address indexed seller, address charityBeneficiary);
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
            seller: msg.sender,
            isPersonalSale: false,
            charityBeneficiary: address(0)
        });

        emit ItemListed(nftContract, tokenId, price, msg.sender);
    }

    /**
     * @dev List an NFT for personal sale — seller receives 100%.
     */
    function listItemPersonal(address nftContract, uint256 tokenId, uint256 price) external {
        require(price > 0, "Price must be strictly positive");
        IERC721 nft = IERC721(nftContract);
        require(nft.ownerOf(tokenId) == msg.sender, "Not the owner");
        require(
            nft.getApproved(tokenId) == address(this) || nft.isApprovedForAll(msg.sender, address(this)),
            "Marketplace not approved to transfer this NFT"
        );
        listings[nftContract][tokenId] = Listing({
            price: price,
            seller: msg.sender,
            isPersonalSale: true,
            charityBeneficiary: address(0)
        });
        emit ItemListed(nftContract, tokenId, price, msg.sender);
    }

    /**
     * @dev List an NFT for charity sale — 90% to selected charity, 10% to seller.
     */
    function listItemForCharity(address nftContract, uint256 tokenId, uint256 price, address charityBeneficiary) external {
        require(price > 0, "Price must be strictly positive");
        require(charityBeneficiary != address(0), "Charity address required");
        IERC721 nft = IERC721(nftContract);
        require(nft.ownerOf(tokenId) == msg.sender, "Not the owner");
        require(
            nft.getApproved(tokenId) == address(this) || nft.isApprovedForAll(msg.sender, address(this)),
            "Marketplace not approved to transfer this NFT"
        );
        listings[nftContract][tokenId] = Listing({
            price: price,
            seller: msg.sender,
            isPersonalSale: false,
            charityBeneficiary: charityBeneficiary
        });
        emit ItemListedForCharity(nftContract, tokenId, price, msg.sender, charityBeneficiary);
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

        // 1. Transfer the NFT from seller to buyer
        IERC721(nftContract).safeTransferFrom(listing.seller, msg.sender, tokenId);

        if (listing.isPersonalSale) {
            // Personal sale: 100% to seller
            (bool successSeller, ) = payable(listing.seller).call{value: msg.value}("");
            require(successSeller, "Seller fund transfer failed");
            emit ItemSold(nftContract, tokenId, listing.price, msg.sender, listing.seller);
        } else {
            // Charity sale: 90% to charity, 10% to seller
            uint256 charityAmount = (msg.value * 90) / 100;
            uint256 sellerAmount = msg.value - charityAmount;
            address beneficiary = listing.charityBeneficiary != address(0) ? listing.charityBeneficiary : charityWallet;

            (bool successSeller, ) = payable(listing.seller).call{value: sellerAmount}("");
            require(successSeller, "Seller fund transfer failed");
            (bool successCharity, ) = payable(beneficiary).call{value: charityAmount}("");
            require(successCharity, "Charity fund transfer failed");

            emit ItemSold(nftContract, tokenId, listing.price, msg.sender, listing.seller);
            emit DonationRecorded(msg.sender, listing.seller, charityAmount, beneficiary);
        }
    }
}
