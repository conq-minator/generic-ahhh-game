// Global state
let provider;
let signer;
let walletAddress;
let gameGearContract;
let marketplaceContract;

const SEPOLIA_CHAIN_ID = 11155111;

// DOM Elements
const connectBtn = document.getElementById('connectWalletBtn');
const walletSpan = document.getElementById('walletAddress');
const statusBanner = document.getElementById('connectionStatus');
const dashboard = document.getElementById('dashboard');
const txPopup = document.getElementById('txPopup');
const txPopupText = document.getElementById('txPopupText');

// Init
async function init() {
    if (window.ethereum) {
        // Setup Provider
        provider = new ethers.BrowserProvider(window.ethereum);
        
        // Check initial connection
        const accounts = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
            await handleConnection(accounts[0]);
        }
        
        // Listeners for account/network changes
        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length > 0) handleConnection(accounts[0]);
            else disconnect();
        });
        
        window.ethereum.on('chainChanged', () => window.location.reload());
        
        connectBtn.addEventListener('click', connectWallet);
        setupContractListeners();
        document.getElementById('browseSearch')?.addEventListener('input', () => renderBrowseListings());
        document.getElementById('browseTypeFilter')?.addEventListener('change', () => renderBrowseListings());
        document.getElementById('yourListingsSearch')?.addEventListener('input', () => renderYourListings());
        document.getElementById('yourSoldSearch')?.addEventListener('input', () => renderSoldListings());
        
        document.querySelectorAll('input[name="dashboard-sale-type"]').forEach(radio => {
            radio.addEventListener('change', () => {
                const wrap = document.getElementById('dashboard-charity-wrap');
                if (wrap) wrap.classList.toggle('hidden', document.querySelector('input[name="dashboard-sale-type"]:checked')?.value !== 'charity');
            });
        });
        
        loadDashboardCharities();
    } else {
        statusBanner.textContent = "âš ï¸ Please install MetaMask to use this dashboard.";
        connectBtn.disabled = true;
    }
}

async function loadDashboardCharities() {
    try {
        const { getCharities } = await import('./src/charity/CharityService.js');
        const list = await getCharities();
        window.__charityListCache = list;
        
        const sel = document.getElementById('dashboard-charity-select');
        if (sel) {
            if (list.length === 0) {
                sel.innerHTML = '<option value="">No charities registered yet</option>';
            } else {
                sel.innerHTML = '<option value="">â€” Select charity â€”</option>' +
                    list.map(c => `<option value="${c.walletAddress}">${c.charityName}</option>`).join('');
            }
        }
    } catch (e) {
        console.warn('Failed to load charities:', e);
    }
}

async function connectWallet() {
    try {
        const accounts = await provider.send("eth_requestAccounts", []);
        await handleConnection(accounts[0]);
    } catch (err) {
        console.error(err);
        alert("Failed to connect wallet.");
    }
}

async function handleConnection(address) {
    const network = await provider.getNetwork();
    if (network.chainId !== BigInt(SEPOLIA_CHAIN_ID)) {
        statusBanner.textContent = "âš ï¸ Please switch your MetaMask to the Sepolia Testnet.";
        statusBanner.className = "status-banner error";
        dashboard.classList.add('hidden');
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0xaa36a7' }], // 11155111 in hex
            });
        } catch (switchError) {
            console.error("Failed to switch to Sepolia");
            return;
        }
    }

    // Success Connect
    walletAddress = address;
    signer = await provider.getSigner();
    
    // Init Contracts
    gameGearContract = new ethers.Contract(CONTRACT_ADDRESSES.GAME_GEAR, GAME_GEAR_ABI, signer);
    marketplaceContract = new ethers.Contract(CONTRACT_ADDRESSES.MARKETPLACE, MARKETPLACE_ABI, signer);

    // Update UI
    connectBtn.classList.add('hidden');
    walletSpan.textContent = address.substring(0,6) + "..." + address.substring(38);
    walletSpan.classList.remove('hidden');
    
    statusBanner.textContent = "ðŸŸ¢ Connected to Sepolia Testnet";
    statusBanner.className = "status-banner success";
    dashboard.classList.remove('hidden');

    loadAllListings();
}

