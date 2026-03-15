# CreatorVerse 🎮💚

> **Web3 Gaming for Charity** — Defeat enemies, earn legendary gear, mint NFTs, and trade them in a marketplace where 90% of every sale goes to charity.

![License](https://img.shields.io/badge/license-MIT-blue)
![Polygon](https://img.shields.io/badge/network-Polygon%20Amoy-purple)
![Solidity](https://img.shields.io/badge/solidity-0.8.20-green)

---

## 🌟 Overview

CreatorVerse is a Web3 gaming platform built for a hackathon that transforms gaming achievements into transparent charity donations on the blockchain. Players battle enemies, earn gear, mint it as NFTs, and trade on a marketplace — where **90% of every sale automatically goes to charity**.

### Key Features

- ⚔️ **Battle Arena** — Defeat enemies, level up, earn randomized legendary gear
- 🔮 **NFT Minting** — Mint your gear as ERC-721 NFTs on Polygon
- 🏪 **Marketplace** — List and buy NFTs with automatic 90/10 charity/seller split
- 💚 **Donation Dashboard** — Transparent on-chain donation tracking
- 🛡️ **Guild System** — Create guilds, compete on the donation leaderboard
- 🎬 **Creator Streaming** — Watch streams and send crypto tips
- 🏛️ **DAO Governance** — Community-driven proposals and voting

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML, TailwindCSS, JavaScript, ethers.js |
| **Smart Contracts** | Solidity 0.8.20, OpenZeppelin 5.x |
| **Development** | Hardhat |
| **Network** | Polygon Amoy Testnet |
| **Storage** | IPFS via Pinata |
| **Wallet** | MetaMask |

---

## 📁 Project Structure

```
CreatorVerse/
├── contracts/
│   ├── CreatorVerseNFT.sol          # ERC-721 gear NFT contract
│   ├── CreatorVerseMarketplace.sol  # Marketplace with charity split
│   └── CreatorVerseDAO.sol          # DAO governance
├── frontend/
│   ├── index.html                   # Main SPA with all pages
│   ├── styles.css                   # Custom styles
│   ├── app.js                       # Core application logic
│   └── utils/
│       └── ipfs.js                  # Pinata IPFS upload utility
├── scripts/
│   └── deploy.js                    # Contract deployment script
├── test/
│   └── CreatorVerse.test.js         # Contract test suite
├── hardhat.config.js
├── package.json
├── .env.example
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MetaMask](https://metamask.io/) browser extension
- MATIC from [Polygon Faucet](https://faucet.polygon.technology/) (for testnet)

### 1. Install Dependencies

```bash
cd CreatorVerse
npm install
```

### 2. Setup Environment

```bash
cp .env.example .env
# Edit .env with your private key and API keys
```

### 3. Compile Contracts

```bash
npm run compile
```

### 4. Run Tests

```bash
npm run test
```

### 5. Deploy to Polygon Amoy

```bash
npm run deploy:amoy
```

After deployment, update the contract addresses in `frontend/app.js` → `CONFIG` object.

### 6. Run Frontend

Simply open `frontend/index.html` in your browser, or use a local server:

```bash
npx serve frontend
```

---

## 📜 Smart Contracts

### CreatorVerseNFT (ERC-721)

| Function | Description |
|----------|-------------|
| `mintGear(player, uri, name, rarity, attack, level)` | Mint a gear NFT |
| `getGearAttributes(tokenId)` | Get on-chain gear data |
| `totalSupply()` | Total minted tokens |
| `setMinter(address, bool)` | Approve minting addresses |

### CreatorVerseMarketplace

| Function | Description |
|----------|-------------|
| `listItem(nftContract, tokenId, price)` | List NFT for sale |
| `buyItem(listingId)` | Buy listed NFT (90% charity, 10% seller) |
| `cancelListing(listingId)` | Cancel your listing |
| `totalDonations()` | All-time donation total |

### CreatorVerseDAO

| Function | Description |
|----------|-------------|
| `createProposal(title, description)` | Create new proposal |
| `vote(proposalId, support)` | Vote for/against |
| `executeProposal(proposalId)` | Execute finished proposal |

---

## 🎮 Game System

The Battle Arena is a React-based game in the browser:

1. **Battle** enemies of increasing difficulty
2. **Earn** randomized gear with 4 rarity tiers (Common → Legendary)
3. **Level up** to face tougher enemies and earn better loot
4. **Mint** gear as NFTs stored on IPFS

Gear attributes:
- `name` — Randomized weapon name
- `rarity` — Common / Rare / Epic / Legendary
- `attack` — Attack power (scaled by rarity)
- `level` — Player level when earned

---

## 💚 Charity Flow

```
Buyer pays X MATIC
        │
        ├── 90% → Charity Wallet (on-chain, transparent)
        │
        └── 10% → Seller Wallet
        
DonationMade event emitted → Dashboard updated
```

---

## 👥 Team Modules

| Module | Owner | Status |
|--------|-------|--------|
| Blockchain System | Dev 1 | ✅ Complete |
| Frontend Platform | Dev 2 | ✅ Complete |
| Game System | Dev 3 | ✅ Complete |
| Guild + Streaming | Dev 4 | ✅ Complete |

---

## 📝 License

This project is licensed under the MIT License.
