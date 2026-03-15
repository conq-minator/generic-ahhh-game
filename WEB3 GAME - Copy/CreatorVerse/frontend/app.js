/* =====================================================
   CreatorVerse — Main Application Logic
   ===================================================== */

// ===================== CONTRACT CONFIG =====================
const CONFIG = {
    // Replace with deployed contract addresses
    NFT_CONTRACT: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    MARKETPLACE_CONTRACT: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    DAO_CONTRACT: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    GUILDS_CONTRACT: '0x0000000000000000000000000000000000000000', // UPDATE after deploying CreatorVerseGuilds
    CHARITY_WALLET: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    CHAIN_ID: '0x7a69', // Hardhat local node (31337)
    CHAIN_NAME: 'Hardhat Local',
    RPC_URL: 'http://127.0.0.1:8545',
    BLOCK_EXPLORER: 'https://amoy.polygonscan.com',
    PINATA_JWT: 'YOUR_PINATA_JWT_TOKEN', // Get from https://app.pinata.cloud/developers/api-keys
    CURRENCY: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    PINATA_GATEWAY: 'https://gateway.pinata.cloud/ipfs/',
};

// ===================== ABIS (Simplified) =====================
const NFT_ABI = [
    'function mintGear(address player, string uri, string name, string rarity, uint256 attack, uint256 level) external returns (uint256)',
    'function totalSupply() external view returns (uint256)',
    'function getGearAttributes(uint256 tokenId) external view returns (tuple(string name, string rarity, uint256 attack, uint256 level))',
    'function tokenURI(uint256 tokenId) external view returns (string)',
    'function ownerOf(uint256 tokenId) external view returns (address)',
    'function approve(address to, uint256 tokenId) external',
    'function setApprovalForAll(address operator, bool approved) external',
    'event GearMinted(uint256 indexed tokenId, address indexed player, string name, string rarity, uint256 attack, uint256 level, string tokenURI)',
];

const MARKETPLACE_ABI = [
    'function listItem(address nftContract, uint256 tokenId, uint256 price) external returns (uint256)',
    'function buyItem(uint256 listingId) external payable',
    'function cancelListing(uint256 listingId) external',
    'function listings(uint256) external view returns (address seller, address nftContract, uint256 tokenId, uint256 price, bool active)',
    'function getListingsCount() external view returns (uint256)',
    'function totalDonations() external view returns (uint256)',
    'function charityWallet() external view returns (address)',
    'event ItemListed(uint256 indexed listingId, address indexed seller, address nftContract, uint256 tokenId, uint256 price)',
    'event ItemSold(uint256 indexed listingId, address indexed buyer, address indexed seller, uint256 price)',
    'event DonationMade(uint256 indexed listingId, address indexed buyer, address indexed seller, uint256 donationAmount, address charityWallet, uint256 timestamp)',
];

const DAO_ABI = [
    'function createProposal(string title, string description) external returns (uint256)',
    'function vote(uint256 proposalId, bool support) external',
    'function executeProposal(uint256 proposalId) external',
    'function proposals(uint256) external view returns (uint256 id, string title, string description, address proposer, uint256 forVotes, uint256 againstVotes, uint256 deadline, bool executed)',
    'function proposalCount() external view returns (uint256)',
    'function members(address) external view returns (bool)',
    'event ProposalCreated(uint256 indexed proposalId, string title, string description, address indexed proposer, uint256 deadline)',
    'event Voted(uint256 indexed proposalId, address indexed voter, bool support)',
];

const GUILDS_ABI = [
    'function createGuild(string name, string ipfsHash) external',
    'function joinGuild(string name) external',
    'function donateToGuild(string name) external payable',
    'function getGuildCount() external view returns (uint256)',
    'function getGuild(string name) external view returns (tuple(string name, string ipfsMetadataHash, uint256 members, uint256 donated, address creator))',
    'function getAllGuilds() external view returns (tuple(string name, string ipfsMetadataHash, uint256 members, uint256 donated, address creator)[])',
    'function guildNames(uint256) external view returns (string)',
    'function userGuild(address) external view returns (string)',
    'event GuildCreated(string indexed name, address indexed creator, string ipfsMetadataHash)',
    'event GuildJoined(string indexed name, address indexed member)',
    'event GuildDonation(string indexed name, address indexed donor, uint256 amount)',
];

// ===================== STATE =====================
let provider = null;
let signer = null;
let userAddress = null;
let currentPage = 'home';

// Game State
let gameState = {
    playerHP: 100,
    playerMaxHP: 100,
    playerAttack: 25,
    playerLevel: 1,
    playerXP: 0,
    playerXPNeeded: 100,
    battlesWon: 0,
    enemyHP: 0,
    enemyMaxHP: 0,
    enemyName: '',
    enemyLevel: 1,
    enemyAttack: 0,
    inBattle: true,
    inventory: [],
    currentLoot: null,
};

// ===================== NAVIGATION =====================
function navigate(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    // Show target page
    const target = document.getElementById(`page-${page}`);
    if (target) {
        // Use a tiny delay for CSS transition
        setTimeout(() => target.classList.add('active'), 10);
    }

    // Update nav
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const navBtn = document.querySelector(`.nav-link[data-page="${page}"]`);
    if (navBtn) navBtn.classList.add('active');

    currentPage = page;

    // Load page data
    if (page === 'marketplace') loadMarketplace();
    if (page === 'donations') loadDonations();
    if (page === 'guilds') loadGuilds();
    if (page === 'streaming') loadStreaming();
    if (page === 'dao') loadDAO();
    if (page === 'profile') loadProfile();
    if (page === 'game') initGame();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

// ===================== WALLET CONNECTION =====================
async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
        showToast('⚠️', 'Please install MetaMask to connect');
        return;
    }

    try {
        // Request accounts
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        userAddress = accounts[0];

        // Setup ethers provider
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();

        // Update UI
        const shortAddr = `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;
        document.getElementById('wallet-btn').innerHTML = `
            <span class="w-2 h-2 rounded-full bg-cyber-400 inline-block mr-2"></span>
            ${shortAddr}
        `;
        document.getElementById('wallet-btn').classList.add('!bg-surface-800', 'border', 'border-cyber-500/30');

        showToast('✅', `Connected: ${shortAddr}`);

        // Try to switch to Polygon Amoy
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: CONFIG.CHAIN_ID }],
            });
        } catch (switchError) {
            // Chain not added, add it
            if (switchError.code === 4902) {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: CONFIG.CHAIN_ID,
                        chainName: CONFIG.CHAIN_NAME,
                        rpcUrls: [CONFIG.RPC_URL],
                        blockExplorerUrls: [CONFIG.BLOCK_EXPLORER],
                        nativeCurrency: CONFIG.CURRENCY,
                    }],
                });
            }
        }

        // Listen for account changes
        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length > 0) {
                userAddress = accounts[0];
                const short = `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;
                document.getElementById('wallet-btn').innerHTML = `
                    <span class="w-2 h-2 rounded-full bg-cyber-400 inline-block mr-2"></span>
                    ${short}
                `;
            } else {
                userAddress = null;
                document.getElementById('wallet-btn').textContent = 'Connect Wallet';
            }
        });

    } catch (error) {
        console.error('Wallet connection failed:', error);
        showToast('❌', 'Failed to connect wallet');
    }
}