function disconnect() {
    walletAddress = null;
    signer = null;
    connectBtn.classList.remove('hidden');
    walletSpan.classList.add('hidden');
    dashboard.classList.add('hidden');
    statusBanner.textContent = "âš ï¸ Please connect MetaMask";
    statusBanner.className = "status-banner error";
}

// UI Helpers
function showPendingTx(msg) {
    txPopupText.textContent = msg;
    txPopup.classList.remove('hidden');
}
function hidePendingTx() {
    txPopup.classList.add('hidden');
}

function truncateAddress(addr) {
    if (!addr || addr.length < 10) return addr;
    return addr.substring(0, 6) + '...' + addr.substring(addr.length - 4);
}

function getBrowseFilter() {
    const q = (document.getElementById('browseSearch')?.value || '').trim().toLowerCase();
    const typeVal = (document.getElementById('browseTypeFilter')?.value || 'all');
    return { q, typeVal };
}

function filterBrowseItems(items) {
    if (!items || !items.length) return items;
    const { q, typeVal } = getBrowseFilter();
    return items.filter(item => {
        if (typeVal === 'personal' && !item.isPersonalSale) return false;
        if (typeVal === 'charity' && item.isPersonalSale) return false;
        if (!q) return true;
        const tokenStr = String(item.tokenId);
        const seller = (item.seller || '').toLowerCase();
        return tokenStr.includes(q) || seller.includes(q);
    });
}

function renderBrowseListings(items) {
    const browseEl = document.getElementById('browseListings');
    if (!browseEl) return;
    const list = window.__browseItemsAll ? filterBrowseItems(window.__browseItemsAll) : (items || []);
    browseEl.innerHTML = '';
    
    // Find charities once if available in cache
    const charities = window.__charityListCache || [];

    if (list.length === 0) {
        browseEl.innerHTML = '<p class="placeholder-text">No matching listings. Try different filters or list an item.</p>';
    } else {
        list.forEach(item => {
            const card = document.createElement('div');
            card.className = 'listing-card';
            const priceEth = ethers.formatEther(item.price);
            
            let saleLabel = 'Personal sale';
            let badgeClass = 'badge-personal';
            
            if (!item.isPersonalSale && item.charityBeneficiary) {
                badgeClass = 'badge-charity';
                const charityInfo = charities.find(c => c.walletAddress.toLowerCase() === item.charityBeneficiary.toLowerCase());
                if (charityInfo) {
                     saleLabel = `Charity Supported Listing: ${charityInfo.charityName} (${charityInfo.mission ? charityInfo.mission.substring(0, 30) + '...' : 'Great cause'})`;
                } else {
                     saleLabel = `Charity Supported Listing (90% to ${truncateAddress(item.charityBeneficiary)})`;
                }
            }

            card.innerHTML = `
                <span class="listing-meta">Contract: ${truncateAddress(item.nftContract)} Â· Token #${item.tokenId}</span>
                <span class="listing-badge ${badgeClass}">${saleLabel}</span>
                <span class="listing-price">${priceEth} ETH</span>
                <span class="listing-meta">Seller: ${truncateAddress(item.seller)}</span>
                <div class="listing-actions">
                    <button type="button" class="btn success small buy-listing-btn" data-nft="${item.nftContract}" data-token="${item.tokenId}" data-price="${item.price}" data-market="${item.marketContractAddress}">Buy</button>
                </div>`;
            browseEl.appendChild(card);
        });
    }
}

