import { ShieldCheck, Calendar, Wallet } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      {/* Profile Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]"></div>

        {/* Avatar Placeholder */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 p-1 flex-shrink-0">
          <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
            <Wallet className="text-indigo-400" size={40} />
          </div>
        </div>

        <div className="flex-grow text-center md:text-left z-10">
          <h1 className="text-3xl font-black mb-2 font-mono text-slate-200">
            0x1A4...9eB2
          </h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm font-medium mb-6">
            <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700 flex items-center gap-2">
              <Calendar size={14} /> Joined Mar 2026
            </span>
            <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">
              Total Donated: 0.18 ETH
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Badges Sidebar */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <ShieldCheck className="text-cyan-400" /> Soulbound Badges
          </h2>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <div className="flex flex-col items-center text-center p-4 bg-slate-950 rounded-xl border border-slate-800 mb-4 group hover:border-cyan-500/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-cyan-500/20 mb-3 group-hover:scale-110 transition-transform">
                D
              </div>
              <h4 className="font-bold text-slate-200">Disaster Hero</h4>
              <span className="text-xs text-cyan-400 font-medium mt-1">Donated &gt; 0.1 ETH</span>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-slate-950 rounded-xl border border-slate-800 opacity-50 grayscale">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center text-white font-black text-2xl mb-3">
                L
              </div>
              <h4 className="font-bold text-slate-400">Legendary Donor</h4>
              <span className="text-xs text-slate-500 font-medium mt-1">Donated &gt; 1 ETH</span>
            </div>

          </div>
        </div>

        {/* Owned Items Grid */}
        <div className="lg:col-span-3">
          <h2 className="text-xl font-bold mb-4">Your Inventory</h2>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-600 mb-4">
              <Wallet size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-300 mb-2">No items owned yet</h3>
            <p className="text-slate-500 max-w-sm mb-6 text-sm">
              Head over to the Arena to fight enemies and mint your first NFT, or check out the marketplace to buy gear.
            </p>
            <div className="flex gap-4">
              <a href="/game" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full font-bold transition-colors text-sm">
                Play Game
              </a>
              <a href="/marketplace" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-full font-bold transition-colors border border-slate-700 text-sm">
                Marketplace
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