// ===================== GAME SYSTEM =====================
const ENEMIES = [
    { name: 'Shadow Goblin', icon: '👹', hp: 50, attack: 8, level: 1, xp: 30 },
    { name: 'Dark Skeleton', icon: '💀', hp: 70, attack: 12, level: 2, xp: 50 },
    { name: 'Flame Wraith', icon: '👻', hp: 90, attack: 15, level: 3, xp: 70 },
    { name: 'Stone Golem', icon: '🗿', hp: 120, attack: 10, level: 4, xp: 90 },
    { name: 'Void Dragon', icon: '🐉', hp: 150, attack: 20, level: 5, xp: 120 },
    { name: 'Demon Lord', icon: '😈', hp: 200, attack: 25, level: 7, xp: 180 },
    { name: 'Elder Lich', icon: '🧙', hp: 180, attack: 22, level: 6, xp: 150 },
    { name: 'Chaos Beast', icon: '👾', hp: 250, attack: 30, level: 8, xp: 220 },
];

const WEAPONS = [
    'Shadow Blade', 'Phoenix Fang', 'Void Reaper', 'Frost Edge', 'Thunder Hammer',
    'Crystal Staff', 'Doom Axe', 'Serpent Bow', 'Inferno Gauntlet', 'Starfall Scepter',
    'Dragon Slayer', 'Rift Walker', 'Soul Harvester', 'Storm Caller', 'Arcane Wand',
    'Blood Dagger', 'Light Spear', 'Dark Scythe', 'Emerald Shield', 'Lunar Crossbow',
];

const WEAPON_ICONS = ['⚔️', '🗡️', '🔫', '🏹', '🪄', '🔱', '🪓', '🛡️', '💎', '🔮'];

const RARITIES = [
    { name: 'Common', weight: 50, color: '#9ca3af', attackBonus: [5, 20] },
    { name: 'Rare', weight: 30, color: '#3b82f6', attackBonus: [20, 50] },
    { name: 'Epic', weight: 15, color: '#a855f7', attackBonus: [50, 80] },
    { name: 'Legendary', weight: 5, color: '#fbbf24', attackBonus: [80, 120] },
];

function initGame() {
    if (!gameState.inBattle) return;
    spawnEnemy();
    updateGameUI();
}

function spawnEnemy() {
    // Scale enemy difficulty with player level
    const maxIndex = Math.min(gameState.playerLevel + 1, ENEMIES.length);
    const enemy = ENEMIES[Math.floor(Math.random() * maxIndex)];

    const levelScaling = 1 + (gameState.playerLevel - 1) * 0.15;
    gameState.enemyHP = Math.floor(enemy.hp * levelScaling);
    gameState.enemyMaxHP = gameState.enemyHP;
    gameState.enemyName = enemy.name;
    gameState.enemyLevel = Math.max(enemy.level, gameState.playerLevel);
    gameState.enemyAttack = Math.floor(enemy.attack * levelScaling);
    gameState.inBattle = true;

    document.getElementById('enemy-icon').textContent = enemy.icon;
    document.getElementById('enemy-name').textContent = enemy.name;
    document.getElementById('enemy-level').textContent = gameState.enemyLevel;
    document.getElementById('victory-screen').classList.add('hidden');
    document.getElementById('battle-area').querySelector('#enemy-display').classList.remove('hidden');
    document.getElementById('btn-attack').classList.remove('hidden');
    document.getElementById('btn-heal').classList.remove('hidden');
    document.getElementById('battle-log').textContent = '';

    updateGameUI();
}

function attackEnemy() {
    if (!gameState.inBattle) return;

    // Player attacks
    const playerDmg = Math.floor(gameState.playerAttack * (0.8 + Math.random() * 0.4));
    gameState.enemyHP = Math.max(0, gameState.enemyHP - playerDmg);

    // Shake enemy
    const enemyIcon = document.getElementById('enemy-icon');
    enemyIcon.classList.add('animate-shake');
    setTimeout(() => enemyIcon.classList.remove('animate-shake'), 500);

    document.getElementById('battle-log').innerHTML =
        `<span class="text-amber-400">You dealt ${playerDmg} damage!</span>`;

    if (gameState.enemyHP <= 0) {
        // Victory
        gameState.inBattle = false;
        gameState.battlesWon++;
        const xpGained = ENEMIES.find(e => e.name === gameState.enemyName)?.xp || 50;
        gameState.playerXP += xpGained;

        // Level up check
        while (gameState.playerXP >= gameState.playerXPNeeded) {
            gameState.playerXP -= gameState.playerXPNeeded;
            gameState.playerLevel++;
            gameState.playerMaxHP += 20;
            gameState.playerHP = gameState.playerMaxHP;
            gameState.playerAttack += 5;
            gameState.playerXPNeeded = Math.floor(gameState.playerXPNeeded * 1.5);
            showToast('⬆️', `Level Up! You are now Level ${gameState.playerLevel}!`);
        }

        // Generate loot
        generateLoot();
        updateGameUI();

        setTimeout(() => {
            document.getElementById('battle-area').querySelector('#enemy-display').classList.add('hidden');
            document.getElementById('btn-attack').classList.add('hidden');
            document.getElementById('btn-heal').classList.add('hidden');
            document.getElementById('victory-screen').classList.remove('hidden');
        }, 600);

        return;
    }

    // Enemy attacks back
    setTimeout(() => {
        const enemyDmg = Math.floor(gameState.enemyAttack * (0.7 + Math.random() * 0.6));
        gameState.playerHP = Math.max(0, gameState.playerHP - enemyDmg);

        document.getElementById('battle-log').innerHTML =
            `<span class="text-red-400">${gameState.enemyName} dealt ${enemyDmg} damage to you!</span>`;

        if (gameState.playerHP <= 0) {
            gameState.playerHP = 0;
            gameState.inBattle = false;
            document.getElementById('battle-log').innerHTML =
                `<span class="text-red-400">💀 You were defeated! Click "Next Battle" to try again.</span>`;
            gameState.playerHP = Math.floor(gameState.playerMaxHP * 0.5); // Revive with 50% HP

            document.getElementById('btn-attack').classList.add('hidden');
            document.getElementById('btn-heal').classList.add('hidden');

            setTimeout(() => {
                document.getElementById('victory-screen').classList.remove('hidden');
                document.getElementById('victory-screen').innerHTML = `
                    <div class="text-6xl mb-4">💀</div>
                    <h3 class="text-2xl font-display font-bold text-red-400 mb-2">Defeated!</h3>
                    <p class="text-gray-400 mb-6">The enemy was too strong. Train harder!</p>
                    <button onclick="nextBattle()" class="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 transition-all hover:scale-105 shadow-lg shadow-primary-500/25">
                        ⚔️ Try Again
                    </button>
                `;
            }, 800);
        }
        updateGameUI();
    }, 400);
}

