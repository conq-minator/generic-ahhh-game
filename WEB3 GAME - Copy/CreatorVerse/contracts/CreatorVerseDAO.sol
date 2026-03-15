// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title CreatorVerseDAO
 * @dev Simple DAO governance for CreatorVerse.
 *      Token holders can create and vote on proposals.
 */
contract CreatorVerseDAO is Ownable {
    
    struct Proposal {
        uint256 id;
        string title;
        string description;
        address proposer;
        uint256 forVotes;
        uint256 againstVotes;
        uint256 deadline;
        bool executed;
        mapping(address => bool) hasVoted;
    }

    uint256 public proposalCount;
    uint256 public votingDuration = 3 days;
    mapping(uint256 => Proposal) public proposals;
    mapping(address => bool) public members;
    uint256 public memberCount;

    event ProposalCreated(
        uint256 indexed proposalId,
        string title,
        string description,
        address indexed proposer,
        uint256 deadline
    );

    event Voted(
        uint256 indexed proposalId,
        address indexed voter,
        bool support
    );

    event ProposalExecuted(uint256 indexed proposalId, bool passed);
    event MemberAdded(address indexed member);
    event MemberRemoved(address indexed member);

    constructor() Ownable(msg.sender) {
        members[msg.sender] = true;
        memberCount = 1;
    }

    modifier onlyMember() {
        require(members[msg.sender], "Not a DAO member");
        _;
    }

    function addMember(address member) external onlyOwner {
        require(!members[member], "Already a member");
        members[member] = true;
        memberCount++;
        emit MemberAdded(member);
    }

    function removeMember(address member) external onlyOwner {
        require(members[member], "Not a member");
        require(member != owner(), "Cannot remove owner");
        members[member] = false;
        memberCount--;
        emit MemberRemoved(member);
    }

    function createProposal(
        string memory title,
        string memory description
    ) external onlyMember returns (uint256) {
        uint256 proposalId = proposalCount++;
        Proposal storage p = proposals[proposalId];
        p.id = proposalId;
        p.title = title;
        p.description = description;
        p.proposer = msg.sender;
        p.deadline = block.timestamp + votingDuration;

        emit ProposalCreated(proposalId, title, description, msg.sender, p.deadline);
        return proposalId;
    }

    function vote(uint256 proposalId, bool support) external onlyMember {
        Proposal storage p = proposals[proposalId];
        require(block.timestamp < p.deadline, "Voting ended");
        require(!p.hasVoted[msg.sender], "Already voted");

        p.hasVoted[msg.sender] = true;

        if (support) {
            p.forVotes++;
        } else {
            p.againstVotes++;
        }

        emit Voted(proposalId, msg.sender, support);
    }

    function executeProposal(uint256 proposalId) external onlyMember {
        Proposal storage p = proposals[proposalId];
        require(block.timestamp >= p.deadline, "Voting not ended");
        require(!p.executed, "Already executed");

        p.executed = true;
        bool passed = p.forVotes > p.againstVotes;

        emit ProposalExecuted(proposalId, passed);
    }

    function setVotingDuration(uint256 _duration) external onlyOwner {
        votingDuration = _duration;
    }
}
