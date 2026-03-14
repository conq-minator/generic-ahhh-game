"use client";

import { Trophy, Users, Swords, Shield } from 'lucide-react';

const MOCK_GUILDS = [
  { id: 1, name: "DragonSlayers", members: 142, donated: "1.24", rank: 1, icon: <Trophy className="text-amber-400" size={24} /> },
  { id: 2, name: "PhoenixGuild", members: 98, donated: "0.95", rank: 2, icon: <Shield className="text-slate-400" size={24} /> },
  { id: 3, name: "ShadowClan", members: 215, donated: "0.78", rank: 3, icon: <span className="text-amber-700 font-bold text-xl">3</span> },
  { id: 4, name: "Web3 Wizards", members: 45, donated: "0.42", rank: 4, icon: <span className="text-slate-500 font-bold text-xl">4</span> },
  { id: 5, name: "Loot Goblins", members: 312, donated: "0.15", rank: 5, icon: <span className="text-slate-500 font-bold text-xl">5</span> },
];

export default function GuildsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black mb-3 flex items-center gap-3">
            <Users className="text-emerald-400" size={36} /> Guild Rankings
          </h1>
          <p className="text-slate-400 max-w-xl text-lg">
            Join forces with other players. Guilds are ranked by the total amount of ETH their members have contributed to charity through marketplace trades.
          </p>
        </div>
        
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-emerald-500/20 transition-all whitespace-nowrap">
          Create New Guild
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 p-6 bg-slate-950/50 border-b border-slate-800 text-sm font-semibold text-slate-500 uppercase tracking-wider">
          <div className="col-span-2 md:col-span-1 text-center">Rank</div>
          <div className="col-span-6 md:col-span-5">Guild Name</div>
          <div className="col-span-4 md:col-span-3 text-right md:text-left">Members</div>
          <div className="hidden md:block md:col-span-3 text-right">Total Impact</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-slate-800/50">
          {MOCK_GUILDS.map((guild) => (
            <div 
              key={guild.id} 
              className={`grid grid-cols-12 gap-4 p-6 items-center transition-colors hover:bg-slate-800/30 ${
                guild.rank === 1 ? 'bg-amber-500/5' : ''
              }`}
            >
              
              {/* Rank Icon */}
              <div className="col-span-2 md:col-span-1 flex justify-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  guild.rank === 1 ? 'bg-amber-500/20 border border-amber-500/30' : 
                  guild.rank === 2 ? 'bg-slate-500/20 border border-slate-500/30' : 
                  guild.rank === 3 ? 'bg-amber-700/20 border border-amber-700/30' : 
                  'bg-slate-800 text-slate-500 border border-slate-700'
                }`}>
                  {guild.icon}
                </div>
              </div>

              {/* Guild Name */}
              <div className="col-span-6 md:col-span-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-slate-600 shadow-inner">
                  <Swords className="text-slate-400" size={20} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${guild.rank === 1 ? 'text-amber-400' : 'text-slate-200'}`}>
                    {guild.name}
                  </h3>
                </div>
              </div>

              {/* Members */}
              <div className="col-span-4 md:col-span-3 text-right md:text-left flex items-center justify-end md:justify-start gap-2">
                <Users size={16} className="text-slate-500" />
                <span className="text-slate-300 font-medium">{guild.members}</span>
              </div>

              {/* Impact / Donated */}
              <div className="col-span-12 md:col-span-3 mt-4 md:mt-0 flex justify-between md:justify-end items-center md:text-right border-t border-slate-800 pt-4 md:border-0 md:pt-0">
                <span className="md:hidden text-sm text-slate-500 font-semibold uppercase tracking-wider">Total Impact</span>
                <span className="text-xl font-black text-emerald-400 tracking-tight">
                  {guild.donated} <span className="text-emerald-500/70 text-sm">ETH</span>
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