function healPlayer() {
    const healAmount = Math.floor(gameState.playerMaxHP * 0.3);
    gameState.playerHP = Math.min(gameState.playerMaxHP, gameState.playerHP + healAmount);
    document.getElementById('battle-log').innerHTML =
        `<span class="text-cyber-400">💊 Healed for ${healAmount} HP!</span>`;

    // Enemy still attacks
    setTimeout(() => {
        if (gameState.inBattle && gameState.enemyHP > 0) {
            const enemyDmg = Math.floor(gameState.enemyAttack * (0.7 + Math.random() * 0.6));
            gameState.playerHP = Math.max(0, gameState.playerHP - enemyDmg);
            document.getElementById('battle-log').innerHTML +=
                ` <span class="text-red-400">| ${gameState.enemyName} dealt ${enemyDmg}!</span>`;
        }
        updateGameUI();
    }, 300);

    updateGameUI();
}

function nextBattle() {
    gameState.inBattle = true;
    gameState.currentLoot = null;

    // Reset victory screen to original
    document.getElementById('victory-screen').classList.add('hidden');
    document.getElementById('victory-screen').innerHTML = `
        <div class="text-6xl mb-4">🎉</div>
        <h3 class="text-2xl font-display font-bold text-cyber-400 mb-2">Victory!</h3>
        <p class="text-gray-400 mb-6">You earned a new gear drop!</p>
        <div id="loot-display" class="glass-card p-6 mb-6 inline-block"></div>
        <div class="flex gap-4 justify-center">
            <button id="btn-mint" onclick="mintGearNFT()" class="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 transition-all hover:scale-105 shadow-lg shadow-accent-500/25">
                🔮 Mint as NFT
            </button>
            <button onclick="nextBattle()" class="px-6 py-3 rounded-xl font-bold bg-white/10 border border-white/10 hover:bg-white/20 transition-all hover:scale-105">
                ⚔️ Next Battle
            </button>
        </div>
    `;

    spawnEnemy();
}

function generateLoot() {
    // Determine rarity
    const roll = Math.random() * 100;
    let cumulative = 0;
    let rarity = RARITIES[0];
    for (const r of RARITIES) {
        cumulative += r.weight;
        if (roll <= cumulative) {
            rarity = r;
            break;
        }
    }

    const weapon = WEAPONS[Math.floor(Math.random() * WEAPONS.length)];
    const icon = WEAPON_ICONS[Math.floor(Math.random() * WEAPON_ICONS.length)];
    const attack = Math.floor(rarity.attackBonus[0] + Math.random() * (rarity.attackBonus[1] - rarity.attackBonus[0]));
    const level = gameState.playerLevel;

    const loot = {
        name: weapon,
        rarity: rarity.name,
        attack: attack,
        level: level,
        icon: icon,
        color: rarity.color,
        minted: false,
    };

    gameState.currentLoot = loot;
    gameState.inventory.push(loot);

    // Show loot in victory screen
    const lootDisplay = document.getElementById('loot-display');
    if (lootDisplay) {
        lootDisplay.innerHTML = `
            <div class="text-4xl mb-2">${icon}</div>
            <h4 class="font-bold text-lg" style="color:${rarity.color}">${weapon}</h4>
            <p class="text-sm mt-1" style="color:${rarity.color}">${rarity.name}</p>
            <div class="flex gap-4 mt-3 text-sm text-gray-400">
                <span>⚔️ ATK: ${attack}</span>
                <span>📊 Lv: ${level}</span>
            </div>
        `;
    }

    updateInventoryUI();
}

function updateGameUI() {
    // Player
    const hpPct = (gameState.playerHP / gameState.playerMaxHP) * 100;
    document.getElementById('player-hp-bar').style.width = `${hpPct}%`;
    document.getElementById('player-hp-text').textContent = `${gameState.playerHP}/${gameState.playerMaxHP}`;
    document.getElementById('player-level').textContent = gameState.playerLevel;
    document.getElementById('player-atk').textContent = gameState.playerAttack;

    const xpPct = (gameState.playerXP / gameState.playerXPNeeded) * 100;
    document.getElementById('player-xp-bar').style.width = `${xpPct}%`;
    document.getElementById('player-xp-text').textContent = `${gameState.playerXP}/${gameState.playerXPNeeded}`;

    // Enemy
    const enemyHpPct = (gameState.enemyHP / gameState.enemyMaxHP) * 100;
    document.getElementById('enemy-hp-bar').style.width = `${enemyHpPct}%`;
    document.getElementById('enemy-hp-text').textContent = `${gameState.enemyHP}/${gameState.enemyMaxHP}`;
}

function updateInventoryUI() {
    const list = document.getElementById('inventory-list');
    if (gameState.inventory.length === 0) {
        list.innerHTML = '<p class="text-gray-500 text-sm text-center py-8">Defeat enemies to earn gear!</p>';
        return;
    }

    list.innerHTML = gameState.inventory.map((item, i) => `
        <div class="inventory-item">
            <div class="text-2xl">${item.icon}</div>
            <div class="flex-1 min-w-0">
                <div class="font-semibold text-sm truncate">${item.name}</div>
                <div class="text-xs" style="color:${item.color}">${item.rarity}</div>
            </div>
            <div class="text-xs text-gray-400">
                ⚔️${item.attack} Lv${item.level}
            </div>
            ${item.minted ? '<span class="text-xs text-cyber-400">✓ NFT</span>' : ''}
        </div>
    `).join('');
}

