/**
 * GuildUI — Guild list, create, join, chat, polls. Uses GuildService and WalletManager.
 */
import * as GuildService from './GuildService.js';

const TRUNCATE = (s, n = 10) => !s ? '' : (s.length <= n ? s : s.slice(0, n) + '...');

export class GuildUI {
  constructor(containerEl, walletManager) {
    this.container = containerEl;
    this.wallet = walletManager;
    this.currentGuildId = null;
    this.refreshInterval = null;
  }

  async init() {
    if (!this.container) return;
    this.container.innerHTML = '';
    this.render();
    this.bind();
  }

  show() {
    if (this.container) this.container.classList.remove('hidden');
    this.refresh();
    this.refreshInterval = setInterval(() => this._refreshIfNotEditing(), 15000);
  }

  /** Only refresh when user is not typing in a form or chat — prevents wiping input. */
  _refreshIfNotEditing() {
    const c = this.container;
    const createForm = c?.querySelector('#guild-create-form');
    const pollForm = c?.querySelector('#guild-poll-form');
    const chatInput = c?.querySelector('#guild-chat-input');
    const createOpen = createForm && !createForm.classList.contains('hidden');
    const pollOpen = pollForm && !pollForm.classList.contains('hidden');
    const chatHasText = chatInput && (chatInput.value || '').trim().length > 0;
    if (createOpen || pollOpen || chatHasText) return;
    this.refresh();
  }

  hide() {
    if (this.container) this.container.classList.add('hidden');
    if (this.refreshInterval) clearInterval(this.refreshInterval);
    this.refreshInterval = null;
  }

  async refresh() {
    await this.render();
    this.bind();
  }

  _captureFormState() {
    const c = this.container;
    const createForm = c?.querySelector('#guild-create-form');
    const state = {};
    if (createForm) {
      const name = c.querySelector('#guild-name');
      const desc = c.querySelector('#guild-desc');
      state.createFormOpen = !createForm.classList.contains('hidden');
      state.guildName = name?.value ?? '';
      state.guildDesc = desc?.value ?? '';
    }
    const pollForm = c?.querySelector('#guild-poll-form');
    if (pollForm) {
      state.pollFormOpen = !pollForm.classList.contains('hidden');
      state.pollQuestion = c.querySelector('#guild-poll-question')?.value ?? '';
      state.pollOpt1 = c.querySelector('#guild-poll-opt1')?.value ?? '';
      state.pollOpt2 = c.querySelector('#guild-poll-opt2')?.value ?? '';
      state.pollOpt3 = c.querySelector('#guild-poll-opt3')?.value ?? '';
    }
    const chatInput = c?.querySelector('#guild-chat-input');
    if (chatInput) state.chatInput = chatInput.value ?? '';
    const activeTab = c?.querySelector('.guild-tab.active');
    if (activeTab) state.activeTab = activeTab.getAttribute('data-tab');
    
    const searchInput = c?.querySelector('#guild-search-input');
    if (searchInput) {
      state.searchVal = searchInput.value;
      state.searchFocused = document.activeElement === searchInput;
    }
    
    return state;
  }

  _restoreFormState(state) {
    if (!state || !this.container) return;
    const c = this.container;
    if (state.createFormOpen) {
      const form = c.querySelector('#guild-create-form');
      if (form) form.classList.remove('hidden');
      const name = c.querySelector('#guild-name');
      const desc = c.querySelector('#guild-desc');
      if (name) name.value = state.guildName || '';
      if (desc) desc.value = state.guildDesc || '';
    }
    if (state.pollFormOpen) {
      const form = c.querySelector('#guild-poll-form');
      if (form) form.classList.remove('hidden');
      const q = c.querySelector('#guild-poll-question');
      const o1 = c.querySelector('#guild-poll-opt1');
      const o2 = c.querySelector('#guild-poll-opt2');
      const o3 = c.querySelector('#guild-poll-opt3');
      if (q) q.value = state.pollQuestion || '';
      if (o1) o1.value = state.pollOpt1 || '';
      if (o2) o2.value = state.pollOpt2 || '';
      if (o3) o3.value = state.pollOpt3 || '';
    }
    if (state.chatInput !== undefined) {
      const input = c.querySelector('#guild-chat-input');
      if (input) input.value = state.chatInput;
    }
    if (state.activeTab === 'polls') {
      c.querySelectorAll('.guild-tab').forEach(t => t.classList.remove('active'));
      const pollsTab = c.querySelector('.guild-tab[data-tab="polls"]');
      if (pollsTab) pollsTab.classList.add('active');
      c.querySelectorAll('.guild-tab-pane').forEach(p => p.classList.add('hidden'));
      const pane = c.querySelector('#guild-polls-pane');
      if (pane) pane.classList.remove('hidden');
    }
    if (state.searchVal !== undefined) {
      const input = c.querySelector('#guild-search-input');
      if (input) {
        input.value = state.searchVal;
        if (state.searchFocused) {
          input.focus();
          const len = input.value.length;
          input.setSelectionRange(len, len);
        }
      }
    }
  }

