const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // 1. We require a Charity Wallet Address. For testnet, we can use a dummy address or the deployer's address.
  // In production, this MUST be the actual charity's wallet.
  const dummyCharityWallet = deployer.address; 
  console.log(`Using Charity Wallet Address: ${dummyCharityWallet}`);

  // 2. Deploy the NFT Contract (GameGear)
  const GameGear = await hre.ethers.getContractFactory("GameGear");
  const gameGear = await GameGear.deploy();
  await gameGear.waitForDeployment();
  const gameGearAddress = await gameGear.getAddress();
  
  console.log(`GameGear NFT Contract deployed to: ${gameGearAddress}`);

  // 3. Deploy the Marketplace Contract (GearMarketplace)
  const GearMarketplace = await hre.ethers.getContractFactory("GearMarketplace");
  const gearMarketplace = await GearMarketplace.deploy(dummyCharityWallet);
  await gearMarketplace.waitForDeployment();
  const gearMarketplaceAddress = await gearMarketplace.getAddress();

  console.log(`GearMarketplace Contract deployed to: ${gearMarketplaceAddress}`);

  console.log("\n--- Deployment Complete ---");
  console.log("GameGear:", gameGearAddress);
  console.log("GearMarketplace:", gearMarketplaceAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
