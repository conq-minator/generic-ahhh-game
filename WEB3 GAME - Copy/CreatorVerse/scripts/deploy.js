const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("=".repeat(60));
  console.log("CreatorVerse — Contract Deployment");
  console.log("=".repeat(60));
  console.log(`Deployer: ${deployer.address}`);
  console.log(`Balance: ${hre.ethers.formatEther(await hre.ethers.provider.getBalance(deployer.address))} MATIC`);
  console.log("-".repeat(60));

  // ---- 1. Deploy NFT Contract ----
  console.log("\n📦 Deploying CreatorVerseNFT...");
  const NFT = await hre.ethers.getContractFactory("CreatorVerseNFT");
  const nft = await NFT.deploy();
  await nft.waitForDeployment();
  const nftAddress = await nft.getAddress();
  console.log(`✅ CreatorVerseNFT deployed to: ${nftAddress}`);

  // ---- 2. Deploy Marketplace Contract ----
  const charityWallet = process.env.CHARITY_WALLET || deployer.address;
  console.log(`\n📦 Deploying CreatorVerseMarketplace...`);
  console.log(`   Charity Wallet: ${charityWallet}`);
  const Marketplace = await hre.ethers.getContractFactory("CreatorVerseMarketplace");
  const marketplace = await Marketplace.deploy(charityWallet);
  await marketplace.waitForDeployment();
  const marketplaceAddress = await marketplace.getAddress();
  console.log(`✅ CreatorVerseMarketplace deployed to: ${marketplaceAddress}`);

  // ---- 3. Deploy DAO Contract ----
  console.log("\n📦 Deploying CreatorVerseDAO...");
  const DAO = await hre.ethers.getContractFactory("CreatorVerseDAO");
  const dao = await DAO.deploy();
  await dao.waitForDeployment();
  const daoAddress = await dao.getAddress();
  console.log(`✅ CreatorVerseDAO deployed to: ${daoAddress}`);

  // ---- 4. Deploy Guilds Contract ----
  console.log("\n📦 Deploying CreatorVerseGuilds...");
  const Guilds = await hre.ethers.getContractFactory("CreatorVerseGuilds");
  const guilds = await Guilds.deploy();
  await guilds.waitForDeployment();
  const guildsAddress = await guilds.getAddress();
  console.log(`✅ CreatorVerseGuilds deployed to: ${guildsAddress}`);

  // ---- 5. Setup Permissions ----
  console.log("\n🔧 Setting up permissions...");
  // Allow marketplace to be a minter for the NFT contract
  await nft.setMinter(marketplaceAddress, true);
  console.log("   ✅ Marketplace approved as minter");

  // ---- Summary ----
  console.log("\n" + "=".repeat(60));
  console.log("🎉 DEPLOYMENT COMPLETE!");
  console.log("=".repeat(60));
  console.log(`\nContract Addresses:`);
  console.log(`  NFT:         ${nftAddress}`);
  console.log(`  Marketplace: ${marketplaceAddress}`);
  console.log(`  DAO:         ${daoAddress}`);
  console.log(`  Guilds:      ${guildsAddress}`);
  console.log(`  Charity:     ${charityWallet}`);
  console.log(`\n⚠️  Update these addresses in frontend/app.js CONFIG object!`);
  console.log("=".repeat(60));

  // ---- Verify on Polygonscan (if not localhost) ----
  if (hre.network.name !== "hardhat" && hre.network.name !== "localhost") {
    console.log("\n⏳ Waiting 30s for Polygonscan indexing...");
    await new Promise(r => setTimeout(r, 30000));

    try {
      await hre.run("verify:verify", { address: nftAddress, constructorArguments: [] });
      console.log("✅ NFT verified on Polygonscan");
    } catch (e) { console.log("⚠️ NFT verification:", e.message); }

    try {
      await hre.run("verify:verify", { address: marketplaceAddress, constructorArguments: [charityWallet] });
      console.log("✅ Marketplace verified on Polygonscan");
    } catch (e) { console.log("⚠️ Marketplace verification:", e.message); }

    try {
      await hre.run("verify:verify", { address: daoAddress, constructorArguments: [] });
      console.log("✅ DAO verified on Polygonscan");
    } catch (e) { console.log("⚠️ DAO verification:", e.message); }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