// ===================== MINT NFT =====================
async function mintGearNFT() {
    if (!gameState.currentLoot) {
        showToast('⚠️', 'No gear to mint');
        return;
    }
    if (!userAddress) {
        showToast('⚠️', 'Connect your wallet first');
        await connectWallet();
        if (!userAddress) return;
    }

    const loot = gameState.currentLoot;

    // Create metadata JSON
    const metadata = {
        name: loot.name,
        description: `A ${loot.rarity} weapon earned in CreatorVerse`,
        rarity: loot.rarity,
        attack: loot.attack,
        level: loot.level,
        attributes: [
            { trait_type: 'Rarity', value: loot.rarity },
            { trait_type: 'Attack Power', value: loot.attack },
            { trait_type: 'Level', value: loot.level },
            { trait_type: 'Weapon Type', value: loot.icon },
        ],
        image: `https://via.placeholder.com/500x500/1a1a2e/ffffff?text=${encodeURIComponent(loot.icon)}`,
    };

    showToast('🔄', 'Preparing to mint NFT...');

    try {
        // In production, upload metadata to IPFS via Pinata first
        // For demo, we use a simulated URI
        const tokenURI = `ipfs://demo/${Date.now()}`;

        if (CONFIG.NFT_CONTRACT !== '0x0000000000000000000000000000000000000000') {
            // Real contract interaction
            const nftContract = new ethers.Contract(CONFIG.NFT_CONTRACT, NFT_ABI, signer);
            const tx = await nftContract.mintGear(
                userAddress,
                tokenURI,
                loot.name,
                loot.rarity,
                loot.attack,
                loot.level
            );
            showToast('⏳', 'Transaction submitted. Waiting for confirmation...');
            await tx.wait();
            showToast('✅', `Minted "${loot.name}" as NFT!`);
        } else {
            // Demo mode — simulate minting
            await new Promise(r => setTimeout(r, 1500));
            showToast('✅', `Demo: Minted "${loot.name}" as NFT!`);
        }

        // Mark as minted in inventory
        loot.minted = true;
        const idx = gameState.inventory.findIndex(i => i === loot);
        if (idx >= 0) gameState.inventory[idx].minted = true;
        updateInventoryUI();
        gameState.currentLoot = null;

    } catch (error) {
        console.error('Mint failed:', error);
        showToast('❌', 'Minting failed: ' + (error.reason || error.message));
    }
}

// ===================== MARKETPLACE =====================
const DEMO_LISTINGS = [
    { id: 0, name: 'Shadow Blade', rarity: 'Legendary', attack: 95, level: 5, price: '0.5', icon: '⚔️', seller: '0x1234...abcd' },
    { id: 1, name: 'Phoenix Fang', rarity: 'Epic', attack: 72, level: 3, price: '0.3', icon: '🗡️', seller: '0x5678...efgh' },
    { id: 2, name: 'Frost Edge', rarity: 'Rare', attack: 45, level: 2, price: '0.15', icon: '🔱', seller: '0x9abc...ijkl' },
    { id: 3, name: 'Thunder Hammer', rarity: 'Legendary', attack: 110, level: 7, price: '0.8', icon: '🪓', seller: '0xdef0...mnop' },
    { id: 4, name: 'Crystal Staff', rarity: 'Epic', attack: 65, level: 4, price: '0.25', icon: '🪄', seller: '0x1111...qrst' },
    { id: 5, name: 'Doom Axe', rarity: 'Rare', attack: 38, level: 2, price: '0.1', icon: '🪓', seller: '0x2222...uvwx' },
    { id: 6, name: 'Serpent Bow', rarity: 'Common', attack: 18, level: 1, price: '0.05', icon: '🏹', seller: '0x3333...yzab' },
    { id: 7, name: 'Arcane Wand', rarity: 'Epic', attack: 78, level: 5, price: '0.35', icon: '🔮', seller: '0x4444...cdef' },
];

let currentMarketplaceListings = DEMO_LISTINGS;

async function loadMarketplace() {
    if (CONFIG.MARKETPLACE_CONTRACT === '0x0000000000000000000000000000000000000000' || typeof window.ethereum === 'undefined') {
        currentMarketplaceListings = DEMO_LISTINGS;
        renderMarketplace(currentMarketplaceListings);
        return;
    }

    try {
        const prov = provider || new ethers.BrowserProvider(window.ethereum);
        const marketplace = new ethers.Contract(CONFIG.MARKETPLACE_CONTRACT, MARKETPLACE_ABI, prov);
        const nft = new ethers.Contract(CONFIG.NFT_CONTRACT, NFT_ABI, prov);
        
        const count = await marketplace.getListingsCount();
        const liveListings = [];
        
        for (let i = 0; i < Number(count); i++) {
            const list = await marketplace.listings(i);
            if (list.active) {
                const attrs = await nft.getGearAttributes(list.tokenId);
                
                let icon = '⚔️';
                if (attrs.rarity === 'Legendary') icon = '🪓';
                else if (attrs.rarity === 'Epic') icon = '🔮';
                else if (attrs.rarity === 'Rare') icon = '🗡️';
                
                liveListings.push({
                    id: i,
                    name: attrs.name,
                    rarity: attrs.rarity,
                    attack: Number(attrs.attack),
                    level: Number(attrs.level),
                    price: ethers.formatEther(list.price),
                    icon: icon,
                    seller: list.seller.slice(0, 6) + '...' + list.seller.slice(-4)
                });
            }
        }
        
        currentMarketplaceListings = liveListings.length > 0 ? liveListings : DEMO_LISTINGS;
        renderMarketplace(currentMarketplaceListings);
    } catch(e) {
        console.error('Marketplace load error:', e);
        currentMarketplaceListings = DEMO_LISTINGS;
        renderMarketplace(currentMarketplaceListings);
    }
}

function renderMarketplace(items) {
    const grid = document.getElementById('marketplace-grid');
    grid.innerHTML = items.map(item => `
        <div class="nft-card" onclick="buyMarketplaceItem(${item.id})">
            <div class="nft-image rarity-${item.rarity.toLowerCase()}">
                <span class="text-5xl">${item.icon}</span>
                <span class="rarity-badge ${item.rarity.toLowerCase()}">${item.rarity}</span>
            </div>
            <div class="p-4">
                <h4 class="font-bold mb-1">${item.name}</h4>
                <div class="flex justify-between items-center text-sm text-gray-400 mb-3">
                    <span>⚔️ ATK: ${item.attack}</span>
                    <span>Lv ${item.level}</span>
                </div>
                <div class="flex justify-between items-center">
                    <div>
                        <div class="text-xs text-gray-500">Price</div>
                        <div class="font-bold text-primary-400">${item.price} MATIC</div>
                    </div>
                    <button class="px-4 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 transition-all hover:scale-105">
                        Buy Now
                    </button>
                </div>
                <div class="text-xs text-gray-500 mt-2">Seller: ${item.seller}</div>
            </div>
        </div>
    `).join('');
}