function renderYourListings(items) {
    const yourEl = document.getElementById('yourListings');
    if (!yourEl) return;
    let list = items || window.__yourActiveAll || [];
    const q = (document.getElementById('yourListingsSearch')?.value || '').trim();
    if (q) list = list.filter(item => String(item.tokenId).includes(q));
    yourEl.innerHTML = '';
    
    const charities = window.__charityListCache || [];

    if (list.length === 0) {
        yourEl.innerHTML = '<p class="placeholder-text">You have no active listings. List an item above.</p>';
    } else {
        list.forEach(item => {
            const card = document.createElement('div');
            card.className = 'listing-card';
            const priceEth = ethers.formatEther(item.price);
            
            let saleLabel = 'Personal sale';
            let badgeClass = 'badge-personal';
            
            if (!item.isPersonalSale && item.charityBeneficiary) {
                badgeClass = 'badge-charity';
                const charityInfo = charities.find(c => c.walletAddress.toLowerCase() === item.charityBeneficiary.toLowerCase());
                if (charityInfo) {
                     saleLabel = `Charity Sale: ${charityInfo.charityName}`;
                } else {
                     saleLabel = `Charity Sale (90% to ${truncateAddress(item.charityBeneficiary)})`;
                }
            }

            card.innerHTML = `
                <span class="listing-meta">Contract: ${truncateAddress(item.nftContract)} Â· Token #${item.tokenId}</span>
                <span class="listing-badge ${badgeClass}">${saleLabel}</span>
                <span class="listing-price">${priceEth} ETH</span>
                <div class="listing-actions">
                    <button type="button" class="btn danger small cancel-listing-btn" data-nft="${item.nftContract}" data-token="${item.tokenId}" data-market="${item.marketContractAddress}">Cancel listing</button>
                </div>`;
            yourEl.appendChild(card);
        });
    }
}

function renderSoldListings(items) {
    const soldEl = document.getElementById('yourSoldListings');
    if (!soldEl) return;
    let list = items || window.__yourSoldAll || [];
    const q = (document.getElementById('yourSoldSearch')?.value || '').trim();
    if (q) list = list.filter(item => String(item.tokenId).includes(q));
    soldEl.innerHTML = '';
    if (list.length === 0) {
        soldEl.innerHTML = '<p class="placeholder-text">No sold items yet. When you sell, the NFT leaves your wallet and appears here.</p>';
    } else {
        list.forEach(item => {
            const card = document.createElement('div');
            card.className = 'listing-card';
            const priceEth = ethers.formatEther(item.price);
            card.innerHTML = `
                <span class="listing-meta">Contract: ${truncateAddress(item.nftContract)} Â· Token #${item.tokenId}</span>
                <span class="listing-price">Sold for ${priceEth} ETH</span>
                <span class="listing-meta">Buyer: ${truncateAddress(item.buyer)}</span>`;
            soldEl.appendChild(card);
        });
    }
}

// --------- LISTINGS (Browse, Yours, Sold) ---------

