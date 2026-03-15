async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Account balance:", ethers.formatEther(balance), "ETH");

  const BossLootNFT = await ethers.getContractFactory("BossLootNFT");
  const nft = await BossLootNFT.deploy();
  await nft.waitForDeployment();

  const address = await nft.getAddress();
  console.log("BossLootNFT deployed to:", address);
  require('fs').writeFileSync('deployed_address.txt', address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