function filterMarketplace(rarity, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (rarity === 'all') {
        renderMarketplace(currentMarketplaceListings);
    } else {
        renderMarketplace(currentMarketplaceListings.filter(i => i.rarity.toLowerCase() === rarity));
    }
}

async function buyMarketplaceItem(listingId) {
    if (!userAddress) {
        showToast('⚠️', 'Connect your wallet first');
        return;
    }

    const item = currentMarketplaceListings.find(i => i.id === listingId);
    if (!item) return;

    try {
        if (CONFIG.MARKETPLACE_CONTRACT !== '0x0000000000000000000000000000000000000000') {
            const marketplace = new ethers.Contract(CONFIG.MARKETPLACE_CONTRACT, MARKETPLACE_ABI, signer);
            const tx = await marketplace.buyItem(listingId, {
                value: ethers.parseEther(item.price)
            });
            showToast('⏳', 'Transaction submitted...');
            await tx.wait();
            showToast('✅', `Purchased "${item.name}"! 90% donated to charity.`);
        } else {
            showToast('✅', `Demo: Would purchase "${item.name}" for ${item.price} MATIC (90% → charity)`);
        }
    } catch (error) {
        console.error('Purchase failed:', error);
        showToast('❌', 'Purchase failed: ' + (error.reason || error.message));
    }
}

function showListModal() {
    document.getElementById('modal-list').classList.remove('hidden');
}

async function listNFT() {
    const tokenId = document.getElementById('list-token-id').value;
    const price = document.getElementById('list-price').value;

    if (!tokenId || !price) {
        showToast('⚠️', 'Please fill in all fields');
        return;
    }

    if (!userAddress) {
        showToast('⚠️', 'Connect your wallet first');
        return;
    }

    try {
        if (CONFIG.MARKETPLACE_CONTRACT !== '0x0000000000000000000000000000000000000000') {
            // First approve marketplace
            const nftContract = new ethers.Contract(CONFIG.NFT_CONTRACT, NFT_ABI, signer);
            const approveTx = await nftContract.approve(CONFIG.MARKETPLACE_CONTRACT, tokenId);
            showToast('⏳', 'Approving marketplace...');
            await approveTx.wait();

            // Then list
            const marketplace = new ethers.Contract(CONFIG.MARKETPLACE_CONTRACT, MARKETPLACE_ABI, signer);
            const listTx = await marketplace.listItem(
                CONFIG.NFT_CONTRACT,
                tokenId,
                ethers.parseEther(price)
            );
            showToast('⏳', 'Listing NFT...');
            await listTx.wait();
            showToast('✅', 'NFT listed on marketplace!');
        } else {
            showToast('✅', `Demo: Would list Token #${tokenId} for ${price} MATIC`);
        }
    } catch (error) {
        showToast('❌', 'Listing failed: ' + (error.reason || error.message));
    }

    closeModal('modal-list');
}

// ===================== DONATIONS =====================
const DEMO_DONATIONS = [
    { buyer: '0xA1b2...C3d4', seller: '0xE5f6...G7h8', amount: '0.45', time: '2 min ago' },
    { buyer: '0xI9j0...K1l2', seller: '0xM3n4...O5p6', amount: '0.72', time: '15 min ago' },
    { buyer: '0xQ7r8...S9t0', seller: '0xU1v2...W3x4', amount: '0.27', time: '1 hr ago' },
    { buyer: '0xY5z6...A7b8', seller: '0xC9d0...E1f2', amount: '0.90', time: '2 hrs ago' },
    { buyer: '0xG3h4...I5j6', seller: '0xK7l8...M9n0', amount: '0.36', time: '3 hrs ago' },
    { buyer: '0xO1p2...Q3r4', seller: '0xS5t6...U7v8', amount: '1.08', time: '5 hrs ago' },
    { buyer: '0xW9x0...Y1z2', seller: '0xA3b4...C5d6', amount: '0.54', time: '8 hrs ago' },
    { buyer: '0xE7f8...G9h0', seller: '0xI1j2...K3l4', amount: '0.63', time: '12 hrs ago' },
];

async function loadDonations() {
    const container = document.getElementById('donation-history');
    
    if (CONFIG.MARKETPLACE_CONTRACT === '0x0000000000000000000000000000000000000000' || typeof window.ethereum === 'undefined') {
        renderDonationHTML(DEMO_DONATIONS, container);
        return;
    }
    
    try {
        const prov = provider || new ethers.BrowserProvider(window.ethereum);
        const marketplace = new ethers.Contract(CONFIG.MARKETPLACE_CONTRACT, MARKETPLACE_ABI, prov);
        
        const filter = marketplace.filters.DonationMade();
        const events = await marketplace.queryFilter(filter, 0, 'latest'); 
        
        if (events.length === 0) {
            renderDonationHTML(DEMO_DONATIONS, container);
            return;
        }
        
        const liveDonations = events.map(e => {
            return {
                buyer: e.args.buyer.slice(0, 6) + '...' + e.args.buyer.slice(-4),
                seller: e.args.seller.slice(0, 6) + '...' + e.args.seller.slice(-4),
                amount: ethers.formatEther(e.args.donationAmount),
                time: 'Recently'
            };
        }).reverse();
        
        renderDonationHTML(liveDonations, container);
    } catch(e) {
        console.error('Donations load error:', e);
        renderDonationHTML(DEMO_DONATIONS, container);
    }
}

function renderDonationHTML(items, container) {
    container.innerHTML = items.map(d => `
        <div class="donation-row">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-cyber-500/10 flex items-center justify-center text-cyber-400">💚</div>
                <div>
                    <div class="text-sm font-medium">
                        <span class="text-gray-400">${d.buyer}</span> → <span class="text-gray-400">Charity</span>
                    </div>
                    <div class="text-xs text-gray-500">Seller: ${d.seller}</div>
                </div>
            </div>
            <div class="text-right">
                <div class="font-bold text-cyber-400">${d.amount} MATIC</div>
                <div class="text-xs text-gray-500">${d.time}</div>
            </div>
        </div>
    `).join('');
}

// ===================== GUILDS =====================
let currentGuilds = [];

