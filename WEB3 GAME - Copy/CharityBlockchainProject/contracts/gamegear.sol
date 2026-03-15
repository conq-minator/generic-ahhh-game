// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GameGear is ERC721URIStorage, Ownable {

    uint256 private _nextTokenId;

    struct GearStats {
        uint256 rarity;
        uint256 attackPower;
        uint256 level;
    }

    mapping(uint256 => GearStats) public gearStats;

    constructor() ERC721("GameGear", "GEAR") Ownable(msg.sender) {}

    /**
     * Mint new gear NFT
     * @param player Address receiving the NFT
     * @param tokenURI Metadata URI (IPFS link)
     * @param rarity Gear rarity level
     * @param attackPower Attack value
     */
    function mintGear(
        address player,
        string memory tokenURI,
        uint256 rarity,
        uint256 attackPower
    ) public onlyOwner returns (uint256) {

        uint256 newItemId = ++_nextTokenId;

        _safeMint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        gearStats[newItemId] = GearStats({
            rarity: rarity,
            attackPower: attackPower,
            level: 1
        });

        return newItemId;
    }

    /**
     * Level up gear
     */
    function levelUp(uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "Not the owner");
        gearStats[tokenId].level += 1;
    }

    /**
     * Increase attack power when leveling
     */
    function upgradeAttack(uint256 tokenId, uint256 amount) public {
        require(ownerOf(tokenId) == msg.sender, "Not the owner");
        gearStats[tokenId].attackPower += amount;
    }

    /**
     * View gear stats
     */
    function getGearStats(uint256 tokenId)
        public
        view
        returns (uint256 rarity, uint256 attackPower, uint256 level)
    {
        GearStats memory stats = gearStats[tokenId];
        return (stats.rarity, stats.attackPower, stats.level);
    }
}