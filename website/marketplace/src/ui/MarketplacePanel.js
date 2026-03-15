import { getCharities } from '../charity/CharityService.js';

export class MarketplacePanel {
  constructor(charityMarket, walletManager) {
    this.market = charityMarket;
    this.wallet = walletManager;

    this.panel = document.getElementById('market-panel');
    this.closeBtn = document.getElementById('close-market-btn');
    this.itemsList = document.getElementById('market-items-list');
    this.statusEl = document.getElementById('market-status');

    // Tab switching
    const tabs = document.querySelectorAll('.market-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.getAttribute('data-tab');
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.add('hidden'));
        const pane = document.getElementById('tab-' + target);
        if (pane) pane.classList.remove('hidden');
      });
    });

    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.hide());

    document.querySelectorAll('input[name="sale-type"]').forEach(radio => {
      radio.addEventListener('change', () => {
        const wrap = document.getElementById('market-charity-wrap');
        if (wrap) wrap.classList.toggle('hidden', document.querySelector('input[name="sale-type"]:checked')?.value !== 'charity');
      });
    });

    // Use BossLootNFT — this is the contract users mint gear on via the game
    this.nftContractAddress = '0xc6F3842FcCd9d22FFAB3d609d28430E900cFb82a';
    this.inventory = null;
  }

  setInventory(inventory) {
    this.inventory = inventory;
  }

  async show() {
    if (!this.inventory || Object.keys(this.inventory.gear || {}).length === 0) {
      this._tryLoadFromStorage();
    }
    this.renderItems();
    this.setStatus('');
    this._populateCharitySelect();
    if (this.panel) this.panel.classList.remove('hidden');
  }

  async _populateCharitySelect() {
    const listEl = document.getElementById('market-charity-list');
    if (!listEl) return;
    try {
      const list = await getCharities();
      
      this.selectedCharityAddress = null; // Track selected charity internally
      
      if (list.length === 0) {
          listEl.innerHTML = '<p style="color:#888;font-size:0.9rem;">No charities registered yet.</p>';
      } else {
          listEl.innerHTML = list.map(c => `
            <div class="market-charity-card" data-wallet="${escapeAttr(c.walletAddress)}">
              <h4>${escapeAttr(c.charityName)}</h4>
              <p class="charity-mission">${escapeAttr(c.mission || c.description || 'Supporting a good cause.')}</p>
              <p class="charity-wallet">${escapeAttr(c.walletAddress.substring(0, 6) + '...' + c.walletAddress.substring(38))}</p>
            </div>
          `).join('');

          // Add click listeners for selection
          const cards = listEl.querySelectorAll('.market-charity-card');
          cards.forEach(card => {
            card.addEventListener('click', () => {
              // Deselect all
              cards.forEach(c => c.classList.remove('selected'));
              // Select this one
              card.classList.add('selected');
              this.selectedCharityAddress = card.getAttribute('data-wallet');
            });
          });
      }
    } catch (e) { 
      console.warn("Failed to load charities in MarketplacePanel:", e);
    }
    const wrap = document.getElementById('market-charity-wrap');
    if (wrap) wrap.classList.toggle('hidden', document.querySelector('input[name="sale-type"]:checked')?.value !== 'charity');
  }

  _tryLoadFromStorage() {
    // Try all known bossRPG_equipment_ keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('bossRPG_equipment_')) {
        try {
          const gear = JSON.parse(localStorage.getItem(key));
          if (gear && Object.keys(gear).length > 0) {
            // Create a mock inventory-like object
            if (!this.inventory) {
              this.inventory = { gear: gear, getGearData: (t) => gear[t] || null };
            } else {
              this.inventory.gear = { ...this.inventory.gear, ...gear };
            }
            break;
          }
        } catch(e) { /* ignore */ }
      }
    }
  }

  hide() {
    if (this.panel) this.panel.classList.add('hidden');
  }

  setStatus(msg, isError = false) {
    if (!this.statusEl) return;
    if (!msg) { this.statusEl.classList.add('hidden'); return; }
    this.statusEl.textContent = msg;
    this.statusEl.style.color = isError ? '#e63946' : '#2ecc71';
    this.statusEl.style.borderColor = isError ? '#e63946' : '#2ecc71';
    this.statusEl.classList.remove('hidden');
  }

  renderItems() {
    if (!this.itemsList) return;
    this.itemsList.innerHTML = '';

    const gear = this.inventory ? this.inventory.gear : null;

    if (!gear || Object.keys(gear).length === 0) {
      this.itemsList.innerHTML = '<p style="color:#888;text-align:center;padding:20px">No items yet. Defeat a boss and mint your gear to list it here!</p>';
      return;
    }

    const icons = { 'Chestplate': '\u{1F6E1}\uFE0F', 'Boots': '\u{1F462}', 'Sword': '\u2694\uFE0F' };

    for (const type of Object.keys(gear)) {
      const data = this.inventory.getGearData ? this.inventory.getGearData(type) : gear[type];
      if (!data) continue;

      const el = document.createElement('div');
      el.className = 'market-item';

      const icon = icons[type] || '\u{1F381}';
      const name = data.name || type;
      const tokenId = data.tokenId;
      const hasToken = tokenId !== undefined && tokenId !== null;

      el.innerHTML =
        '<div class="item-info">' +
          '<div class="item-icon">' + icon + '</div>' +
          '<div class="item-details">' +
            '<h4>' + name + '</h4>' +
            '<p>' + (hasToken ? 'Token ID: #' + tokenId : 'Not yet minted — defeat the boss again to re-mint') + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="market-actions">' +
          '<button class="approve-btn"' + (hasToken ? '' : ' disabled style="opacity:0.4"') + '>Approve</button>' +
          '<button class="list-btn"' + (hasToken ? '' : ' disabled style="opacity:0.4"') + '>' + (hasToken ? 'List (0.05 ETH)' : 'Mint first') + '</button>' +
        '</div>';

      if (hasToken) {
        el.querySelector('.approve-btn').addEventListener('click', (e) => this.handleApprove(e.currentTarget));
        el.querySelector('.list-btn').addEventListener('click', (e) => this.handleList(tokenId, e.currentTarget));
      }

      this.itemsList.appendChild(el);
    }
  }

  async handleApprove(btn) {
    try {
      btn.textContent = 'Approving...';
      btn.disabled = true;
      this.setStatus('Confirm approval in MetaMask...');
      await this.market.approveMarketplace(this.nftContractAddress);
      btn.textContent = 'Approved \u2705';
      this.setStatus('Marketplace approved!', false);
    } catch (err) {
      console.error(err);
      btn.textContent = 'Approve';
      btn.disabled = false;
      this.setStatus('Approval failed: ' + (err.reason || err.message), true);
    }
  }

  async handleList(tokenId, btn) {
    const saleType = document.querySelector('input[name="sale-type"]:checked')?.value || 'personal';
    const charityAddr = this.selectedCharityAddress;
    
    if (saleType === 'charity' && !charityAddr) {
      this.setStatus('Select a charity for charity sale.', true);
      return;
    }
    try {
      btn.textContent = 'Listing...';
      btn.disabled = true;
      this.setStatus('Confirm listing in MetaMask...');
      if (saleType === 'personal') {
        await this.market.listItemPersonal(this.nftContractAddress, tokenId, 0.05);
        this.setStatus(`Token #${tokenId} listed (100% to you)!`, false);
      } else {
        await this.market.listItemForCharity(this.nftContractAddress, tokenId, 0.05, charityAddr);
        
        // Find the selected card to get the charity name for the success message
        const selectedCard = document.querySelector('.market-charity-card.selected h4');
        const charityName = selectedCard ? selectedCard.textContent : 'Charity';
        
        this.setStatus(`Token #${tokenId} listed for charity (90% → ${charityName})!`, false);
      }
      btn.textContent = 'Listed \u2705';
    } catch (err) {
      console.error(err);
      btn.textContent = 'List (0.05 ETH)';
      btn.disabled = false;
      this.setStatus('Listing failed: ' + (err.reason || err.message), true);
    }
  }
}

function escapeAttr(s) {
  if (s == null) return '';
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML.replace(/"/g, '&quot;');
}
