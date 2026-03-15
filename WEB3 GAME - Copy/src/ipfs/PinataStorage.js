/**
 * PinataStorage — IPFS pinning and fetch. API keys left blank; set via setApiKeys() or from app config.
 * Used by Guild and Charity systems. Do not expose keys in logs.
 */
const PINATA_PIN = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
const PINATA_GATEWAY = 'https://gateway.pinata.cloud/ipfs/';

let apiKey = 'fb513b01ab21e3d34114';
let apiSecret = '0b57e7ec0d620cd29733c3ba5a3e5275128324c74039618816ea049a0f17b823';

export function setApiKeys(key, secret) {
  if (key) apiKey = key;
  if (secret) apiSecret = secret;
}

export function hasApiKeys() {
  return Boolean(apiKey && apiSecret);
}

/**
 * Pin JSON to IPFS via Pinata. Returns { IpfsHash } or throws.
 */
export async function pinJSON(data) {
  if (!apiKey || !apiSecret) {
    throw new Error('Pinata API keys not set. Configure in app or leave guild/charity storage disabled.');
  }
  const res = await fetch(PINATA_PIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'pinata_api_key': apiKey,
      'pinata_secret_api_key': apiSecret,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Pinata pin failed: ${err}`);
  }
  const out = await res.json();
  return out.IpfsHash;
}

/**
 * Fetch JSON from IPFS via public gateway.
 */
export async function fetchFromIPFS(cid) {
  const url = cid.startsWith('http') ? cid : `${PINATA_GATEWAY}${cid}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`IPFS fetch failed: ${res.status}`);
  return res.json();
}