async function loadAllListings() {
    if (!marketplaceContract || !walletAddress) return;
    const browseEl = document.getElementById('browseListings');
    const yourEl = document.getElementById('yourListings');
    const soldEl = document.getElementById('yourSoldListings');
    if (!browseEl || !yourEl || !soldEl) return;
    browseEl.innerHTML = '<p class="placeholder-text">Loading...</p>';
    yourEl.innerHTML = '<p class="placeholder-text">Loading...</p>';
    soldEl.innerHTML = '<p class="placeholder-text">Loading...</p>';

    try {
        const iface = new ethers.Interface(MARKETPLACE_ABI);
        const itemListedTopic = iface.getEvent('ItemListed').topicHash;
        const itemListedForCharityTopic = iface.getEvent('ItemListedForCharity').topicHash;
        const itemSoldTopic = iface.getEvent('ItemSold').topicHash;

        const fromBlock = 0;
        const toBlock = 'latest';
        
        // Fetch from BOTH current and old marketplaces
        const logPromises = [];
        for (const addr of [CONTRACT_ADDRESSES.MARKETPLACE, CONTRACT_ADDRESSES.OLD_MARKETPLACE]) {
            logPromises.push(provider.getLogs({ address: addr, topics: [itemListedTopic], fromBlock, toBlock }));
            logPromises.push(provider.getLogs({ address: addr, topics: [itemListedForCharityTopic], fromBlock, toBlock }));
            logPromises.push(provider.getLogs({ address: addr, topics: [itemSoldTopic], fromBlock, toBlock }));
        }
        
        const results = await Promise.all(logPromises);
        const logsListed = [...results[0], ...results[3]];
        const logsListedForCharity = [...results[1], ...results[4]];
        const logsSold = [...results[2], ...results[5]];

        const allListed = [];

        function parseListedLog(log) {
            try {
                const parsed = iface.parseLog({ topics: log.topics, data: log.data });
                if (!parsed || (parsed.name !== 'ItemListed' && parsed.name !== 'ItemListedForCharity')) return null;
                return {
                    nftContract: parsed.args[0],
                    tokenId: parsed.args[1],
                    tokenIdKey: String(parsed.args[1])
                };
            } catch (err) {
                console.warn("Skipping unparseable log:", err);
                return null;
            }
        }

        const OLD_MARKETPLACE_ABI = ["function listings(address,uint256) view returns (uint256 price, address seller)"];
        const oldMarketplaceContract = new ethers.Contract(CONTRACT_ADDRESSES.OLD_MARKETPLACE, OLD_MARKETPLACE_ABI, provider);

        const seen = new Set();
        for (const log of [...logsListed, ...logsListedForCharity]) {
            const item = parseListedLog(log);
            if (!item) continue;
            
            // Track which contract triggered the log
            const isOldContract = log.address.toLowerCase() === CONTRACT_ADDRESSES.OLD_MARKETPLACE.toLowerCase();
            const sourceContract = isOldContract ? oldMarketplaceContract : marketplaceContract;
            
            const key = `${log.address.toLowerCase()}-${item.nftContract.toLowerCase()}-${item.tokenIdKey}`;
            if (seen.has(key)) continue;
            seen.add(key);
            
            let current;
            try {
                current = await sourceContract.listings(item.nftContract, item.tokenId);
            } catch (err) { 
                console.error("Error fetching listings mapping:", err);
                continue; 
            }
            
            // Safely extract ethers Result into standard array.
            let arr;
            try {
                arr = Array.from(current);
                if (arr.length === 0) arr = [current.price || current[0], current.seller || current[1], current[2], current[3]];
            } catch(e) {
                arr = [current.price || current[0], current.seller || current[1], current[2], current[3]];
            }

            const priceBn = arr[0];
            if (priceBn == null || priceBn === 0n || priceBn.toString() === "0") {
                console.warn(`Skipped NFT ${item.nftContract} Token ${item.tokenId}: price is 0. Mapping returned:`, current);
                continue;
            }
            
            const sellerAddr = arr[1] ? arr[1].toString() : ethers.ZeroAddress;
            const isPersonalSale = arr.length > 2 ? !!arr[2] : (!isOldContract ? false : true);
            const charityBeneficiary = arr.length > 3 && arr[3] && String(arr[3]) !== '0x0000000000000000000000000000000000000000' ? arr[3] : null;
            
            allListed.push({
                marketContractAddress: log.address.toLowerCase(),
                nftContract: item.nftContract,
                tokenId: item.tokenId,
                price: priceBn,
                seller: sellerAddr,
                isPersonalSale,
                charityBeneficiary
            });
        }

        const yourActive = allListed.filter(l => l.seller.toLowerCase() === walletAddress.toLowerCase());
        const browseItemsAll = allListed.filter(l => l.seller.toLowerCase() !== walletAddress.toLowerCase());

        window.__browseItemsAll = browseItemsAll;
        window.__yourActiveAll = yourActive;
        renderBrowseListings(browseItemsAll);
        renderYourListings(yourActive);

        const yourSold = [];
        for (const log of logsSold) {
            const parsed = iface.parseLog({ topics: log.topics, data: log.data });
            if (!parsed || parsed.name !== 'ItemSold') continue;
            const args = parsed.args;
            const seller = (args.seller ?? args[4] ?? '').toString();
            if (seller.toLowerCase() === walletAddress.toLowerCase()) {
                yourSold.push({
                    nftContract: args[0] ?? args.nftContract,
                    tokenId: args[1] ?? args.tokenId,
                    price: args[2] ?? args.price,
                    buyer: args[3] ?? args.buyer,
                    seller
                });
            }
        }
        yourSold.reverse();
        window.__yourSoldAll = yourSold;

        renderYourListings(yourActive);
        renderSoldListings(yourSold);
        bindListingButtons();
    } catch (err) {
        console.error(err);
        browseEl.innerHTML = '<p class="placeholder-text">Failed to load listings. Try Refresh.</p>';
        yourEl.innerHTML = '<p class="placeholder-text">Failed to load.</p>';
        soldEl.innerHTML = '<p class="placeholder-text">Failed to load.</p>';
    }
}

