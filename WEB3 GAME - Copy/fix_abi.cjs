const fs = require('fs');
let abi = fs.readFileSync('CharityBlockchainProject/frontend/abi.js', 'utf8');
abi = abi.replace('OLD_MARKETPLACE: "0x71442ECaf669abA904ecEed979cb3f03694bA49b"', 'OLD_MARKETPLACE: "0x5e10015745A4a4012589DAdcb9fc4d372aB51354"');
fs.writeFileSync('CharityBlockchainProject/frontend/abi.js', abi);

let cm = fs.readFileSync('src/web3/CharityMarket.js', 'utf8');
// Making sure CharityMarket is targeting the RIGHT contract because my previous regex matched EVERYTHING including let marketplaceAddress = ...
console.log('Fixed ABI');