  async render() {
    const list = await GuildService.getGuildList();
    const hasKeys = (await import('../ipfs/PinataStorage.js')).hasApiKeys();
    const account = this.wallet.getAccount ? this.wallet.getAccount() : null;
    const connected = this.wallet.isConnected;

    if (this.currentGuildId) {
      const guild = await GuildService.getGuild(this.currentGuildId);
      if (guild) {
        const saved = this._captureFormState();
        this.renderGuildView(guild, hasKeys, account, connected);
        this._restoreFormState(saved);
        return;
      }
      this.currentGuildId = null;
    }

    const saved = this._captureFormState();
    let html = `
      <div class="guild-panel-inner">
        <div class="guild-header">
          <h2>🏰 Guilds</h2>
          <button type="button" class="guild-btn guild-btn-close" aria-label="Close">✕</button>
        </div>
        <p class="guild-desc">Create or join guilds, chat, and run polls. Access is tied to your connected MetaMask wallet.</p>
        ${connected ? `<p class="guild-wallet-line">Connected with MetaMask: <span class="guild-wallet-addr">${TRUNCATE(account, 14)}</span></p>` : ''}
        ${!hasKeys ? '<p class="guild-warn">Pinata API keys not set — guild data will not persist. Set keys in app config to enable.</p>' : ''}
        ${connected ? '<button type="button" class="guild-btn guild-btn-primary" id="guild-create-open">Create Guild</button>' : '<p class="guild-warn">Connect MetaMask to create or join guilds.</p>'}
        <input type="text" id="guild-search-input" class="guild-search-input" placeholder="Search by name or description...">
        <div id="guild-create-form" class="guild-form hidden">
          <h3>Create Guild</h3>
          <input type="text" id="guild-name" placeholder="Guild name" maxlength="80">
          <textarea id="guild-desc" placeholder="Description" rows="2" maxlength="300"></textarea>
          <div class="guild-form-actions">
            <button type="button" class="guild-btn" id="guild-create-cancel">Cancel</button>
            <button type="button" class="guild-btn guild-btn-primary" id="guild-create-submit">Create</button>
          </div>
        </div>
        <div id="guild-list" class="guild-list"></div>
      </div>`;
    this.container.innerHTML = html;

    const searchVal = (saved && saved.searchVal ? saved.searchVal : '').trim();
    const listToShow = searchVal ? await GuildService.searchGuilds(searchVal) : list;

    const listEl = this.container.querySelector('#guild-list');
    if (listToShow.length === 0) {
      listEl.innerHTML = searchVal ? '<p class="guild-empty">No guilds match your search.</p>' : '<p class="guild-empty">No guilds yet. Create one!</p>';
    } else {
      listEl.innerHTML = listToShow.map(e => `
        <div class="guild-card" data-guild-id="${e.guildId}">
          <span class="guild-card-name">${escapeHtml(e.guildId)}</span>
          <button type="button" class="guild-btn guild-btn-small guild-view-btn">View</button>
        </div>`).join('');
    }
    
    this._restoreFormState(saved);
  }

