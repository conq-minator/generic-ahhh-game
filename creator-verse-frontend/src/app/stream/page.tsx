"use client";

import { Video, Heart, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function StreamPage() {
  const [tipAmount, setTipAmount] = useState('0.01');

  return (
    <div className="w-full flex-grow flex flex-col md:flex-row h-full max-w-screen-2xl mx-auto">
      
      {/* Main Content Area (Stream Video & Info) */}
      <div className="flex-grow flex flex-col border-r border-slate-800 lg:w-3/4">
        
        {/* Stream Video Placeholder */}
        <div className="w-full aspect-video bg-black relative group cursor-pointer border-b border-slate-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <Video className="text-indigo-500/50 w-24 h-24 mb-4 group-hover:scale-110 transition-transform" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="absolute top-4 left-4 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-sm flex items-center gap-2 uppercase tracking-widest shadow-lg shadow-rose-600/30">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            LIVE
          </div>
          
          <div className="absolute bottom-4 left-4">
            <h2 className="text-2xl font-bold text-white shadow-black drop-shadow-lg">
              CreatorVerse Let's Play — Grinding for Charity!
            </h2>
            <div className="flex items-center gap-3 mt-2 text-slate-300 font-medium text-sm">
              <span className="bg-black/50 px-2 py-0.5 rounded backdrop-blur border border-white/10">1,204 watching</span>
              <span className="bg-black/50 px-2 py-0.5 rounded backdrop-blur border border-white/10 text-emerald-400">0.4 ETH Raised Today</span>
            </div>
          </div>
        </div>

        {/* Creator Info & Tip Section */}
        <div className="p-6 bg-slate-950 flex flex-col xl:flex-row justify-between xl:items-center gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 p-1">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" 
                alt="Avatar" 
                className="w-full h-full rounded-full bg-slate-900"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                0xGamerDev <span className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-xs px-2 py-0.5 rounded-full uppercase tracking-widest">Creator</span>
              </h3>
              <p className="text-slate-400 text-sm mt-1">Playing CreatorVerse Demo • Member of <span className="text-emerald-400">DragonSlayers</span> Guild</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 p-4 rounded-2xl w-full xl:w-auto">
            <div className="flex items-center">
              <span className="absolute pl-4 text-slate-500 font-bold">ETH</span>
              <input 
                type="number" 
                step="0.01"
                min="0.001"
                value={tipAmount}
                onChange={(e) => setTipAmount(e.target.value)}
                className="bg-slate-950 border border-slate-700 rounded-l-xl py-3 pl-14 pr-4 w-32 focus:outline-none focus:border-indigo-500 text-lg font-bold font-mono"
              />
            </div>
            <button className="bg-rose-600 hover:bg-rose-500 text-white px-6 py-3 rounded-r-xl font-bold flex items-center gap-2 transition-colors shadow-lg shadow-rose-600/20 whitespace-nowrap h-full border border-rose-600 hover:border-rose-500">
              <Heart size={20} className="fill-white" /> Send Tip
            </button>
          </div>

        </div>
      </div>

      {/* Sidebar Chat Placeholder */}
      <div className="bg-slate-950 w-full lg:w-1/4 min-w-[320px] flex flex-col h-[500px] lg:h-[calc(100vh-64px)] overflow-hidden shrink-0 hidden md:flex">
        
        <div className="p-4 border-b border-slate-800 bg-slate-900 text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 shrink-0">
          <MessageSquare size={16} /> Live Chat
        </div>

        <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-4 font-sm">
          {/* Chat Mockups */}
          <div className="text-sm"><span className="font-bold text-amber-400">CryptoKid23:</span> nice drop!!</div>
          <div className="text-sm"><span className="font-bold text-cyan-400">Web3Fan:</span> anyone know what level that sword is?</div>
          
          <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg p-3 my-2 shadow-inner">
            <div className="font-bold text-rose-400 flex items-center gap-2 mb-1">
              <Heart size={14} className="fill-rose-400" /> Madhuja tipped 0.01 ETH
            </div>
            <div className="text-sm text-slate-300">Keep grinding for the relief fund! 🙌</div>
          </div>

          <div className="text-sm"><span className="font-bold text-purple-400">PlayerOne:</span> W</div>
          <div className="text-sm"><span className="font-bold text-emerald-400">Alice_Builder:</span> W stream</div>

          <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg p-3 my-2 shadow-inner">
            <div className="font-bold text-rose-400 flex items-center gap-2 mb-1">
              <Heart size={14} className="fill-rose-400" /> Kamalika tipped 0.02 ETH
            </div>
            <div className="text-sm text-slate-300">great gear drops today</div>
          </div>
          
          <div className="text-sm"><span className="font-bold text-amber-400">CryptoKid23:</span> how much total donated so far?</div>
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-900 shrink-0">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Send a message..." 
              className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-indigo-500 text-sm"
              disabled
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500 font-bold">Log in to chat</span>
          </div>
        </div>

      </div>

    </div>
  );
}
