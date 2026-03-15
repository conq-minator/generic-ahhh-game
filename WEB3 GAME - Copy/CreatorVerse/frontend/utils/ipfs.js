/**
 * CreatorVerse — IPFS Upload Utility
 * Uploads NFT metadata JSON and images to Pinata/IPFS.
 * 
 * Usage:
 *   import { uploadMetadata, uploadImage } from './ipfs.js';
 *   const metadataURI = await uploadMetadata(metadata);
 */

const PINATA_API_URL = 'https://api.pinata.cloud';

/**
 * Upload a JSON metadata object to Pinata IPFS
 * @param {Object} metadata - The NFT metadata object
 * @param {string} pinataJWT - Pinata JWT token
 * @returns {string} IPFS URI (ipfs://...)
 */
async function uploadMetadataToPinata(metadata, pinataJWT) {
    const response = await fetch(`${PINATA_API_URL}/pinning/pinJSONToIPFS`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${pinataJWT}`,
        },
        body: JSON.stringify({
            pinataContent: metadata,
            pinataMetadata: {
                name: `CreatorVerse-Gear-${metadata.name || 'Unknown'}`,
            },
        }),
    });

    if (!response.ok) {
        throw new Error(`Pinata upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    return `ipfs://${data.IpfsHash}`;
}

/**
 * Upload a file (image) to Pinata IPFS
 * @param {File|Blob} file - The file to upload
 * @param {string} pinataJWT - Pinata JWT token
 * @returns {string} IPFS URI (ipfs://...)
 */
async function uploadFileToPinata(file, pinataJWT) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('pinataMetadata', JSON.stringify({
        name: `CreatorVerse-Asset-${Date.now()}`,
    }));

    const response = await fetch(`${PINATA_API_URL}/pinning/pinFileToIPFS`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${pinataJWT}`,
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error(`Pinata file upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    return `ipfs://${data.IpfsHash}`;
}

/**
 * Generate complete NFT metadata for a gear item
 * @param {Object} gear - Gear attributes
 * @param {string} imageURI - IPFS URI of the gear image
 * @returns {Object} ERC721-compatible metadata
 */
function generateGearMetadata(gear, imageURI) {
    return {
        name: gear.name,
        description: `A ${gear.rarity} weapon earned in CreatorVerse by defeating enemies in the Battle Arena.`,
        image: imageURI,
        external_url: 'https://creatorverse.app',
        attributes: [
            {
                trait_type: 'Rarity',
                value: gear.rarity,
            },
            {
                trait_type: 'Attack Power',
                value: gear.attack,
                display_type: 'number',
            },
            {
                trait_type: 'Level',
                value: gear.level,
                display_type: 'number',
            },
            {
                trait_type: 'Weapon Type',
                value: gear.weaponType || 'Sword',
            },
        ],
    };
}

/**
 * Full workflow: Generate metadata → upload image → upload metadata → return URI
 * @param {Object} gear - Gear attributes { name, rarity, attack, level }
 * @param {File|Blob|null} imageFile - Optional image file (generates placeholder if null)
 * @param {string} pinataJWT - Pinata JWT token
 * @returns {string} IPFS metadata URI
 */
async function mintWorkflow(gear, imageFile, pinataJWT) {
    let imageURI = 'ipfs://QmPlaceholder'; // Default placeholder

    if (imageFile) {
        imageURI = await uploadFileToPinata(imageFile, pinataJWT);
    }

    const metadata = generateGearMetadata(gear, imageURI);
    const metadataURI = await uploadMetadataToPinata(metadata, pinataJWT);

    return { metadataURI, imageURI, metadata };
}

// Export for use in the frontend
if (typeof window !== 'undefined') {
    window.CreatorVerseIPFS = {
        uploadMetadataToPinata,
        uploadFileToPinata,
        generateGearMetadata,
        mintWorkflow,
    };
}

// Export for Node.js
if (typeof module !== 'undefined') {
    module.exports = {
        uploadMetadataToPinata,
        uploadFileToPinata,
        generateGearMetadata,
        mintWorkflow,
    };
}
