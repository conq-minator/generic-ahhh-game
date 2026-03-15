import { ethers } from "ethers";
import * as dotenv from "dotenv";
import { readFileSync } from "fs";
import { resolve } from "path";

dotenv.config();

async function main() {
    // 1. Connect to Sepolia and your Wallet
    const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    // 2. Connect to the Live GameGear Contract
    const gameGearAddress = "0x273753540dbFA0ecdC8FfB2Bd53d141Fb728CcF0";
    const gameGearArtifact = JSON.parse(readFileSync(resolve("./artifacts/contracts/gamegear.sol/GameGear.json"), "utf8"));
    const gameGear = new ethers.Contract(gameGearAddress, gameGearArtifact.abi, wallet);

    console.log(`Connected to GameGear at: ${gameGearAddress}`);
    console.log(`Minting a new Legendary Sword to your wallet (${wallet.address})...`);

    // 3. Call the mintGear function
    // Parameters: player address, tokenURI, rarity, attackPower, level
    const tx = await gameGear.mintGear(
        wallet.address, 
        "ipfs://QmDummyTokenUriForTesting123", // A fake image link for now
        5, // Rarity (uint256)
        150 // AttackPower
    );

    console.log(`\nTransaction sent to blockchain! Hash: ${tx.hash}`);
    console.log("Waiting for block confirmation (this takes about 15 seconds)...");
    
    // Wait for the transaction to be mined
    await tx.wait();
    
    console.log("\nSuccess! The NFT has been minted.");
    console.log(`View your transaction live on Etherscan: https://sepolia.etherscan.io/tx/${tx.hash}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