async function loadGuilds() {
    try {
        if (!provider) {
            provider = new ethers.BrowserProvider(window.ethereum || new ethers.JsonRpcProvider(CONFIG.RPC_URL));
        }
        const guildsContract = new ethers.Contract(CONFIG.GUILDS_CONTRACT, GUILDS_ABI, provider);
        const allGuilds = await guildsContract.getAllGuilds();

        currentGuilds = await Promise.all(allGuilds.map(async (g) => {
            let emoji = '🏰';
            // Try to fetch metadata from IPFS for the emoji
            try {
                if (g.ipfsMetadataHash && g.ipfsMetadataHash.length > 0) {
                    const hash = g.ipfsMetadataHash.replace('ipfs://', '');
                    const resp = await fetch(`${CONFIG.PINATA_GATEWAY}${hash}`);
                    if (resp.ok) {
                        const meta = await resp.json();
                        emoji = meta.emoji || '🏰';
                    }
                }
            } catch (_) { /* use default emoji */ }
            return {
                name: g.name,
                members: Number(g.members),
                donated: ethers.formatEther(g.donated),
                emoji: emoji,
                creator: g.creator
            };
        }));

        // Sort by donated
        currentGuilds.sort((a, b) => parseFloat(b.donated) - parseFloat(a.donated));
    } catch (e) {
        console.warn('Contract read failed, showing empty list:', e.message);
        currentGuilds = [];
    }
    renderGuilds(currentGuilds);
}

function renderGuilds(guildList) {
    const tbody = document.getElementById('guild-leaderboard');
    if (guildList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="px-6 py-8 text-center text-gray-500">No guilds yet. Be the first to create one on-chain!</td></tr>`;
        return;
    }
    
    tbody.innerHTML = guildList.map((g, i) => `
        <tr class="guild-row">
            <td class="px-6 py-4">
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg ${
                    i === 0 ? 'bg-amber-500/20 text-amber-400' :
                    i === 1 ? 'bg-gray-400/20 text-gray-300' :
                    i === 2 ? 'bg-amber-700/20 text-amber-600' :
                    'bg-white/5 text-gray-500'
                } font-bold text-sm">
                    ${i < 3 ? ['🥇','🥈','🥉'][i] : `#${i+1}`}
                </span>
            </td>
            <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                    <span class="text-2xl">${g.emoji}</span>
                    <span class="font-semibold">${g.name}</span>
                </div>
            </td>
            <td class="px-6 py-4 text-gray-400">${g.members}</td>
            <td class="px-6 py-4 text-cyber-400 font-semibold">${g.donated} MATIC</td>
            <td class="px-6 py-4 text-right">
                <button onclick="joinGuild('${g.name.replace(/'/g, "\\'")}')"
                    class="px-4 py-1.5 rounded-lg text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    Join
                </button>
            </td>
        </tr>
    `).join('');
}

function searchGuilds() {
    const query = document.getElementById('guild-search').value.toLowerCase();
    if (!query) {
        renderGuilds(currentGuilds);
        return;
    }
    const filtered = currentGuilds.filter(g => g.name.toLowerCase().includes(query));
    renderGuilds(filtered);
}

function showCreateGuildModal() {
    document.getElementById('modal-guild').classList.remove('hidden');
}

async function createGuild() {
    if (!signer) {
        showToast('⚠️', 'Connect your wallet first');
        return;
    }
    const name = document.getElementById('guild-name-input').value.trim();
    if (!name) {
        showToast('⚠️', 'Please enter a guild name');
        return;
    }

    const emojis = ['🏰', '⚔️', '🛡️', '⚡', '🌟', '👹', '🐺', '🐉', '🔮', '✨'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    try {
        showToast('⏳', 'Uploading metadata to IPFS...');

        // 1. Upload metadata to Pinata
        let ipfsHash = 'ipfs://placeholder';
        if (CONFIG.PINATA_JWT !== 'YOUR_PINATA_JWT_TOKEN') {
            const metadata = { name, emoji, creator: userAddress, createdAt: new Date().toISOString() };
            const pinataRes = await fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${CONFIG.PINATA_JWT}`
                },
                body: JSON.stringify({ pinataContent: metadata, pinataMetadata: { name: `Guild-${name}` } })
            });
            if (pinataRes.ok) {
                const pinataData = await pinataRes.json();
                ipfsHash = `ipfs://${pinataData.IpfsHash}`;
            }
        }

        // 2. Create guild on-chain
        showToast('⏳', 'Confirm transaction in MetaMask...');
        const guildsContract = new ethers.Contract(CONFIG.GUILDS_CONTRACT, GUILDS_ABI, signer);
        const tx = await guildsContract.createGuild(name, ipfsHash);
        showToast('⏳', 'Mining transaction...');
        await tx.wait();

        showToast('✅', `Guild "${name}" created on-chain!`);
        loadGuilds();
    } catch (error) {
        console.error('Create guild error:', error);
        showToast('❌', error.reason || error.message || 'Failed to create guild');
    }

    closeModal('modal-guild');
    document.getElementById('guild-name-input').value = '';
    document.getElementById('guild-search').value = '';
}

async function joinGuild(name) {
    if (!signer) {
        showToast('⚠️', 'Connect your wallet first');
        return;
    }

    try {
        showToast('⏳', 'Confirm transaction in MetaMask...');
        const guildsContract = new ethers.Contract(CONFIG.GUILDS_CONTRACT, GUILDS_ABI, signer);
        const tx = await guildsContract.joinGuild(name);
        showToast('⏳', 'Mining transaction...');
        await tx.wait();

        showToast('✅', `Joined guild "${name}" on-chain!`);
        loadGuilds();
    } catch (error) {
        console.error('Join guild error:', error);
        showToast('❌', error.reason || error.message || 'Failed to join guild');
    }
}

// ===================== STREAMING =====================
const DEMO_TIPS = [
    { from: '0xA1b2...C3d4', amount: '0.05', time: '1 min ago' },
    { from: '0xE5f6...G7h8', amount: '0.1', time: '3 min ago' },
    { from: '0xI9j0...K1l2', amount: '0.02', time: '5 min ago' },
    { from: '0xM3n4...O5p6', amount: '0.5', time: '8 min ago' },
    { from: '0xQ7r8...S9t0', amount: '0.08', time: '12 min ago' },
    { from: '0xU1v2...W3x4', amount: '0.15', time: '20 min ago' },
    { from: '0xY5z6...A7b8', amount: '0.03', time: '30 min ago' },
    { from: '0xC9d0...E1f2', amount: '1.0', time: '45 min ago' },
];

const DEMO_STREAMERS = [
    { name: 'PixelQueen', viewers: 892, game: 'CreatorVerse Arena', avatar: 'P', color: 'from-pink-500 to-rose-500' },
    { name: 'CryptoKnight', viewers: 654, game: 'NFT Battles', avatar: 'C', color: 'from-blue-500 to-cyan-500' },
    { name: 'ShadowMaster', viewers: 421, game: 'Guild Wars', avatar: 'S', color: 'from-purple-500 to-violet-500' },
    { name: 'DragonSlayer', viewers: 318, game: 'Boss Raids', avatar: 'D', color: 'from-amber-500 to-orange-500' },
];

