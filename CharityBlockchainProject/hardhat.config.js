require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      evmVersion: "cancun"
    }
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY !== undefined && process.env.PRIVATE_KEY.length === 64 ? [process.env.PRIVATE_KEY] : [],
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY,
  }
};