function bindListingButtons() {
    document.querySelectorAll('.buy-listing-btn').forEach(btn => {
        btn.onclick = async () => {
            const nftContract = btn.getAttribute('data-nft');
            const price = btn.getAttribute('data-price');
            const tokenId = btn.getAttribute('data-token');
            const marketAddr = btn.getAttribute('data-market');
            if (!nftContract || !price || !tokenId || !marketAddr) return;
            try {
                showPendingTx("Purchasing item...");
                const activeMarketContract = new ethers.Contract(marketAddr, MARKETPLACE_ABI, signer);
                const tx = await activeMarketContract.buyItem(nftContract, tokenId, { value: price });
                await tx.wait();
                alert('Purchase successful! The NFT is now in your wallet.');
                loadAllListings();
            } catch (err) {
                console.error(err);
                alert("Purchase failed: " + (err.reason || err.message));
            } finally {
                hidePendingTx();
            }
        };
    });
    document.querySelectorAll('.cancel-listing-btn').forEach(btn => {
        btn.onclick = async () => {
            const nftContract = btn.getAttribute('data-nft');
            const tokenId = btn.getAttribute('data-token');
            const marketAddr = btn.getAttribute('data-market');
            if (!nftContract || !tokenId || !marketAddr) return;
            try {
                showPendingTx("Canceling listing...");
                const activeMarketContract = new ethers.Contract(marketAddr, MARKETPLACE_ABI, signer);
                const tx = await activeMarketContract.cancelListing(nftContract, tokenId);
                await tx.wait();
                alert('Listing canceled.');
                loadAllListings();
            } catch (err) {
                console.error(err);
                alert("Cancel failed: " + (err.reason || err.message));
            } finally {
                hidePendingTx();
            }
        };
    });
}

// --------- CONTRACT INTERACTIONS ---------

