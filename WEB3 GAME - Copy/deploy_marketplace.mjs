import { ethers } from "ethers";
import * as dotenv from "dotenv";
import { readFileSync } from "fs";
import { resolve } from "path";

dotenv.config();

async function main() {
    const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    console.log("Deploying Marketplace with account:", wallet.address);

    const marketplaceArtifact = JSON.parse(readFileSync(resolve("./artifacts/contracts/GearMarketplace.sol/GearMarketplace.json"), "utf8"));

    const dummyCharityWallet = wallet.address;
    console.log(`Using Charity Wallet Address: ${dummyCharityWallet}`);

    console.log("\nDeploying GearMarketplace...");
    const MarketplaceFactory = new ethers.ContractFactory(marketplaceArtifact.abi, marketplaceArtifact.bytecode, wallet);
    const marketplace = await MarketplaceFactory.deploy(dummyCharityWallet);
    await marketplace.waitForDeployment();
    const marketplaceAddress = await marketplace.getAddress();
    
    console.log(`GearMarketplace Contract deployed to: ${marketplaceAddress}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
