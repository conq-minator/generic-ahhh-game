import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";

try {
    // Create frontend directory if it doesn't exist
    mkdirSync(resolve("./frontend"), { recursive: true });

    // Read the compiled ABIs
    const gameGearArtifact = JSON.parse(readFileSync(resolve("./artifacts/contracts/gamegear.sol/GameGear.json"), "utf8"));
    const marketplaceArtifact = JSON.parse(readFileSync(resolve("./artifacts/contracts/GearMarketplace.sol/GearMarketplace.json"), "utf8"));

    // Create the JS content to export them globally in the browser
    const jsContent = `
// Auto-generated ABI file for frontend testing
const CONTRACT_ADDRESSES = {
    GAME_GEAR: "0x273753540dbFA0ecdC8FfB2Bd53d141Fb728CcF0",
    MARKETPLACE: "0x5e10015745A4a4012589DAdcb9fc4d372aB51354"
};

const GAME_GEAR_ABI = ${JSON.stringify(gameGearArtifact.abi, null, 2)};
const MARKETPLACE_ABI = ${JSON.stringify(marketplaceArtifact.abi, null, 2)};
`;

    // Write to frontend directory
    writeFileSync(resolve("./frontend/abi.js"), jsContent);
    console.log("Successfully exported ABIs and addresses to frontend/abi.js!");

} catch (error) {
    console.error("Error exporting ABIs:", error);
    process.exitCode = 1;
}
