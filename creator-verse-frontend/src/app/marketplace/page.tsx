"use client";

import { ShoppingCart } from 'lucide-react';

// Mock Data for MVP until Smart Contract is connected
const MOCK_NFTS = [
  { id: 1, name: "Shadow Blade", rarity: "Epic", attack: 120, price: "0.05", level: 2, imageColor: "bg-indigo-500" },
  { id: 2, name: "Meteor Shield", rarity: "Legendary", attack: 85, price: "0.15", level: 1, imageColor: "bg-rose-500" },
  { id: 3, name: "Crystal Wand", rarity: "Rare", attack: 50, price: "0.02", level: 4, imageColor: "bg-cyan-500" },
  { id: 4, name: "Iron Helm", rarity: "Common", attack: 15, price: "0.005", level: 1, imageColor: "bg-slate-500" },
  { id: 5, name: "Void Bow", rarity: "Epic", attack: 110, price: "0.08", level: 3, imageColor: "bg-purple-500" },
  { id: 6, name: "Dragon Scale Armor", rarity: "Legendary", attack: 200, price: "0.5", level: 5, imageColor: "bg-amber-500" },
];

export default function MarketplacePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-4xl font-black mb-2 flex items-center gap-3">
            <ShoppingCart className="text-indigo-400" size={32} /> NFT Marketplace
          </h1>
          <p className="text-slate-400 text-lg">
            90% of all purchases automatically go to the current DAO-selected charity.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_NFTS.map((nft) => (
          <div key={nft.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all group">
            {/* Mock NFT Image Area */}
            <div className={`h-48 w-full ${nft.imageColor} relative flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 bg-slate-950/20 mix-blend-overlay"></div>
              <div className="text-white/80 font-black text-2xl uppercase tracking-widest drop-shadow-md z-10">
                Lvl {nft.level}
              </div>
            </div>

            {/* Content Setion */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{nft.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wide
                      ${nft.rarity === 'Legendary' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 
                        nft.rarity === 'Epic' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 
                        nft.rarity === 'Rare' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 
                        'bg-slate-700/50 text-slate-300 border border-slate-700'
                      }
                    `}>
                      {nft.rarity}
                    </span>
                    <span className="text-xs text-rose-400 bg-rose-500/10 px-2 py-1 rounded-full border border-rose-500/20 font-medium">
                      ATK {nft.attack}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-800">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Price</span>
                  <span className="text-lg font-bold text-emerald-400">{nft.price} ETH</span>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full font-bold transition-colors shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40">
                  Buy
                </button>
              </div>
              
              <div className="mt-4 text-xs text-center text-slate-500 bg-slate-950 rounded-lg py-2 border border-slate-800">
                <span className="text-emerald-400 font-bold">{(parseFloat(nft.price) * 0.9).toFixed(3)} ETH</span> will be donated to Charity
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
