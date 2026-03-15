const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("BossLootNFTModule", (m) => {
  const nft = m.contract("BossLootNFT");
  return { nft };
});
