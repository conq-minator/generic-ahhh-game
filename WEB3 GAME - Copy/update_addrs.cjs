const fs = require('fs');
const txt = fs.readFileSync('deploy_marketplace_output.txt', 'utf16le');
const matches = txt.match(/0x[a-fA-F0-9]{40}/g);
const newAddr = matches[matches.length-1];
console.log('Injecting address:', newAddr);

let abi = fs.readFileSync('CharityBlockchainProject/frontend/abi.js', 'utf8');
abi = abi.replace(/MARKETPLACE: ".*"/g, 'MARKETPLACE: "' + newAddr + '"');
fs.writeFileSync('CharityBlockchainProject/frontend/abi.js', abi);

let cm = fs.readFileSync('src/web3/CharityMarket.js', 'utf8');
cm = cm.replace(/marketplaceAddress = '.*'/g, "marketplaceAddress = '" + newAddr + "'");
fs.writeFileSync('src/web3/CharityMarket.js', cm);

console.log("Updated both files successfully.");
