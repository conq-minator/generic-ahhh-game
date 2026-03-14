import { Contract } from 'ethers';

/**
 * NFTMinter — generates metadata, uploads to IPFS, and mints ERC-721 NFTs
 */
export class NFTMinter {
  constructor(walletManager) {
    this.wallet = walletManager;

    // Contract details (deployed address should be set after deployment)
    this.contractAddress = null;
    this.contractABI = [
      'function mintNFT(address to, string memory tokenURI) public returns (uint256)',
      'function totalSupply() public view returns (uint256)',
      'function ownerOf(uint256 tokenId) public view returns (address)',
      'function tokenURI(uint256 tokenId) public view returns (string)'
    ];

    // Pinata API (user must provide their own keys)
    this.pinataApiKey = '';
    this.pinataSecretKey = '';
    this.pinataEndpoint = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
  }

  configurePinata(apiKey, secretKey) {
    this.pinataApiKey = apiKey;
    this.pinataSecretKey = secretKey;
  }

  setContractAddress(address) {
    this.contractAddress = address;
  }

  generateMetadata(gearDrop, playerAddress) {
    return {
      name: gearDrop.name,
      description: `${gearDrop.description} — Dropped by boss in Boss Hunter RPG.`,
      image: this._getGearImage(gearDrop.type),
      attributes: [
        { trait_type: 'Rarity', value: gearDrop.rarity },
        { trait_type: 'Type', value: gearDrop.type },
        { trait_type: 'Boss', value: gearDrop.boss || 'Unknown' },
        { trait_type: 'Minted By', value: playerAddress },
        { trait_type: 'Minted At', value: new Date().toISOString() }
      ],
      external_url: 'https://boss-hunter-rpg.game'
    };
  }

  _getGearImage(type) {
    const images = {
      'armor': 'ipfs://placeholder-armor-image',
      'boots': 'ipfs://placeholder-boots-image',
      'legendary-sword': 'ipfs://placeholder-sword-image'
    };
    return images[type] || 'ipfs://placeholder-default';
  }

  async uploadToIPFS(metadata) {
    if (!this.pinataApiKey || !this.pinataSecretKey) {
      console.warn('Pinata not configured — using mock IPFS URI');
      const mockHash = 'Qm' + Math.random().toString(36).substring(2, 15) +
                       Math.random().toString(36).substring(2, 15);
      return `ipfs://${mockHash}`;
    }

    try {
      const response = await fetch(this.pinataEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'pinata_api_key': this.pinataApiKey,
          'pinata_secret_api_key': this.pinataSecretKey
        },
        body: JSON.stringify({
          pinataContent: metadata,
          pinataMetadata: { name: metadata.name }
        })
      });

      if (!response.ok) {
        throw new Error(`Pinata upload failed: ${response.statusText}`);
      }

      const data = await response.json();
      return `ipfs://${data.IpfsHash}`;
    } catch (error) {
      console.error('IPFS upload error:', error);
      throw error;
    }
  }

  async mint(gearDrop) {
    if (!this.wallet.isConnected) {
      throw new Error('Wallet not connected');
    }

    const playerAddress = this.wallet.getAccount();

    // Step 1: Generate metadata
    const metadata = this.generateMetadata(gearDrop, playerAddress);
    console.log('NFT Metadata:', metadata);

    // Step 2: Upload to IPFS
    const tokenURI = await this.uploadToIPFS(metadata);
    console.log('Token URI:', tokenURI);

    // Step 3: Mint via smart contract
    if (!this.contractAddress) {
      console.warn('Contract not deployed — simulating mint');
      await new Promise(resolve => setTimeout(resolve, 2000));
      return {
        success: true,
        tokenURI,
        txHash: '0x' + Math.random().toString(16).substring(2, 66),
        tokenId: Math.floor(Math.random() * 1000),
        simulated: true
      };
    }

    try {
      const contract = new Contract(this.contractAddress, this.contractABI, this.wallet.getSigner());
      const tx = await contract.mintNFT(playerAddress, tokenURI);
      const receipt = await tx.wait();

      return {
        success: true,
        tokenURI,
        txHash: receipt.hash,
        tokenId: receipt.logs?.[0]?.topics?.[3] ? parseInt(receipt.logs[0].topics[3], 16) : null,
        simulated: false
      };
    } catch (error) {
      console.error('Mint error:', error);
      throw error;
    }
  }
}