function setupContractListeners() {
    
    // 1. Mint Gear
    document.getElementById('mintForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const uri = document.getElementById('mintImage').value;
            const rarity = document.getElementById('mintRarity').value;
            const attack = document.getElementById('mintAttack').value;

            showPendingTx("Sign transaction to Mint Gear...");
            const tx = await gameGearContract.mintGear(walletAddress, uri, rarity, attack);
            
            showPendingTx(`Minting... waiting for block...`);
            const receipt = await tx.wait();
            
            // Find Transfer event to get Token ID
            const event = receipt.logs.find(log => log.topics[0] === ethers.id("Transfer(address,address,uint256)"));
            const tokenId = ethers.toNumber(event.topics[3]);
            
            alert(`Successfully Minted! Your new Token ID is: ${tokenId}`);
        } catch (err) {
            console.error(err);
            alert("Minting failed: " + (err.reason || err.message));
        } finally {
            hidePendingTx();
        }
    });

    // 2. View Stats
    document.getElementById('statsForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const tokenId = document.getElementById('statsTokenId').value;
            const stats = await gameGearContract.getGearStats(tokenId);
            
            const rarities = ["", "Common", "Uncommon", "Rare", "Epic", "Legendary"];
            
            const resultBox = document.getElementById('statsResult');
            resultBox.innerHTML = `
                Token #${tokenId} Stats:<br>
                Rarity: ${rarities[Number(stats[0])]} (${stats[0]})<br>
                Attack: ${stats[1]}<br>
                Level: ${stats[2]}
            `;
            resultBox.classList.remove('hidden');
        } catch (err) {
            console.error(err);
            alert("Could not fetch stats. Does this token exist?");
        }
    });

    // 3. Level Up
    document.getElementById('upgradeForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const tokenId = document.getElementById('upgradeTokenId').value;
            showPendingTx("Sign transaction to Level Up...");
            const tx = await gameGearContract.levelUp(tokenId);
            showPendingTx(`Leveling up... waiting for block...`);
            await tx.wait();
            alert(`Token #${tokenId} leveled up successfully!`);
        } catch (err) {
            console.error(err);
            alert("Level up failed. Are you the owner?");
        } finally {
            hidePendingTx();
        }
    });

    // 4. Approve Marketplace
    document.getElementById('approveMarketBtn').addEventListener('click', async () => {
        try {
            showPendingTx("Approving Marketplace...");
            const tx = await gameGearContract.setApprovalForAll(CONTRACT_ADDRESSES.MARKETPLACE, true);
            showPendingTx(`Waiting for approval confirmation...`);
            await tx.wait();
            alert("Marketplace approved successfully!");
        } catch (err) {
            console.error(err);
            alert("Approval failed: " + (err.reason || err.message));
        } finally {
            hidePendingTx();
        }
    });

    // 5. List Item (ensures marketplace approval before listing)
    document.getElementById('listForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const nftContractAddressRaw = document.getElementById('listNftContract').value.trim();
            const nftContractAddress = nftContractAddressRaw && ethers.isAddress(nftContractAddressRaw)
                ? nftContractAddressRaw
                : CONTRACT_ADDRESSES.BOSS_LOOT;
            if (nftContractAddressRaw && !ethers.isAddress(nftContractAddressRaw)) {
                alert("Invalid NFT contract address. Use the full address from your wallet (0x...).");
                return;
            }

            const tokenIdRaw = document.getElementById('listTokenId').value.trim();
            const priceEth = document.getElementById('listPrice').value;
            if (!tokenIdRaw) {
                alert("Please enter a Token ID.");
                return;
            }
            
            const saleType = document.querySelector('input[name="dashboard-sale-type"]:checked')?.value || 'personal';
            const charityWalletRaw = document.getElementById('dashboard-charity-select')?.value?.trim();
            
            if (saleType === 'charity' && !charityWalletRaw) {
                alert("Please select a registered charity for the Charity Sale.");
                return;
            }
            
            const tokenId = BigInt(tokenIdRaw);
            const priceWei = ethers.parseEther(priceEth.toString());

            // Use a minimal ERC-721 ABI that works with ANY ERC-721 contract
            const ERC721_ABI = [
                "function ownerOf(uint256 tokenId) view returns (address)",
                "function getApproved(uint256 tokenId) view returns (address)",
                "function isApprovedForAll(address owner, address operator) view returns (bool)",
                "function setApprovalForAll(address operator, bool approved)",
                "function approve(address to, uint256 tokenId)"
            ];
            const nftContract = new ethers.Contract(nftContractAddress, ERC721_ABI, signer);

            // Step 1: Check ownership
            showPendingTx("Checking ownership...");
            let owner;
            try {
                owner = await nftContract.ownerOf(tokenId);
            } catch (e) {
                console.error("ownerOf failed:", e);
                alert("Token #" + tokenId + " doesn't exist on contract " + nftContractAddress.substring(0,10) + "... Check the Token ID and NFT contract address.");
                return;
            }
            if (owner.toLowerCase() !== walletAddress.toLowerCase()) {
                alert("You don't own Token #" + tokenId + " on this contract.\nOwner: " + owner + "\nYour wallet: " + walletAddress);
                return;
            }
            console.log("âœ… Ownership verified: you own Token #" + tokenId);

            // Step 2: Check and set approval
            showPendingTx("Checking marketplace approval...");
            let isApprovedAll = false;
            try {
                isApprovedAll = await nftContract.isApprovedForAll(walletAddress, CONTRACT_ADDRESSES.MARKETPLACE);
            } catch (e) {
                console.warn("isApprovedForAll check failed:", e);
            }

            let singleApproval = ethers.ZeroAddress;
            try {
                singleApproval = await nftContract.getApproved(tokenId);
            } catch (e) {
                console.warn("getApproved check failed:", e);
            }

            const marketplaceLower = CONTRACT_ADDRESSES.MARKETPLACE.toLowerCase();
            const hasApproval = isApprovedAll || (singleApproval.toLowerCase() === marketplaceLower);

            if (!hasApproval) {
                showPendingTx("Approving marketplace to transfer your NFT...");
                try {
                    const approveTx = await nftContract.setApprovalForAll(CONTRACT_ADDRESSES.MARKETPLACE, true);
                    await approveTx.wait();
                    console.log("âœ… Marketplace approved via setApprovalForAll");
                } catch (approveErr) {
                    console.warn("setApprovalForAll failed, trying single approve:", approveErr);
                    // Fallback: try single-token approve
                    try {
                        const approveTx = await nftContract.approve(CONTRACT_ADDRESSES.MARKETPLACE, tokenId);
                        await approveTx.wait();
                        console.log("âœ… Marketplace approved via single approve");
                    } catch (singleApproveErr) {
                        console.error("Both approval methods failed:", singleApproveErr);
                        alert("Failed to approve marketplace. Error: " + (singleApproveErr.reason || singleApproveErr.message));
                        return;
                    }
                }

                // Verify approval took effect
                let verified = false;
                try {
                    verified = await nftContract.isApprovedForAll(walletAddress, CONTRACT_ADDRESSES.MARKETPLACE);
                } catch (_) {}
                if (!verified) {
                    try {
                        const approvedAddr = await nftContract.getApproved(tokenId);
                        verified = approvedAddr.toLowerCase() === marketplaceLower;
                    } catch (_) {}
                }
                if (!verified) {
                    alert("Approval transaction succeeded but marketplace still not approved. The NFT contract may have unusual approval rules.");
                    return;
                }
                console.log("âœ… Approval verified on-chain");
            } else {
                console.log("âœ… Marketplace already approved");
            }

            // Step 3: Send listing transaction
            showPendingTx(`Listing item as ${saleType === 'charity' ? 'Charity Sale (90% to charity)' : 'Personal Sale (100% to you)'}...`);
            
            let tx;
            if (saleType === 'personal') {
                tx = await marketplaceContract.listItemPersonal(nftContractAddress, tokenId, priceWei);
            } else {
                tx = await marketplaceContract.listItemForCharity(nftContractAddress, tokenId, priceWei, charityWalletRaw);
            }
            
            showPendingTx(`Waiting for listing confirmation...`);
            await tx.wait();
            alert(`Token #${tokenId} listed for ${priceEth} ETH!`);
            loadAllListings();
        } catch (err) {
            console.error("Listing error:", err);
            let msg = err.reason || err.message || String(err);
            if (msg.includes('require(false)') || msg.includes('data="0x"')) {
                msg += '\n\nThis usually means the NFT contract at the address you entered is incompatible or does not properly support ERC-721. Try using the default BossLootNFT (leave the NFT contract field blank).';
            }
            alert("Listing failed: " + msg);
        } finally {
            hidePendingTx();
        }
    });

    // 6. Buy Item (manual form)
    document.getElementById('buyForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const nftContractRaw = document.getElementById('buyNftContract').value.trim();
            const nftContract = nftContractRaw && ethers.isAddress(nftContractRaw) ? nftContractRaw : CONTRACT_ADDRESSES.GAME_GEAR;
            const tokenId = BigInt(document.getElementById('buyTokenId').value.trim());
            const priceEth = document.getElementById('buyPrice').value;
            const priceWei = ethers.parseEther(priceEth.toString());

            showPendingTx("Purchasing item! 90% routing to charity...");
            const tx = await marketplaceContract.buyItem(nftContract, tokenId, { value: priceWei });
            showPendingTx(`Waiting for purchase confirmation...`);
            await tx.wait();
            alert(`Successfully purchased Token #${tokenId}!`);
            loadAllListings();
        } catch (err) {
            console.error(err);
            alert("Purchase failed: " + (err.reason || err.message || "Check price and listing status."));
        } finally {
            hidePendingTx();
        }
    });

    document.getElementById('refreshListingsBtn').addEventListener('click', () => loadAllListings());
}

// Start app
window.addEventListener('DOMContentLoaded', init);
