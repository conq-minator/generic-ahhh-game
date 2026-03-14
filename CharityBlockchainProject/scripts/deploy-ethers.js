import { ethers } from "ethers";
import * as dotenv from "dotenv";
import { readFileSync } from "fs";
import { resolve } from "path";

dotenv.config();

async function main() {
    // 1. Configure Provider & Wallet
    const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    console.log("Deploying contracts with the account:", wallet.address);
    console.log("Account balance:", ethers.formatEther(await provider.getBalance(wallet.address)));

    // 2. Load compiled artifacts
    const gameGearArtifact = JSON.parse(readFileSync(resolve("./artifacts/contracts/gamegear.sol/GameGear.json"), "utf8"));
    const marketplaceArtifact = JSON.parse(readFileSync(resolve("./artifacts/contracts/GearMarketplace.sol/GearMarketplace.json"), "utf8"));

    const dummyCharityWallet = wallet.address;
    console.log(`Using Charity Wallet Address: ${dummyCharityWallet}`);

    // 3. Deploy GameGear
    console.log("\nDeploying GameGear...");
    const GameGearFactory = new ethers.ContractFactory(gameGearArtifact.abi, gameGearArtifact.bytecode, wallet);
    const gameGear = await GameGearFactory.deploy();
    await gameGear.waitForDeployment();
    const gameGearAddress = await gameGear.getAddress();
    console.log(`GameGear Contract deployed to: ${gameGearAddress}`);

    // 4. Deploy GearMarketplace
    console.log("\nDeploying GearMarketplace...");
    const MarketplaceFactory = new ethers.ContractFactory(marketplaceArtifact.abi, marketplaceArtifact.bytecode, wallet);
    const marketplace = await MarketplaceFactory.deploy(dummyCharityWallet);
    await marketplace.waitForDeployment();
    const marketplaceAddress = await marketplace.getAddress();
    console.log(`GearMarketplace Contract deployed to: ${marketplaceAddress}`);

    console.log("\n--- Deployment Complete ---");
    console.log("GameGear:", gameGearAddress);
    console.log("GearMarketplace:", marketplaceAddress);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
