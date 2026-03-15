import { Contract, parseEther } from 'ethers';

/**
 * Interface for the Charity GearMarketplace deployed on Sepolia.
 */
export class CharityMarket {
  constructor(walletManager) {
    this.wallet = walletManager;

    // Hardcoded from CharityBlockchainProject/frontend/abi.js
    this.marketplaceAddress = '0x71442ECaf669abA904ecEed979cb3f03694bA49b';
    
    // The BossLootNFT contract address in the game MINTER mapping
    // Hardcoded from CharityBlockchainProject/frontend/abi.js GAME_GEAR for the target NFT we are interacting with
    // But importantly, `nftContractAddress` will be passed dynamically based on the game's minter config
    
    this.marketplaceABI = [
      'function listItem(address nftContract, uint256 tokenId, uint256 price) external',
      'function listItemPersonal(address nftContract, uint256 tokenId, uint256 price) external',
      'function listItemForCharity(address nftContract, uint256 tokenId, uint256 price, address charityBeneficiary) external',
      'function cancelListing(address nftContract, uint256 tokenId) external',
      'function buyItem(address nftContract, uint256 tokenId) external payable',
      'function listings(address nftContract, uint256 tokenId) view returns (uint256 price, address seller, bool isPersonalSale, address charityBeneficiary)',
      'event ItemListed(address indexed nftContract, uint256 indexed tokenId, uint256 price, address indexed seller)',
      'event ItemListedForCharity(address indexed nftContract, uint256 indexed tokenId, uint256 price, address indexed seller, address charityBeneficiary)'
    ];

    // Minimal ERC-721 ABI needed for approvals
    this.erc721ABI = [
      'function setApprovalForAll(address operator, bool approved) external',
      'function isApprovedForAll(address owner, address operator) view returns (bool)',
      'function approve(address to, uint256 tokenId) external',
      'function getApproved(uint256 tokenId) view returns (address)'
    ];
  }

  /**
   * Approves the marketplace to transfer NFTs on behalf of the user.
   */
  async approveMarketplace(nftContractAddress) {
    if (!this.wallet.isConnected) throw new Error('Wallet not connected');

    const signer = this.wallet.getSigner();
    const nftContract = new Contract(nftContractAddress, this.erc721ABI, signer);

    const isApproved = await nftContract.isApprovedForAll(this.wallet.getAccount(), this.marketplaceAddress);
    
    if (!isApproved) {
      console.log('Approving Marketplace...');
      const tx = await nftContract.setApprovalForAll(this.marketplaceAddress, true);
      await tx.wait();
      console.log('Marketplace approved');
      return true;
    }
    return false; // Already approved
  }

  /**
   * Lists a minted token for personal sale â€” seller receives 100%.
   */
  async listItemPersonal(nftContractAddress, tokenId, priceInEth) {
    if (!this.wallet.isConnected) throw new Error('Wallet not connected');
    if (tokenId !== 0 && !tokenId) throw new Error('Invalid Token ID');
    if (tokenId > 90000) {
      await new Promise(r => setTimeout(r, 1500));
      return { simulated: true };
    }
    // Auto-approve marketplace before listing
    await this.approveMarketplace(nftContractAddress);
    const priceWei = parseEther(priceInEth.toString());
    const signer = this.wallet.getSigner();
    const marketContract = new Contract(this.marketplaceAddress, this.marketplaceABI, signer);
    const tx = await marketContract.listItemPersonal(nftContractAddress, tokenId, priceWei);
    return tx.wait();
  }

  /**
   * Lists a minted token for charity sale â€” 90% to selected charity, 10% to seller.
   */
  async listItemForCharity(nftContractAddress, tokenId, priceInEth, charityWalletAddress) {
    if (!this.wallet.isConnected) throw new Error('Wallet not connected');
    if (tokenId !== 0 && !tokenId) throw new Error('Invalid Token ID');
    if (!charityWalletAddress) throw new Error('Charity wallet address required');
    if (tokenId > 90000) {
      await new Promise(r => setTimeout(r, 1500));
      return { simulated: true };
    }
    // Auto-approve marketplace before listing
    await this.approveMarketplace(nftContractAddress);
    const priceWei = parseEther(priceInEth.toString());
    const signer = this.wallet.getSigner();
    const marketContract = new Contract(this.marketplaceAddress, this.marketplaceABI, signer);
    const tx = await marketContract.listItemForCharity(nftContractAddress, tokenId, priceWei, charityWalletAddress);
    return tx.wait();
  }

  /**
   * Lists a minted token (legacy: 90% to contract charity wallet, 10% to seller).
   */
  async listForCharity(nftContractAddress, tokenId, priceInEth) {
    if (!this.wallet.isConnected) throw new Error('Wallet not connected');
    if (tokenId !== 0 && !tokenId) throw new Error('Invalid Token ID. Has this been minted?');
    if (tokenId > 90000) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      return { simulated: true, txHash: '0xSIMULATED_LISTING_HASH' };
    }
    const priceWei = parseEther(priceInEth.toString());
    const signer = this.wallet.getSigner();
    const marketContract = new Contract(this.marketplaceAddress, this.marketplaceABI, signer);
    const tx = await marketContract.listItem(nftContractAddress, tokenId, priceWei);
    const receipt = await tx.wait();
    return receipt;
  }
}