  renderGuildView(guild, hasKeys, account, connected) {
    const isMember = GuildService.isMember(guild, account);
    const isCreator = GuildService.isCreator(guild, account);
    const messages = (guild.chatMessages || []).slice(-80);
    const polls = guild.polls || [];

    let html = `
      <div class="guild-panel-inner">
        <div class="guild-header">
          <button type="button" class="guild-back-btn" id="guild-back">← Back</button>
          <h2>${escapeHtml(guild.guildName)}</h2>
          <button type="button" class="guild-btn guild-btn-close" aria-label="Close">✕</button>
        </div>
        <p class="guild-meta">Creator: ${TRUNCATE(guild.creatorWalletAddress, 12)} · Members: ${(guild.members || []).length}</p>
        ${connected ? `<p class="guild-wallet-line">You're viewing as: <span class="guild-wallet-addr">${TRUNCATE(account, 14)}</span></p>` : ''}
        ${!isMember && connected ? `<button type="button" class="guild-btn guild-btn-primary" id="guild-join-btn">Join Guild</button>` : ''}
        ${isMember && !isCreator ? `<button type="button" class="guild-btn guild-btn-outline" id="guild-leave-btn">Leave guild</button>` : ''}
        ${isCreator ? `<p class="guild-creator-note">You created this guild. Only you can delete it.</p><button type="button" class="guild-btn guild-btn-danger" id="guild-delete-btn">Delete guild</button>` : ''}
        ${isMember ? `
          <div class="guild-tabs">
            <button type="button" class="guild-tab active" data-tab="chat">Chat</button>
            <button type="button" class="guild-tab" data-tab="polls">Polls</button>
          </div>
          <div id="guild-chat-pane" class="guild-tab-pane">
            <div class="guild-chat-messages" id="guild-chat-messages"></div>
            <div class="guild-chat-send">
              <input type="text" id="guild-chat-input" placeholder="Type a message..." maxlength="500">
              <button type="button" class="guild-btn guild-btn-primary" id="guild-chat-send">Send</button>
            </div>
          </div>
          <div id="guild-polls-pane" class="guild-tab-pane hidden">
            <button type="button" class="guild-btn guild-btn-primary" id="guild-poll-create-open">Create Poll</button>
            <div id="guild-poll-form" class="guild-form hidden">
              <input type="text" id="guild-poll-question" placeholder="Question" maxlength="200">
              <input type="text" id="guild-poll-opt1" placeholder="Option 1" maxlength="100">
              <input type="text" id="guild-poll-opt2" placeholder="Option 2" maxlength="100">
              <input type="text" id="guild-poll-opt3" placeholder="Option 3 (optional)" maxlength="100">
              <div class="guild-form-actions">
                <button type="button" class="guild-btn" id="guild-poll-cancel">Cancel</button>
                <button type="button" class="guild-btn guild-btn-primary" id="guild-poll-submit">Create Poll</button>
              </div>
            </div>
            <div id="guild-polls-list" class="guild-polls-list"></div>
          </div>
        ` : ''}
      </div>`;
    this.container.innerHTML = html;

    const chatEl = this.container.querySelector('#guild-chat-messages');
    if (chatEl) {
      chatEl.innerHTML = messages.map(m => {
        const isOwn = account && (m.walletAddress || '').toLowerCase() === account.toLowerCase();
        const timeStr = m.timestamp ? formatTime(m.timestamp) : '';
        return `
        <div class="guild-msg ${isOwn ? 'guild-msg-own' : ''}">
          <span class="guild-msg-addr">${TRUNCATE(m.walletAddress, 10)}</span>
          <span class="guild-msg-text">${escapeHtml(m.text)}</span>
          ${timeStr ? `<span class="guild-msg-time">${timeStr}</span>` : ''}
        </div>`;
      }).join('');
      chatEl.scrollTop = chatEl.scrollHeight;
    }

    const pollsListEl = this.container.querySelector('#guild-polls-list');
    if (pollsListEl) {
      pollsListEl.innerHTML = polls.map(p => {
        const voted = (p.votesByAddress || {})[account?.toLowerCase()];
        const total = (p.options || []).reduce((s, o) => s + (Number(o.votes) || 0), 0);
        const participants = Object.keys(p.votesByAddress || {}).length;
        const canDeletePoll = isCreator || (account && (p.createdBy || '').toLowerCase() === account.toLowerCase());
        return `
          <div class="guild-poll" data-poll-id="${p.id}">
            <div class="guild-poll-q">${escapeHtml(p.question)}</div>
            ${(p.options || []).map((o, i) => `
              <div class="guild-poll-opt">
                <button type="button" class="guild-poll-vote-btn ${voted !== undefined ? 'voted' : ''}" data-poll-id="${p.id}" data-opt="${i}" ${voted !== undefined ? 'disabled' : ''}>
                  ${escapeHtml(o.text)} — ${Number(o.votes) || 0} vote(s)
                </button>
              </div>`).join('')}
            <div class="guild-poll-meta">Total votes: ${total} · ${participants} participant(s) · Created by ${TRUNCATE(p.createdBy, 8)}</div>
            ${canDeletePoll ? `<button type="button" class="guild-btn guild-btn-danger guild-poll-delete-btn small" data-poll-id="${p.id}">Delete poll</button>` : ''}
          </div>`;
      }).join('');
    }

    this.bind();
  }

  bind() {
    const c = this.container;

    c.querySelectorAll('.guild-btn-close').forEach(btn => {
      btn.onclick = () => this.hide();
    });

    c.querySelector('#guild-back')?.addEventListener('click', () => {
      this.currentGuildId = null;
      this.refresh();
    });

    c.querySelector('#guild-create-open')?.addEventListener('click', () => {
      c.querySelector('#guild-create-form')?.classList.remove('hidden');
    });
    c.querySelector('#guild-create-cancel')?.addEventListener('click', () => {
      c.querySelector('#guild-create-form')?.classList.add('hidden');
    });
    c.querySelector('#guild-create-submit')?.addEventListener('click', async () => {
      const name = c.querySelector('#guild-name')?.value?.trim();
      const desc = c.querySelector('#guild-desc')?.value?.trim();
      const account = this.wallet.getAccount?.();
      if (!name) { alert('Enter a guild name'); return; }
      if (!account) { alert('Connect wallet'); return; }
      try {
        await GuildService.createGuild(name, desc, account);
        c.querySelector('#guild-create-form')?.classList.add('hidden');
        c.querySelector('#guild-name').value = '';
        c.querySelector('#guild-desc').value = '';
        await this.refresh();
      } catch (e) {
        alert(e.message || 'Create failed');
      }
    });

    c.querySelectorAll('.guild-view-btn').forEach(btn => {
      btn.onclick = () => {
        this.currentGuildId = btn.closest('.guild-card')?.getAttribute('data-guild-id');
        this.refresh();
      };
    });

    c.querySelector('#guild-join-btn')?.addEventListener('click', async () => {
      const account = this.wallet.getAccount?.();
      if (!account) { alert('Connect MetaMask to join'); return; }
      try {
        await GuildService.joinGuild(this.currentGuildId, account);
        await this.refresh();
      } catch (e) {
        alert(e.message || 'Join failed');
      }
    });

    c.querySelector('#guild-delete-btn')?.addEventListener('click', async () => {
      const account = this.wallet.getAccount?.();
      if (!account) return;
      if (!confirm('Permanently delete this guild? This cannot be undone.')) return;
      try {
        await GuildService.deleteGuild(this.currentGuildId, account);
        this.currentGuildId = null;
        await this.refresh();
      } catch (e) {
        alert(e.message || 'Delete failed');
      }
    });

    c.querySelectorAll('.guild-tab').forEach(tab => {
      tab.onclick = () => {
        c.querySelectorAll('.guild-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const tabName = tab.getAttribute('data-tab');
        c.querySelectorAll('.guild-tab-pane').forEach(p => p.classList.add('hidden'));
        const pane = tabName === 'chat' ? c.querySelector('#guild-chat-pane') : c.querySelector('#guild-polls-pane');
        if (pane) pane.classList.remove('hidden');
      };
    });

    c.querySelector('#guild-chat-send')?.addEventListener('click', async () => {
      const input = c.querySelector('#guild-chat-input');
      const text = input?.value?.trim();
      const account = this.wallet.getAccount?.();
      if (!text || !account) return;
      const chatEl = c.querySelector('#guild-chat-messages');
      const timeStr = formatTime(Date.now());
      const msgHtml = `<div class="guild-msg guild-msg-own"><span class="guild-msg-addr">${TRUNCATE(account, 10)}</span><span class="guild-msg-text">${escapeHtml(text)}</span><span class="guild-msg-time">${timeStr}</span></div>`;
      if (chatEl) { chatEl.insertAdjacentHTML('beforeend', msgHtml); chatEl.scrollTop = chatEl.scrollHeight; }
      input.value = '';
      try {
        await GuildService.addChatMessage(this.currentGuildId, account, text);
        await this.refresh();
      } catch (e) {
        alert(e.message || 'Send failed');
        await this.refresh();
      }
    });
    c.querySelector('#guild-chat-input')?.addEventListener('keydown', async (ev) => {
      if (ev.key === 'Enter') c.querySelector('#guild-chat-send')?.click();
    });

    c.querySelector('#guild-poll-create-open')?.addEventListener('click', () => {
      c.querySelector('#guild-poll-form')?.classList.remove('hidden');
    });
    c.querySelector('#guild-poll-cancel')?.addEventListener('click', () => {
      c.querySelector('#guild-poll-form')?.classList.add('hidden');
    });
    c.querySelector('#guild-poll-submit')?.addEventListener('click', async () => {
      const q = c.querySelector('#guild-poll-question')?.value?.trim();
      const o1 = c.querySelector('#guild-poll-opt1')?.value?.trim();
      const o2 = c.querySelector('#guild-poll-opt2')?.value?.trim();
      const o3 = c.querySelector('#guild-poll-opt3')?.value?.trim();
      const account = this.wallet.getAccount?.();
      if (!q || !o1 || !o2 || !account) { alert('Question and at least 2 options required'); return; }
      const options = [o1, o2].filter(Boolean);
      if (o3) options.push(o3);
      try {
        const result = await GuildService.createPoll(this.currentGuildId, q, options, account);
        c.querySelector('#guild-poll-form')?.classList.add('hidden');
        if (result && result.poll) {
          const pollsListEl = c.querySelector('#guild-polls-list');
          const p = result.poll;
          const total = 0;
          const participants = 0;
          if (pollsListEl) {
            const html = `<div class="guild-poll" data-poll-id="${p.id}"><div class="guild-poll-q">${escapeHtml(p.question)}</div>${(p.options || []).map((o, i) => `<div class="guild-poll-opt"><button type="button" class="guild-poll-vote-btn" data-poll-id="${p.id}" data-opt="${i}">${escapeHtml(o.text)} — 0 vote(s)</button></div>`).join('')}<div class="guild-poll-meta">Total votes: 0 · 0 participant(s) · Created by you</div><button type="button" class="guild-btn guild-btn-danger guild-poll-delete-btn small" data-poll-id="${p.id}">Delete poll</button></div>`;
            pollsListEl.insertAdjacentHTML('beforeend', html);
          }
          c.querySelectorAll('.guild-tab').forEach(t => t.classList.remove('active'));
          c.querySelector('.guild-tab[data-tab="polls"]')?.classList.add('active');
          c.querySelectorAll('.guild-tab-pane').forEach(pane => pane.classList.add('hidden'));
          c.querySelector('#guild-polls-pane')?.classList.remove('hidden');
          this.bind();
        } else {
          await this.refresh();
        }
      } catch (e) {
        alert(e.message || 'Create poll failed');
      }
    });

    c.querySelector('#guild-search-input')?.addEventListener('input', () => this.refresh());
    c.querySelector('#guild-search-input')?.addEventListener('keyup', () => this.refresh());

    c.querySelector('#guild-leave-btn')?.addEventListener('click', async () => {
      const account = this.wallet.getAccount?.();
      if (!account) return;
      if (!confirm('Leave this guild? You can rejoin later.')) return;
      try {
        await GuildService.leaveGuild(this.currentGuildId, account);
        this.currentGuildId = null;
        await this.refresh();
      } catch (e) {
        alert(e.message || 'Leave failed');
      }
    });

    c.querySelectorAll('.guild-poll-delete-btn').forEach(btn => {
      btn.onclick = async () => {
        const pollId = btn.getAttribute('data-poll-id');
        const account = this.wallet.getAccount?.();
        if (!account) return;
        if (!confirm('Delete this poll? This cannot be undone.')) return;
        try {
          await GuildService.deletePoll(this.currentGuildId, pollId, account);
          await this.refresh();
        } catch (e) {
          alert(e.message || 'Delete failed');
        }
      };
    });

    c.querySelectorAll('.guild-poll-vote-btn').forEach(btn => {
      if (btn.disabled) return;
      btn.onclick = async () => {
        const pollId = btn.getAttribute('data-poll-id');
        const opt = parseInt(btn.getAttribute('data-opt'), 10);
        const account = this.wallet.getAccount?.();
        if (!account) return;
        try {
          await GuildService.votePoll(this.currentGuildId, pollId, opt, account);
          await this.refresh();
        } catch (e) {
          alert(e.message || 'Vote failed');
        }
      };
    });
  }
}

function escapeHtml(s) {
  if (s == null) return '';
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

function formatTime(ts) {
  const d = new Date(ts);
  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  return sameDay ? d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
