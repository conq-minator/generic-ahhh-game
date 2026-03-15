// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract CreatorVerseGuilds {
    
    struct Guild {
        string name;
        string ipfsMetadataHash; // Pinata hash containing description, emoji, etc.
        uint256 members;
        uint256 donated; // Amount in wei
        address creator;
    }
    
    // Mapping from a Guild name to the Guild struct 
    // Uses mapping to enforce unique names quickly
    mapping(string => Guild) private guilds;
    
    // Array to keep track of all guild names so we can iterate over them
    string[] public guildNames;

    // Mapping to track which guild an address belongs to (users can only join one guild at a time for simplicity)
    mapping(address => string) public userGuild;
    
    event GuildCreated(string indexed name, address indexed creator, string ipfsMetadataHash);
    event GuildJoined(string indexed name, address indexed member);
    event GuildDonation(string indexed name, address indexed donor, uint256 amount);
    
    // Modifier to check if string is empty
    modifier notEmpty(string memory str) {
        require(bytes(str).length > 0, "String cannot be empty");
        _;
    }

    /**
     * @dev Create a new guild
     * @param _name The unique name of the guild
     * @param _ipfsHash The IPFS hash containing the guild's metadata
     */
    function createGuild(string memory _name, string memory _ipfsHash) public notEmpty(_name) notEmpty(_ipfsHash) {
        require(bytes(guilds[_name].name).length == 0, "Guild with this name already exists");
        
        guilds[_name] = Guild({
            name: _name,
            ipfsMetadataHash: _ipfsHash,
            members: 1, // Creator is the first member
            donated: 0,
            creator: msg.sender
        });
        
        guildNames.push(_name);
        userGuild[msg.sender] = _name; // Automatically join the guild
        
        emit GuildCreated(_name, msg.sender, _ipfsHash);
        emit GuildJoined(_name, msg.sender);
    }
    
    /**
     * @dev Join an existing guild
     * @param _name The name of the guild to join
     */
    function joinGuild(string memory _name) public notEmpty(_name) {
        require(bytes(guilds[_name].name).length > 0, "Guild does not exist");
        require(bytes(userGuild[msg.sender]).length == 0, "You are already in a guild");
        
        guilds[_name].members += 1;
        userGuild[msg.sender] = _name;
        
        emit GuildJoined(_name, msg.sender);
    }
    
    /**
     * @dev Donate MATIC/ETH to a guild's statistics (In a real app, this might go to a specific treasury. Here we burn it or leave it in contract for charity)
     * @param _name The name of the guild to donate on behalf of
     */
    function donateToGuild(string memory _name) public payable notEmpty(_name) {
        require(bytes(guilds[_name].name).length > 0, "Guild does not exist");
        require(msg.value > 0, "Must donate more than 0");
        
        guilds[_name].donated += msg.value;
        
        emit GuildDonation(_name, msg.sender, msg.value);
    }
    
    /**
     * @dev Get total number of guilds
     */
    function getGuildCount() public view returns (uint256) {
        return guildNames.length;
    }
    
    /**
     * @dev Get a specific guild's data
     */
    function getGuild(string memory _name) public view returns (Guild memory) {
        return guilds[_name];
    }
    
    /**
     * @dev Get all guilds (returns an array of Guild structs)
     * Warning: In production, large arrays could hit gas limits on view calls, but okay for this scale.
     */
    function getAllGuilds() public view returns (Guild[] memory) {
        uint256 count = guildNames.length;
        Guild[] memory allGuilds = new Guild[](count);
        
        for (uint256 i = 0; i < count; i++) {
            allGuilds[i] = guilds[guildNames[i]];
        }
        
        return allGuilds;
    }
}