function loadStreaming() {
    // Tips
    const tipsList = document.getElementById('tips-list');
    tipsList.innerHTML = DEMO_TIPS.map(t => `
        <div class="tip-item">
            <div class="flex items-center justify-between">
                <span class="text-sm text-gray-400">${t.from}</span>
                <span class="text-xs text-gray-500">${t.time}</span>
            </div>
            <div class="text-accent-400 font-bold mt-1">💎 ${t.amount} MATIC</div>
        </div>
    `).join('');

    // Streamers
    const grid = document.getElementById('streamers-grid');
    grid.innerHTML = DEMO_STREAMERS.map(s => `
        <div class="streamer-card">
            <div class="aspect-video bg-surface-800 flex items-center justify-center relative">
                <span class="text-4xl">🎮</span>
                <div class="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-red-500/90 text-xs font-bold flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> LIVE
                </div>
                <div class="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/60 text-xs">
                    👁️ ${s.viewers}
                </div>
            </div>
            <div class="p-4 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center font-bold text-sm">${s.avatar}</div>
                <div>
                    <h4 class="font-semibold text-sm">${s.name}</h4>
                    <p class="text-xs text-gray-500">${s.game}</p>
                </div>
            </div>
        </div>
    `).join('');
}

async function sendTip(creatorAddress) {
    if (!userAddress) {
        showToast('⚠️', 'Connect your wallet first');
        return;
    }

    const amount = document.getElementById('tip-amount').value;
    if (!amount || parseFloat(amount) <= 0) {
        showToast('⚠️', 'Enter a valid tip amount');
        return;
    }

    try {
        if (typeof window.ethereum !== 'undefined' && signer) {
            const tx = await signer.sendTransaction({
                to: creatorAddress,
                value: ethers.parseEther(amount),
            });
            showToast('⏳', 'Sending tip...');
            await tx.wait();
            showToast('✅', `Tipped ${amount} MATIC to the creator!`);
        } else {
            showToast('✅', `Demo: Would tip ${amount} MATIC to creator`);
        }
        document.getElementById('tip-amount').value = '';
    } catch (error) {
        showToast('❌', 'Tip failed: ' + (error.reason || error.message));
    }
}

// ===================== DAO =====================
const DEMO_PROPOSALS = [
    {
        id: 0,
        title: 'Add new charity: Educational Fund',
        description: 'Propose to add an educational charity as a second donation recipient. 60% to current charity, 30% to educational fund, 10% to seller.',
        proposer: '0xA1b2...C3d4',
        forVotes: 42,
        againstVotes: 8,
        deadline: Date.now() + 86400000 * 2,
        executed: false,
        status: 'active'
    },
    {
        id: 1,
        title: 'Increase seller share to 15%',
        description: 'Modify the marketplace split to 85/15 instead of 90/10 to incentivize more listings and trading activity.',
        proposer: '0xE5f6...G7h8',
        forVotes: 18,
        againstVotes: 31,
        deadline: Date.now() + 86400000,
        executed: false,
        status: 'active'
    },
    {
        id: 2,
        title: 'Launch PvP Tournament System',
        description: 'Implement a tournament bracket system where players compete in PvP battles with NFT gear staking.',
        proposer: '0xI9j0...K1l2',
        forVotes: 55,
        againstVotes: 3,
        deadline: Date.now() - 86400000,
        executed: true,
        status: 'passed'
    },
    {
        id: 3,
        title: 'Add Dynamic NFT Evolution',
        description: 'Allow gear NFTs to evolve and upgrade on-chain based on player achievements and battle history.',
        proposer: '0xM3n4...O5p6',
        forVotes: 37,
        againstVotes: 12,
        deadline: Date.now() + 86400000 * 3,
        executed: false,
        status: 'active'
    },
];

let currentDAOProposals = DEMO_PROPOSALS;

async function loadDAO() {
    if (CONFIG.DAO_CONTRACT === '0x0000000000000000000000000000000000000000' || typeof window.ethereum === 'undefined') {
        currentDAOProposals = DEMO_PROPOSALS;
        renderDAOHTML();
        return;
    }
    
    try {
        const prov = provider || new ethers.BrowserProvider(window.ethereum);
        const dao = new ethers.Contract(CONFIG.DAO_CONTRACT, DAO_ABI, prov);
        
        const count = await dao.proposalCount();
        const liveProposals = [];
        
        for (let i = 0; i < Number(count); i++) {
            const p = await dao.proposals(i);
            
            liveProposals.push({
                id: Number(p.id),
                title: p.title,
                description: p.description,
                proposer: p.proposer.slice(0, 6) + '...' + p.proposer.slice(-4),
                forVotes: Number(p.forVotes),
                againstVotes: Number(p.againstVotes),
                deadline: Number(p.deadline) * 1000,
                executed: p.executed,
                status: p.executed ? 'passed' : (Number(p.deadline) * 1000 > Date.now() ? 'active' : 'ended')
            });
        }
        
        currentDAOProposals = liveProposals.length > 0 ? liveProposals.reverse() : DEMO_PROPOSALS;
        renderDAOHTML();
    } catch(e) {
        console.error('DAO load error:', e);
        currentDAOProposals = DEMO_PROPOSALS;
        renderDAOHTML();
    }
}

