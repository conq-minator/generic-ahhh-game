"use client";

import { useState } from 'react';
import { Wallet } from 'lucide-react';

declare global {
  interface Window {
    ethereum?: any;
  }
}

// import { ethers } from 'ethers'; // To be connected later

export default function WalletConnect() {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = async () => {
    setIsConnecting(true);
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAddress(accounts[0]);
      } else {
        alert('Please install MetaMask to use CreatorVerse!');
      }
    } catch (error) {
      console.error('User rejected request', error);
    } finally {
      setIsConnecting(false);
    }
  };

  if (address) {
    return (
      <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-2 hover:bg-slate-700 transition">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
        <span className="text-sm font-medium font-mono text-slate-300">
          {`${address.substring(0, 6)}...${address.substring(address.length - 4)}`}
        </span>
      </div>
    );
  }

  return (
    <button
      onClick={connectWallet}
      disabled={isConnecting}
      className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] disabled:opacity-50"
    >
      <Wallet size={18} />
      {isConnecting ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
}
