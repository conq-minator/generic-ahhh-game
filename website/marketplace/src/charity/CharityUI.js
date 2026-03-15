/**
 * CharityUI — Register charity (with wallet connect), browse, search. Uses CharityService and WalletManager.
 */
import * as CharityService from './CharityService.js';

const TRUNCATE = (s, n = 10) => !s ? '' : (s.length <= n ? s : s.slice(0, n) + '...');

export class CharityUI {
  constructor(containerEl, walletManager) {
    this.container = containerEl;
    this.wallet = walletManager;
  }

  async init() {
    if (!this.container) return;
    this.render();
    this.bind();
  }

  show() {
    if (this.container) this.container.classList.remove('hidden');
    this.refresh();
  }

  hide() {
    if (this.container) this.container.classList.add('hidden');
  }

  async refresh() {
    await this.render();
    this.bind();
  }

  async render() {
    // Capture search state correctly before overwrite
    const searchInput = this.container.querySelector('#charity-search');
    const searchVal = searchInput ? searchInput.value : '';
    const isSearchFocused = document.activeElement === searchInput;

    const list = await CharityService.getCharities();
    const hasKeys = (await import('../ipfs/PinataStorage.js')).hasApiKeys();
    const account = this.wallet.getAccount?.();
    const connected = this.wallet.isConnected;

    let html = `
      <div class="charity-panel-inner">
        <div class="charity-header">
          <h2>❤️ Charities</h2>
          <button type="button" class="charity-btn charity-btn-close" aria-label="Close">✕</button>
        </div>
        <p class="charity-desc">Verified charities can register. When selling with charity support, you can choose one below.</p>
        ${!hasKeys ? '<p class="charity-warn">Pinata API keys not set — charity list will not persist.</p>' : ''}
        ${connected ? '<button type="button" class="charity-btn charity-btn-primary" id="charity-register-open">Register a Charity</button>' : '<p class="charity-warn">Connect wallet to register a charity.</p>'}
        <div id="charity-register-form" class="charity-form hidden">
          <h3>Register Charity</h3>
          <p class="charity-meta">Connect the charity’s MetaMask wallet before registering.</p>
          <input type="text" id="charity-name" placeholder="Charity name *" maxlength="200">
          <textarea id="charity-desc" placeholder="Description" rows="2" maxlength="1000"></textarea>
          <input type="text" id="charity-mission" placeholder="Mission / purpose" maxlength="500">
          <input type="text" id="charity-website" placeholder="Website (optional)" maxlength="200">
          <input type="text" id="charity-contact" placeholder="Contact information" maxlength="300">
          <div class="charity-form-actions">
            <button type="button" class="charity-btn" id="charity-register-cancel">Cancel</button>
            <button type="button" class="charity-btn charity-btn-primary" id="charity-register-submit">Register</button>
          </div>
        </div>
        <h3>Browse charities</h3>
        <input type="text" id="charity-search" class="charity-search" placeholder="Search by name, mission...">
        <div id="charity-list" class="charity-list"></div>
      </div>`;
    this.container.innerHTML = html;

    const filtered = CharityService.searchCharities(list, searchVal.trim());

    const listEl = this.container.querySelector('#charity-list');
    if (filtered.length === 0) {
      listEl.innerHTML = '<p class="charity-empty">No charities found. Register one or try a different search.</p>';
    } else {
      listEl.innerHTML = filtered.map(c => {
        const isCreator = account && (c.registeredByWallet || c.walletAddress || '').toLowerCase() === account.toLowerCase();
        return `
        <div class="charity-card" data-charity-wallet="${escapeAttr(c.walletAddress)}">
          <div class="charity-card-name">${escapeHtml(c.charityName)}</div>
          ${c.mission ? `<div class="charity-card-mission">${escapeHtml(c.mission)}</div>` : ''}
          <div class="charity-card-wallet">${TRUNCATE(c.walletAddress, 14)}</div>
          ${c.website ? `<a href="${escapeHtml(c.website)}" target="_blank" rel="noopener" class="charity-card-link">Website</a>` : ''}
          ${isCreator ? '<button type="button" class="charity-btn charity-btn-danger charity-delete-btn small">Delete charity</button>' : ''}
        </div>`;
      }).join('');
    }

    // Restore search input and focus
    const newSearchInput = this.container.querySelector('#charity-search');
    if (newSearchInput && searchVal) {
      newSearchInput.value = searchVal;
    }
    if (newSearchInput && isSearchFocused) {
      newSearchInput.focus();
      const len = newSearchInput.value.length;
      newSearchInput.setSelectionRange(len, len);
    }

    this.bind();
  }

  bind() {
    const c = this.container;

    c.querySelectorAll('.charity-btn-close').forEach(btn => {
      btn.onclick = () => this.hide();
    });

    c.querySelector('#charity-register-open')?.addEventListener('click', () => {
      c.querySelector('#charity-register-form')?.classList.remove('hidden');
    });
    c.querySelector('#charity-register-cancel')?.addEventListener('click', () => {
      c.querySelector('#charity-register-form')?.classList.add('hidden');
    });
    c.querySelector('#charity-register-submit')?.addEventListener('click', async () => {
      const name = c.querySelector('#charity-name')?.value?.trim();
      const account = this.wallet.getAccount?.();
      if (!name) { alert('Charity name required'); return; }
      if (!account) { alert('Connect MetaMask (charity wallet) first'); return; }
      try {
        await CharityService.registerCharity({
          charityName: name,
          description: c.querySelector('#charity-desc')?.value?.trim(),
          mission: c.querySelector('#charity-mission')?.value?.trim(),
          website: c.querySelector('#charity-website')?.value?.trim(),
          walletAddress: account,
          contactInfo: c.querySelector('#charity-contact')?.value?.trim(),
          registeredByWallet: account,
        });
        c.querySelector('#charity-register-form')?.classList.add('hidden');
        c.querySelector('#charity-name').value = '';
        c.querySelector('#charity-desc').value = '';
        c.querySelector('#charity-mission').value = '';
        c.querySelector('#charity-website').value = '';
        c.querySelector('#charity-contact').value = '';
        await this.refresh();
      } catch (e) {
        alert(e.message || 'Registration failed');
      }
    });

    c.querySelector('#charity-search')?.addEventListener('input', () => this.refresh());
    c.querySelector('#charity-search')?.addEventListener('keyup', () => this.refresh());

    c.querySelectorAll('.charity-delete-btn').forEach(btn => {
      btn.onclick = async () => {
        const card = btn.closest('.charity-card');
        const wallet = card?.getAttribute('data-charity-wallet');
        const account = this.wallet.getAccount?.();
        if (!wallet || !account) return;
        if (!confirm('Delete this charity registration? This cannot be undone.')) return;
        try {
          await CharityService.deleteCharity(wallet, account);
          await this.refresh();
        } catch (e) {
          alert(e.message || 'Delete failed');
        }
      };
    });
  }

  /** Return list of charities for use in marketplace (optional selector). */
  async getCharityList() {
    return CharityService.getCharities();
  }
}

function escapeHtml(s) {
  if (s == null) return '';
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}
function escapeAttr(s) {
  if (s == null) return '';
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML.replace(/"/g, '&quot;');
}
