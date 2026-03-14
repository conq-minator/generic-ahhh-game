// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title BossLootNFT
 * @dev ERC-721 NFT contract for Boss Hunter RPG gear drops.
 * Each token represents a unique piece of gear obtained by defeating a boss.
 */
contract BossLootNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;

    event NFTMinted(address indexed to, uint256 indexed tokenId, string tokenURI);

    constructor() ERC721("Boss Hunter Loot", "BHLOOT") Ownable(msg.sender) {
        _tokenIdCounter = 0;
    }

    /**
     * @dev Mint a new NFT with the given tokenURI metadata.
     * @param to The address to mint the NFT to.
     * @param _tokenURI The IPFS URI pointing to the NFT metadata.
     * @return The newly minted token ID.
     */
    function mintNFT(address to, string memory _tokenURI) public returns (uint256) {
        _tokenIdCounter++;
        uint256 newTokenId = _tokenIdCounter;

        _safeMint(to, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);

        emit NFTMinted(to, newTokenId, _tokenURI);
        return newTokenId;
    }

    /**
     * @dev Returns the total number of tokens minted.
     */
    function totalSupply() public view returns (uint256) {
        return _tokenIdCounter;
    }
}
