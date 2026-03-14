import Link from 'next/link';
import { ShieldAlert, Globe2, Zap, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
        
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 flex justify-center blur-[120px] opacity-30 pointer-events-none">
          <div className="w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen"></div>
          <div className="w-64 h-64 bg-cyan-400 rounded-full mix-blend-screen -ml-16"></div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-sm font-medium text-indigo-300 mb-8 z-10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Live on Polygon Testnet
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 z-10">
          Play to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">Impact.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 z-10 leading-relaxed">
          The first Web3 gaming platform where your in-game NFT trades automatically fund disaster relief. 
          Gather loot, trade gear, and change the world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 z-10">
          <Link 
            href="/game"
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
          >
            Play Demo <ArrowRight size={20} />
          </Link>
          <Link 
            href="/marketplace"
            className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
          >
            Explore Market
          </Link>
        </div>

      </section>

      {/* Feature Grid */}
      <section className="w-full bg-slate-900 border-y border-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 flex flex-col items-center text-center hover:border-indigo-500/30 transition-colors">
            <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">True Ownership</h3>
            <p className="text-slate-400">Mint your hard-earned drops as ERC721 NFTs. Level up your gear dynamically on-chain.</p>
          </div>

          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 flex flex-col items-center text-center hover:border-cyan-500/30 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6 relative">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Automated Charity</h3>
            <p className="text-slate-400">90% of all marketplace sales are routed automatically to verified disaster relief DAOs via smart contracts.</p>
          </div>

          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 flex flex-col items-center text-center hover:border-emerald-500/30 transition-colors">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
              <Globe2 size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Guild Impact</h3>
            <p className="text-slate-400">Join guilds and compete on the global leaderboard not just for gaming glory, but for total funds raised.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
