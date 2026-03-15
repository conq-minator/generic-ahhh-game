/**
 * CharityService — Charity registry on IPFS. Single index: boss-rpg-charities.json = { cid, list: [] }
 * We store full list in one JSON; when adding we fetch, push, re-pin, store new cid.
 */
import { pinJSON, fetchFromIPFS, hasApiKeys } from '../ipfs/PinataStorage.js';

const STORAGE_KEY = 'boss-rpg-charities-cid';

function getStoredCid() {
  try {
    return localStorage.getItem(STORAGE_KEY) || null;
  } catch (_) {
    return null;
  }
}

function setStoredCid(cid) {
  try {
    if (cid) localStorage.setItem(STORAGE_KEY, cid);
    else localStorage.removeItem(STORAGE_KEY);
  } catch (_) {}
}

const defaultCharities = [
  {
    charityName: "Save The Dragons",
    description: "Helping displaced dragons find new caves and rebuild their hoards.",
    mission: "Provide safe habitats and gold hoards",
    website: "https://savethedragons.example",
    walletAddress: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    contactInfo: "contact@savethedragons.example",
    registeredAt: Date.now()
  },
  {
    charityName: "Forest Restorers",
    description: "Replanting magical forests destroyed by adventurers and bosses alike.",
    mission: "A tree for every potion",
    website: "https://forestrestorers.example",
    walletAddress: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
    contactInfo: "contact@forests.example",
    registeredAt: Date.now()
  }
];

/**
 * @returns { Promise<Array<{ charityName, description, mission, website, walletAddress, contactInfo, registeredAt, registeredByWallet }>> }
 */
export async function getCharities() {
  if (!hasApiKeys()) return defaultCharities;
  const cid = getStoredCid();
  if (!cid) return defaultCharities;
  try {
    const data = await fetchFromIPFS(cid);
    return Array.isArray(data.list) && data.list.length > 0 ? data.list : defaultCharities;
  } catch (_) {
    return defaultCharities;
  }
}

/**
 * Register a charity. Wallet must be connected (registeredByWallet = signer).
 */
export async function registerCharity(payload) {
  if (!hasApiKeys()) throw new Error('Pinata keys not set');
  const {
    charityName,
    description,
    mission,
    website,
    walletAddress,
    contactInfo,
    registeredByWallet,
  } = payload;
  if (!charityName || !walletAddress) throw new Error('Charity name and wallet address required');
  let list = [];
  const cid = getStoredCid();
  if (cid) {
    try {
      const data = await fetchFromIPFS(cid);
      list = Array.isArray(data.list) ? data.list : [...defaultCharities];
    } catch (_) {
      list = [...defaultCharities];
    }
  } else {
    list = [...defaultCharities];
  }
  const existing = list.find(c => (c.walletAddress || '').toLowerCase() === walletAddress.toLowerCase());
  if (existing) throw new Error('This wallet is already registered as a charity');
  list.push({
    charityName: String(charityName).trim().slice(0, 200),
    description: String(description || '').trim().slice(0, 1000),
    mission: String(mission || '').trim().slice(0, 500),
    website: String(website || '').trim().slice(0, 200),
    walletAddress: walletAddress.toLowerCase(),
    contactInfo: String(contactInfo || '').trim().slice(0, 300),
    registeredAt: Date.now(),
    registeredByWallet: (registeredByWallet || walletAddress).toLowerCase(),
  });
  const newCid = await pinJSON({ list });
  setStoredCid(newCid);
  return list[list.length - 1];
}

/**
 * Search by name, mission, or description.
 */
export function searchCharities(list, query) {
  if (!query || !query.trim()) return list;
  const q = query.trim().toLowerCase();
  return list.filter(c =>
    (c.charityName || '').toLowerCase().includes(q) ||
    (c.mission || '').toLowerCase().includes(q) ||
    (c.description || '').toLowerCase().includes(q)
  );
}

/**
 * Delete a charity. Only the creator (registeredByWallet) can delete.
 */
export async function deleteCharity(walletAddress, requestedByWallet) {
  if (!hasApiKeys()) throw new Error('Pinata keys not set');
  const addr = (requestedByWallet || '').toLowerCase();
  let list = [];
  const cid = getStoredCid();
  if (!cid) throw new Error('No charities found');
  const data = await fetchFromIPFS(cid);
  list = Array.isArray(data.list) ? data.list : [];
  const charity = list.find(c => (c.walletAddress || '').toLowerCase() === (walletAddress || '').toLowerCase());
  if (!charity) throw new Error('Charity not found');
  const creator = (charity.registeredByWallet || charity.walletAddress || '').toLowerCase();
  if (creator !== addr) throw new Error('Only the charity creator can delete this charity');
  list = list.filter(c => (c.walletAddress || '').toLowerCase() !== (walletAddress || '').toLowerCase());
  const newCid = list.length > 0 ? await pinJSON({ list }) : null;
  setStoredCid(newCid);
}
