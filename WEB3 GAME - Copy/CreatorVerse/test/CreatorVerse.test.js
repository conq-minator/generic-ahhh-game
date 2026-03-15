const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CreatorVerse Contracts", function () {

  let nft, marketplace, dao;
  let owner, player1, player2, charity;

  beforeEach(async function () {
    [owner, player1, player2, charity] = await ethers.getSigners();

    // Deploy NFT
    const NFT = await ethers.getContractFactory("CreatorVerseNFT");
    nft = await NFT.deploy();
    await nft.waitForDeployment();

    // Deploy Marketplace
    const Marketplace = await ethers.getContractFactory("CreatorVerseMarketplace");
    marketplace = await Marketplace.deploy(charity.address);
    await marketplace.waitForDeployment();

    // Deploy DAO
    const DAO = await ethers.getContractFactory("CreatorVerseDAO");
    dao = await DAO.deploy();
    await dao.waitForDeployment();
  });

  // ===================== NFT TESTS =====================
  describe("CreatorVerseNFT", function () {

    it("Should mint a gear NFT", async function () {
      const tx = await nft.mintGear(
        player1.address,
        "ipfs://test-uri",
        "Shadow Blade",
        "Epic",
        90,
        1
      );
      await tx.wait();

      expect(await nft.ownerOf(0)).to.equal(player1.address);
      expect(await nft.totalSupply()).to.equal(1);
    });

    it("Should store gear attributes on-chain", async function () {
      await nft.mintGear(player1.address, "ipfs://test", "Phoenix Fang", "Legendary", 110, 5);

      const gear = await nft.getGearAttributes(0);
      expect(gear.name).to.equal("Phoenix Fang");
      expect(gear.rarity).to.equal("Legendary");
      expect(gear.attack).to.equal(110);
      expect(gear.level).to.equal(5);
    });

    it("Should return correct token URI", async function () {
      await nft.mintGear(player1.address, "ipfs://QmTest123", "Frost Edge", "Rare", 45, 2);
      expect(await nft.tokenURI(0)).to.equal("ipfs://QmTest123");
    });

    it("Should emit GearMinted event", async function () {
      await expect(
        nft.mintGear(player1.address, "ipfs://test", "Doom Axe", "Common", 15, 1)
      ).to.emit(nft, "GearMinted")
        .withArgs(0, player1.address, "Doom Axe", "Common", 15, 1, "ipfs://test");
    });

    it("Should track total supply", async function () {
      await nft.mintGear(player1.address, "ipfs://1", "W1", "Common", 10, 1);
      await nft.mintGear(player2.address, "ipfs://2", "W2", "Rare", 30, 2);
      expect(await nft.totalSupply()).to.equal(2);
    });
  });

  // ===================== MARKETPLACE TESTS =====================
  describe("CreatorVerseMarketplace", function () {

    beforeEach(async function () {
      // Mint an NFT to player1
      await nft.mintGear(player1.address, "ipfs://test", "Shadow Blade", "Epic", 90, 1);
      // Player1 approves marketplace
      await nft.connect(player1).approve(await marketplace.getAddress(), 0);
    });

    it("Should list an NFT", async function () {
      await marketplace.connect(player1).listItem(
        await nft.getAddress(),
        0,
        ethers.parseEther("1.0")
      );

      const listing = await marketplace.listings(0);
      expect(listing.seller).to.equal(player1.address);
      expect(listing.price).to.equal(ethers.parseEther("1.0"));
      expect(listing.active).to.be.true;
    });

    it("Should execute sale with 90/10 split", async function () {
      await marketplace.connect(player1).listItem(
        await nft.getAddress(),
        0,
        ethers.parseEther("1.0")
      );

      const charityBefore = await ethers.provider.getBalance(charity.address);
      const sellerBefore = await ethers.provider.getBalance(player1.address);

      await marketplace.connect(player2).buyItem(0, {
        value: ethers.parseEther("1.0")
      });

      // Check NFT transferred
      expect(await nft.ownerOf(0)).to.equal(player2.address);

      // Check charity got 90%
      const charityAfter = await ethers.provider.getBalance(charity.address);
      const charityReceived = charityAfter - charityBefore;
      expect(charityReceived).to.equal(ethers.parseEther("0.9"));

      // Check seller got 10%
      const sellerAfter = await ethers.provider.getBalance(player1.address);
      const sellerReceived = sellerAfter - sellerBefore;
      expect(sellerReceived).to.equal(ethers.parseEther("0.1"));
    });

    it("Should emit DonationMade event on sale", async function () {
      await marketplace.connect(player1).listItem(
        await nft.getAddress(),
        0,
        ethers.parseEther("1.0")
      );

      await expect(
        marketplace.connect(player2).buyItem(0, {
          value: ethers.parseEther("1.0")
        })
      ).to.emit(marketplace, "DonationMade");
    });

    it("Should track total donations", async function () {
      await marketplace.connect(player1).listItem(
        await nft.getAddress(),
        0,
        ethers.parseEther("1.0")
      );

      await marketplace.connect(player2).buyItem(0, {
        value: ethers.parseEther("1.0")
      });

      expect(await marketplace.totalDonations()).to.equal(ethers.parseEther("0.9"));
    });

    it("Should reject incorrect price", async function () {
      await marketplace.connect(player1).listItem(
        await nft.getAddress(),
        0,
        ethers.parseEther("1.0")
      );

      await expect(
        marketplace.connect(player2).buyItem(0, {
          value: ethers.parseEther("0.5")
        })
      ).to.be.revertedWith("Incorrect price");
    });

    it("Should not allow seller to buy own item", async function () {
      await marketplace.connect(player1).listItem(
        await nft.getAddress(),
        0,
        ethers.parseEther("1.0")
      );

      await expect(
        marketplace.connect(player1).buyItem(0, {
          value: ethers.parseEther("1.0")
        })
      ).to.be.revertedWith("Cannot buy your own item");
    });

    it("Should allow cancelling a listing", async function () {
      await marketplace.connect(player1).listItem(
        await nft.getAddress(),
        0,
        ethers.parseEther("1.0")
      );

      await marketplace.connect(player1).cancelListing(0);
      const listing = await marketplace.listings(0);
      expect(listing.active).to.be.false;
    });
  });

  // ===================== DAO TESTS =====================
  describe("CreatorVerseDAO", function () {

    it("Should create a proposal", async function () {
      await dao.createProposal("Test Proposal", "This is a test");

      const proposal = await dao.proposals(0);
      expect(proposal.title).to.equal("Test Proposal");
      expect(proposal.proposer).to.equal(owner.address);
    });

    it("Should allow members to vote", async function () {
      await dao.createProposal("Test", "Desc");
      await dao.vote(0, true);

      const proposal = await dao.proposals(0);
      expect(proposal.forVotes).to.equal(1);
    });

    it("Should not allow double voting", async function () {
      await dao.createProposal("Test", "Desc");
      await dao.vote(0, true);

      await expect(dao.vote(0, true)).to.be.revertedWith("Already voted");
    });

    it("Should not allow non-members to vote", async function () {
      await dao.createProposal("Test", "Desc");

      await expect(
        dao.connect(player1).vote(0, true)
      ).to.be.revertedWith("Not a DAO member");
    });

    it("Should add and remove members", async function () {
      await dao.addMember(player1.address);
      expect(await dao.members(player1.address)).to.be.true;

      await dao.removeMember(player1.address);
      expect(await dao.members(player1.address)).to.be.false;
    });
  });
});
