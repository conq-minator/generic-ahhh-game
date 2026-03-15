// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title CreatorVerseNFT
 * @dev ERC721 NFT contract for in-game gear items.
 *      Players mint gear after defeating enemies.
 *      Metadata is stored on IPFS via Pinata.
 */
contract CreatorVerseNFT is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    struct GearAttributes {
        string name;
        string rarity;
        uint256 attack;
        uint256 level;
    }

    mapping(uint256 => GearAttributes) public gearData;
    mapping(address => bool) public approvedMinters;

    event GearMinted(
        uint256 indexed tokenId,
        address indexed player,
        string name,
        string rarity,
        uint256 attack,
        uint256 level,
        string tokenURI
    );

    modifier onlyMinter() {
        require(
            approvedMinters[msg.sender] || msg.sender == owner(),
            "Not an approved minter"
        );
        _;
    }

    constructor() ERC721("CreatorVerse Gear", "CVG") Ownable(msg.sender) {}

    function setMinter(address minter, bool approved) external onlyOwner {
        approvedMinters[minter] = approved;
    }

    function mintGear(
        address player,
        string memory uri,
        string memory name,
        string memory rarity,
        uint256 attack,
        uint256 level
    ) external returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(player, tokenId);
        _setTokenURI(tokenId, uri);

        gearData[tokenId] = GearAttributes({
            name: name,
            rarity: rarity,
            attack: attack,
            level: level
        });

        emit GearMinted(tokenId, player, name, rarity, attack, level, uri);
        return tokenId;
    }

    function totalSupply() external view returns (uint256) {
        return _nextTokenId;
    }

    function getGearAttributes(uint256 tokenId)
        external
        view
        returns (GearAttributes memory)
    {
        require(tokenId < _nextTokenId, "Token does not exist");
        return gearData[tokenId];
    }

    // ---- Required Overrides ----

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
