/**
 * WalletManager — MetaMask connection and network management
 */
export class WalletManager {
  constructor() {
    this.provider = null;
    this.signer = null;
    this.account = null;
    this.chainId = null;
    this.isConnected = false;

    // Sepolia testnet
    this.targetChainId = '0xaa36a7'; // 11155111
    this.targetChainName = 'Sepolia';
  }

  async connect() {
    console.log('[WalletManager] connect() called');
    if (typeof window.ethereum === 'undefined') {
      throw new Error('MetaMask is not installed. Please install MetaMask to mint NFTs.');
    }

    try {
      console.log('[WalletManager] Loading ethers.js...');
      let BrowserProvider;
      try {
        const ethers = await import('ethers');
        BrowserProvider = ethers.BrowserProvider;
      } catch (err) {
        console.error('[WalletManager] Failed to load ethers.js from CDN', err);
        throw new Error('Failed to load Web3 libraries. Check your internet connection or ad blocker.');
      }
      
      console.log('[WalletManager] Requesting accounts...');
      // Request accounts
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      this.account = accounts[0];

      // Setup provider
      this.provider = new BrowserProvider(window.ethereum);
      this.signer = await this.provider.getSigner();

      // Check network
      const network = await this.provider.getNetwork();
      this.chainId = '0x' + network.chainId.toString(16);

      if (this.chainId !== this.targetChainId) {
        await this._switchNetwork();
      }

      this.isConnected = true;

      // Listen for account/chain changes
      window.ethereum.on('accountsChanged', (accounts) => {
        this.account = accounts[0] || null;
        if (!this.account) this.isConnected = false;
      });

      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });

      return this.account;
    } catch (err) {
      console.error('Wallet connection failed:', err);
      throw err;
    }
  }

  async checkConnection() {
    if (typeof window.ethereum === 'undefined') return null;
    
    try {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts.length > 0) {
        // They are already authorized. Let's do a full connect.
        return await this.connect();
      }
    } catch (err) {
      console.error('[WalletManager] Auto-connect failed', err);
    }
    return null;
  }

  async _switchNetwork() {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: this.targetChainId }]
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: this.targetChainId,
            chainName: 'Sepolia Testnet',
            nativeCurrency: { name: 'SepoliaETH', symbol: 'SEP', decimals: 18 },
            rpcUrls: ['https://rpc.sepolia.org'],
            blockExplorerUrls: ['https://sepolia.etherscan.io']
          }]
        });
      } else {
        throw switchError;
      }
    }
  }

  getAccount() {
    return this.account;
  }

  getSigner() {
    return this.signer;
  }

  getProvider() {
    return this.provider;
  }

  getShortAddress() {
    if (!this.account) return '';
    return this.account.slice(0, 6) + '...' + this.account.slice(-4);
  }
}
