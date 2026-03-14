import { Activity, Trophy, ArrowRightLeft } from 'lucide-react';

const MOCK_DONATIONS = [
  { id: 1, buyer: "0x1A4...9eB2", seller: "0x8cD...f1a5", amount: "0.045", charity: "Red Cross", time: "10 mins ago" },
  { id: 2, buyer: "0x3F2...4a89", seller: "0x1A4...9eB2", amount: "0.135", charity: "Red Cross", time: "1 hour ago" },
  { id: 3, buyer: "0x9E1...c3d4", seller: "0x5B6...8f90", amount: "0.018", charity: "UNICEF", time: "3 hours ago" },
  { id: 4, buyer: "0x2A5...e7b1", seller: "0x8cD...f1a5", amount: "0.072", charity: "Climate DAO", time: "5 hours ago" },
];

export default function ImpactDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Impact Dashboard</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Every NFT traded in MakerVerse directly funds real-world causes. 
          Here's the on-chain proof of our community's impact.
        </p>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
          <span className="text-slate-400 font-semibold mb-2 uppercase tracking-widest text-sm">Total Donated</span>
          <span className="text-5xl font-black text-emerald-400">3.45</span>
          <span className="text-emerald-500 font-bold mt-1">ETH</span>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
          <span className="text-slate-400 font-semibold mb-2 uppercase tracking-widest text-sm">NFT Trades</span>
          <span className="text-5xl font-black text-indigo-400">128</span>
          <span className="text-indigo-500 font-bold mt-1">Transactions</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl"></div>
          <Trophy className="text-rose-400 mb-3" size={32} />
          <span className="text-slate-400 font-semibold mb-1 uppercase tracking-widest text-sm">Top Guild</span>
          <span className="text-2xl font-black text-white">DragonSlayers</span>
          <span className="text-rose-400 font-medium text-sm mt-1">1.2 ETH Raised</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Feed */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Activity className="text-indigo-400" /> Recent On-Chain Donations
          </h2>
          
          <div className="space-y-4">
            {MOCK_DONATIONS.map((tx) => (
              <div key={tx.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-700 transition-colors">
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700">
                    <ArrowRightLeft size={16} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="font-mono text-indigo-300 font-medium">{tx.buyer}</span>
                      <span className="text-slate-500">bought from</span>
                      <span className="font-mono text-slate-400">{tx.seller}</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{tx.time}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:text-right bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl">
                  <span className="font-bold text-emerald-400">{tx.amount} ETH</span>
                  <span className="text-xs text-emerald-500/70 font-medium">→ {tx.charity}</span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-gradient-to-br from-indigo-900/50 to-slate-900 border border-indigo-500/30 rounded-3xl p-8 h-fit">
          <h3 className="text-xl font-bold mb-4 text-indigo-300">How it works</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            When an item is sold on the CreatorVerse marketplace, our smart contract automatically intercepts the payment. 
            90% of the ETH is routed immediately to the DAO-selected charity wallet, and 10% goes to the original seller.
          </p>
          <div className="bg-slate-950/50 rounded-xl p-4 text-xs font-mono text-slate-400 break-all border border-slate-800">
            Contract: <span className="text-indigo-400">0xPending...Deployment</span>
          </div>
        </div>

      </div>
    </div>
  );
}
