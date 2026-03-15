require("@nomicfoundation/hardhat-ethers");

const fs = require('fs');
let rpcUrl = "https://rpc.sepolia.org";
let accounts = [];

try {
  const env = fs.readFileSync('.env', 'utf8');
  const urlMatch = env.match(/SEPOLIA_RPC_URL=["']?(https?:\/\/[^\s"']+)["']?/);
  if (urlMatch) rpcUrl = urlMatch[1];
  const pkMatch = env.match(/PRIVATE_KEY=["']?([a-fA-F0-9]{64})["']?/);
  if (pkMatch) accounts = ["0x" + pkMatch[1]];
} catch (e) {}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.27",
    settings: {
      evmVersion: "cancun",
      optimizer: { enabled: true, runs: 200 },
    },
  },
  networks: {
    sepolia: {
      url: rpcUrl,
      accounts: accounts,
    }
  }
};
