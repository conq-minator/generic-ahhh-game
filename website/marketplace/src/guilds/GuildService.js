/**
 * GuildService — Guild list, create, join, chat, polls. Data on IPFS via Pinata.
 * Index pin: boss-rpg-guilds-index.json = { cids: { guildId: ipfsCid } }
 * Guild pin: { guildName, description, creatorWalletAddress, members[], chatMessages[], polls[] }
 */
import { pinJSON, fetchFromIPFS, hasApiKeys } from '../ipfs/PinataStorage.js';

const INDEX_KEY = 'boss-rpg-guilds-index-cid';

function guildIdFromName(name) {
  return name.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function getStoredIndexCid() {
  try {
    return localStorage.getItem(INDEX_KEY) || null;
  } catch (_) {
    return null;
  }
}

function setStoredIndexCid(cid) {
  try {
    if (cid) localStorage.setItem(INDEX_KEY, cid);
    else localStorage.removeItem(INDEX_KEY);
  } catch (_) {}
}

/**
 * @returns { Promise<{ guildId: string, cid: string }[]> }
 */
export async function getGuildList() {
  if (!hasApiKeys()) return [];
  const cid = getStoredIndexCid();
  if (!cid) return [];
  try {
    const index = await fetchFromIPFS(cid);
    const cids = index.cids || {};
    return Object.entries(cids).map(([guildId, c]) => ({ guildId, cid: c }));
  } catch (_) {
    return [];
  }
}

/**
 * @returns { Promise<{ guildName, description, creatorWalletAddress, members, chatMessages, polls } | null> }
 */
export async function getGuild(guildId) {
  const list = await getGuildList();
  const entry = list.find(e => e.guildId === guildId);
  if (!entry) return null;
  try {
    return await fetchFromIPFS(entry.cid);
  } catch (_) {
    return null;
  }
}

/**
 * Create guild and pin; update index. Returns guildId.
 */
export async function createGuild(guildName, description, creatorWalletAddress) {
  if (!hasApiKeys()) throw new Error('Pinata keys not set');
  const guildId = guildIdFromName(guildName);
  const list = await getGuildList();
  if (list.some(e => e.guildId === guildId)) throw new Error('A guild with this name already exists');

  const guild = {
    guildName: guildName.trim(),
    description: (description || '').trim(),
    creatorWalletAddress: (creatorWalletAddress || '').toLowerCase(),
    members: [creatorWalletAddress.toLowerCase()],
    chatMessages: [],
    polls: [],
  };
  const cid = await pinJSON(guild);
  const cids = {};
  list.forEach(e => { cids[e.guildId] = e.cid; });
  cids[guildId] = cid;
  const indexCid = await pinJSON({ cids });
  setStoredIndexCid(indexCid);
  return guildId;
}

/**
 * Join guild: fetch guild, add member, re-pin guild, update index.
 */
export async function joinGuild(guildId, walletAddress) {
  if (!hasApiKeys()) throw new Error('Pinata keys not set');
  const guild = await getGuild(guildId);
  if (!guild) throw new Error('Guild not found');
  const addr = walletAddress.toLowerCase();
  if (guild.members.includes(addr)) return;
  guild.members = [...guild.members, addr];
  const cid = await pinJSON(guild);
  const list = await getGuildList();
  const cids = {};
  list.forEach(e => { cids[e.guildId] = e.cid; });
  cids[guildId] = cid;
  const indexCid = await pinJSON({ cids });
  setStoredIndexCid(indexCid);
}

/**
 * Add chat message and re-pin guild.
 */
export async function addChatMessage(guildId, walletAddress, text) {
  if (!hasApiKeys()) throw new Error('Pinata keys not set');
  const guild = await getGuild(guildId);
  if (!guild) throw new Error('Guild not found');
  guild.chatMessages = guild.chatMessages || [];
  guild.chatMessages.push({
    walletAddress: walletAddress.toLowerCase(),
    text: String(text).trim().slice(0, 500),
    timestamp: Date.now(),
  });
  const cid = await pinJSON(guild);
  const list = await getGuildList();
  const cids = {};
  list.forEach(e => { cids[e.guildId] = e.cid; });
  cids[guildId] = cid;
  const indexCid = await pinJSON({ cids });
  setStoredIndexCid(indexCid);
}

/**
 * Create poll. Poll: { id, question, options: [{ text, votes }], votesByAddress: {}, createdBy, createdAt }
 */
export async function createPoll(guildId, question, options, createdByWallet) {
  if (!hasApiKeys()) throw new Error('Pinata keys not set');
  const guild = await getGuild(guildId);
  if (!guild) throw new Error('Guild not found');
  guild.polls = guild.polls || [];
  const id = `poll-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  const poll = {
    id,
    question: String(question).trim().slice(0, 200),
    options: (options || []).slice(0, 10).map(t => ({ text: String(t).trim().slice(0, 100), votes: 0 })),
    votesByAddress: {},
    createdBy: createdByWallet.toLowerCase(),
    createdAt: Date.now(),
  };
  if (poll.options.length < 2) throw new Error('Poll needs at least 2 options');
  guild.polls.push(poll);
  const cid = await pinJSON(guild);
  const list = await getGuildList();
  const cids = {};
  list.forEach(e => { cids[e.guildId] = e.cid; });
  cids[guildId] = cid;
  const indexCid = await pinJSON({ cids });
  setStoredIndexCid(indexCid);
  return { id, poll };
}

/**
 * Vote on a poll (one vote per wallet). optionIndex 0-based.
 */
export async function votePoll(guildId, pollId, optionIndex, walletAddress) {
  if (!hasApiKeys()) throw new Error('Pinata keys not set');
  const guild = await getGuild(guildId);
  if (!guild) throw new Error('Guild not found');
  const poll = (guild.polls || []).find(p => p.id === pollId);
  if (!poll) throw new Error('Poll not found');
  const addr = walletAddress.toLowerCase();
  if (poll.votesByAddress && poll.votesByAddress[addr] !== undefined) throw new Error('Already voted');
  if (optionIndex < 0 || optionIndex >= (poll.options || []).length) throw new Error('Invalid option');
  poll.votesByAddress = poll.votesByAddress || {};
  poll.votesByAddress[addr] = optionIndex;
  poll.options[optionIndex].votes = (poll.options[optionIndex].votes || 0) + 1;
  const cid = await pinJSON(guild);
  const list = await getGuildList();
  const cids = {};
  list.forEach(e => { cids[e.guildId] = e.cid; });
  cids[guildId] = cid;
  const indexCid = await pinJSON({ cids });
  setStoredIndexCid(indexCid);
}

export function isMember(guild, walletAddress) {
  const addr = (walletAddress || '').toLowerCase();
  return (guild.members || []).includes(addr);
}

export function isCreator(guild, walletAddress) {
  const addr = (walletAddress || '').toLowerCase();
  return (guild.creatorWalletAddress || '').toLowerCase() === addr;
}

/**
 * Delete a guild. Only the creator (creatorWalletAddress) can delete.
 * Removes the guild from the index so it no longer appears in the list.
 */
export async function deleteGuild(guildId, walletAddress) {
  if (!hasApiKeys()) throw new Error('Pinata keys not set');
  const guild = await getGuild(guildId);
  if (!guild) throw new Error('Guild not found');
  const addr = (walletAddress || '').toLowerCase();
  if ((guild.creatorWalletAddress || '').toLowerCase() !== addr) {
    throw new Error('Only the guild creator can delete this guild');
  }
  const list = await getGuildList();
  const cids = {};
  list.forEach(e => { if (e.guildId !== guildId) cids[e.guildId] = e.cid; });
  const indexCid = Object.keys(cids).length > 0 ? await pinJSON({ cids }) : null;
  setStoredIndexCid(indexCid);
}

/**
 * Leave a guild. Removes the member from the guild.
 */
export async function leaveGuild(guildId, walletAddress) {
  if (!hasApiKeys()) throw new Error('Pinata keys not set');
  const guild = await getGuild(guildId);
  if (!guild) throw new Error('Guild not found');
  const addr = walletAddress.toLowerCase();
  const creator = (guild.creatorWalletAddress || '').toLowerCase();
  if (addr === creator) throw new Error('Guild creator cannot leave; delete the guild instead');
  if (!guild.members.includes(addr)) return;
  guild.members = guild.members.filter(m => m !== addr);
  const cid = await pinJSON(guild);
  const list = await getGuildList();
  const cids = {};
  list.forEach(e => { cids[e.guildId] = e.cid; });
  cids[guildId] = cid;
  const indexCid = await pinJSON({ cids });
  setStoredIndexCid(indexCid);
}

/**
 * Delete a poll. Allowed if caller is poll creator or guild creator.
 */
export async function deletePoll(guildId, pollId, walletAddress) {
  if (!hasApiKeys()) throw new Error('Pinata keys not set');
  const guild = await getGuild(guildId);
  if (!guild) throw new Error('Guild not found');
  const addr = walletAddress.toLowerCase();
  const pollIndex = (guild.polls || []).findIndex(p => p.id === pollId);
  if (pollIndex < 0) throw new Error('Poll not found');
  const poll = guild.polls[pollIndex];
  const isPollCreator = (poll.createdBy || '').toLowerCase() === addr;
  const isGuildCreator = (guild.creatorWalletAddress || '').toLowerCase() === addr;
  if (!isPollCreator && !isGuildCreator) throw new Error('Only the poll creator or guild creator can delete this poll');
  guild.polls.splice(pollIndex, 1);
  const cid = await pinJSON(guild);
  const list = await getGuildList();
  const cids = {};
  list.forEach(e => { cids[e.guildId] = e.cid; });
  cids[guildId] = cid;
  const indexCid = await pinJSON({ cids });
  setStoredIndexCid(indexCid);
}

/**
 * Search guilds by name or description. Fetches full guild data to search description.
 */
export async function searchGuilds(query) {
  if (!query || !query.trim()) return getGuildList();
  const list = await getGuildList();
  const q = query.trim().toLowerCase();
  const results = [];
  for (const e of list) {
    const guild = await getGuild(e.guildId);
    if (!guild) continue;
    const nameMatch = (guild.guildName || '').toLowerCase().includes(q);
    const descMatch = (guild.description || '').toLowerCase().includes(q);
    if (nameMatch || descMatch) results.push(e);
  }
  return results;
}