function renderDAOHTML() {
    const container = document.getElementById('proposals-list');
    container.innerHTML = currentDAOProposals.map(p => {
        const totalVotes = p.forVotes + p.againstVotes;
        const forPct = totalVotes > 0 ? (p.forVotes / totalVotes * 100) : 0;
        const againstPct = totalVotes > 0 ? (p.againstVotes / totalVotes * 100) : 0;
        const timeLeft = p.deadline > Date.now()
            ? `${Math.ceil((p.deadline - Date.now()) / 86400000)}d left`
            : 'Ended';

        return `
            <div class="proposal-card">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <span class="px-2 py-0.5 rounded-full text-xs font-semibold ${
                                p.status === 'active' ? 'bg-primary-500/20 text-primary-400 border border-primary-500/20' :
                                p.status === 'passed' ? 'bg-cyber-500/20 text-cyber-400 border border-cyber-500/20' :
                                'bg-red-500/20 text-red-400 border border-red-500/20'
                            }">
                                ${p.status === 'active' ? '🔵 Active' : p.status === 'passed' ? '✅ Passed' : '❌ Failed'}
                            </span>
                            <span class="text-xs text-gray-500">Proposal #${p.id}</span>
                        </div>
                        <h3 class="text-lg font-bold">${p.title}</h3>
                    </div>
                    <div class="text-sm text-gray-500">${timeLeft}</div>
                </div>
                <p class="text-gray-400 text-sm mb-6">${p.description}</p>

                <!-- Votes -->
                <div class="mb-4">
                    <div class="flex justify-between text-sm mb-2">
                        <span class="text-cyber-400">For: ${p.forVotes}</span>
                        <span class="text-red-400">Against: ${p.againstVotes}</span>
                    </div>
                    <div class="vote-bar">
                        <div class="vote-bar-fill bg-gradient-to-r from-cyber-500 to-cyber-400" style="width:${forPct}%"></div>
                    </div>
                </div>

                ${p.status === 'active' ? `
                    <div class="flex gap-3">
                        <button onclick="voteProposal(${p.id}, true)" class="flex-1 py-2.5 rounded-xl text-sm font-bold bg-cyber-500/10 border border-cyber-500/20 text-cyber-400 hover:bg-cyber-500/20 transition-all">
                            👍 Vote For
                        </button>
                        <button onclick="voteProposal(${p.id}, false)" class="flex-1 py-2.5 rounded-xl text-sm font-bold bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all">
                            👎 Vote Against
                        </button>
                        <button onclick="executeProposal(${p.id})" class="flex-1 py-2.5 rounded-xl text-sm font-bold bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20 transition-all">
                            ⚡ Execute
                        </button>
                    </div>
                ` : ''}

                <div class="text-xs text-gray-500 mt-3">Proposed by: ${p.proposer}</div>
            </div>
        `;
    }).join('');
}

function showProposalModal() {
    document.getElementById('modal-proposal').classList.remove('hidden');
}

async function createProposal() {
    const title = document.getElementById('proposal-title').value;
    const desc = document.getElementById('proposal-desc').value;

    if (!title || !desc) {
        showToast('⚠️', 'Please fill in all fields');
        return;
    }

    if (!userAddress) {
        showToast('⚠️', 'Connect your wallet first');
        return;
    }

    try {
        if (CONFIG.DAO_CONTRACT !== '0x0000000000000000000000000000000000000000') {
            const dao = new ethers.Contract(CONFIG.DAO_CONTRACT, DAO_ABI, signer);
            const tx = await dao.createProposal(title, desc);
            showToast('⏳', 'Creating proposal...');
            await tx.wait();
            showToast('✅', 'Proposal created!');
            loadDAO(); // Reload
        } else {
            showToast('✅', `Demo: Proposal "${title}" created!`);
        }
    } catch (error) {
        showToast('❌', 'Failed: ' + (error.reason || error.message));
    }

    closeModal('modal-proposal');
    document.getElementById('proposal-title').value = '';
    document.getElementById('proposal-desc').value = '';
}

async function voteProposal(proposalId, support) {
    if (!userAddress) {
        showToast('⚠️', 'Connect your wallet first');
        return;
    }

    try {
        if (CONFIG.DAO_CONTRACT !== '0x0000000000000000000000000000000000000000') {
            const dao = new ethers.Contract(CONFIG.DAO_CONTRACT, DAO_ABI, signer);
            const tx = await dao.vote(proposalId, support);
            showToast('⏳', 'Submitting vote...');
            await tx.wait();
            showToast('✅', `Vote ${support ? 'for' : 'against'} submitted!`);
            loadDAO(); // Reload
        } else {
            showToast('✅', `Demo: Voted ${support ? 'for' : 'against'} Proposal #${proposalId}`);
        }
    } catch (error) {
        showToast('❌', 'Vote failed: ' + (error.reason || error.message));
    }
}

async function executeProposal(proposalId) {
    if (!userAddress) {
        showToast('⚠️', 'Connect your wallet first');
        return;
    }

    try {
        if (CONFIG.DAO_CONTRACT !== '0x0000000000000000000000000000000000000000') {
            const dao = new ethers.Contract(CONFIG.DAO_CONTRACT, DAO_ABI, signer);
            const tx = await dao.executeProposal(proposalId);
            showToast('⏳', 'Executing proposal...');
            await tx.wait();
            showToast('✅', `Proposal executed successfully!`);
            loadDAO(); // Reload
        } else {
            showToast('✅', `Demo: Proposal executed!`);
        }
    } catch (error) {
        showToast('❌', 'Execution failed: ' + (error.reason || error.message));
    }
}

// ===================== PROFILE =====================
function loadProfile() {
    if (userAddress) {
        document.getElementById('profile-address').textContent = `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;
        document.getElementById('profile-avatar').textContent = userAddress.slice(2, 4).toUpperCase();
        document.getElementById('profile-network').textContent = 'Polygon Amoy Testnet';
    }

    document.getElementById('profile-battles').textContent = gameState.battlesWon;
    document.getElementById('profile-nfts').textContent = gameState.inventory.filter(i => i.minted).length;

    // Show minted NFTs
    const mintedItems = gameState.inventory.filter(i => i.minted);
    const grid = document.getElementById('my-nfts-grid');

    if (mintedItems.length > 0) {
        grid.innerHTML = mintedItems.map(item => `
            <div class="nft-card">
                <div class="nft-image rarity-${item.rarity.toLowerCase()}">
                    <span class="text-4xl">${item.icon}</span>
                    <span class="rarity-badge ${item.rarity.toLowerCase()}">${item.rarity}</span>
                </div>
                <div class="p-4">
                    <h4 class="font-bold mb-1">${item.name}</h4>
                    <div class="flex justify-between items-center text-sm text-gray-400">
                        <span>⚔️ ATK: ${item.attack}</span>
                        <span>Lv ${item.level}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// ===================== UTILITY =====================
function showToast(icon, message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-icon').textContent = icon;
    document.getElementById('toast-message').textContent = message;
    toast.classList.remove('hidden');

    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => {
        toast.classList.add('hidden');
    }, 4000);
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
    // Check if already connected
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({ method: 'eth_accounts' }).then(accounts => {
            if (accounts.length > 0) {
                userAddress = accounts[0];
                provider = new ethers.BrowserProvider(window.ethereum);
                provider.getSigner().then(s => { signer = s; });
                const short = `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;
                document.getElementById('wallet-btn').innerHTML = `
                    <span class="w-2 h-2 rounded-full bg-cyber-400 inline-block mr-2"></span>
                    ${short}
                `;
            }
        });
    }

    // Preload marketplace data
    loadMarketplace();
    loadDonations();
    loadGuilds();
    loadStreaming();
    loadDAO();
});
