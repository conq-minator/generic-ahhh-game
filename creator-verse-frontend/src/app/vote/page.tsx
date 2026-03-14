"use client";

import { Vote, HeartHandshake, Globe2, BookOpen } from 'lucide-react';
import { useState } from 'react';

const CHARITIES = [
  { id: 1, name: "Global Disaster Relief", description: "Emergency funds for natural disaster zones.", icon: <Globe2 className="text-blue-400" size={32} />, votes: 215, color: "from-blue-600 to-cyan-500" },
  { id: 2, name: "Children's Health Fund", description: "Providing pediatric care to underserved areas.", icon: <HeartHandshake className="text-rose-400" size={32} />, votes: 189, color: "from-rose-600 to-pink-500" },
  { id: 3, name: "Web3 Education Initiative", description: "Teaching coding and blockchain in developing nations.", icon: <BookOpen className="text-amber-400" size={32} />, votes: 94, color: "from-amber-600 to-orange-500" },
];

export default function VotePage() {
  const [votedId, setVotedId] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 mb-12 text-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]"></div>
        
        <Vote className="mx-auto text-indigo-400 mb-6" size={48} />
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">DAO Voting</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
          The CreatorVerse community decides where the funds go. 
          Use your wallet to vote for the charity that will receive the next week's NFT marketplace proceeds.
        </p>

        <div className="inline-flex items-center gap-3 bg-slate-950/50 border border-slate-700/50 px-6 py-3 rounded-full text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Voting Cycle Ends in: <span className="font-mono text-emerald-400 ml-1">2d 14h 32m</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CHARITIES.map((charity) => (
          <div 
            key={charity.id} 
            className={`bg-slate-900 border ${votedId === charity.id ? 'border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.2)]' : 'border-slate-800 hover:border-slate-700'} rounded-2xl p-8 flex flex-col relative transition-all`}
          >
            {votedId === charity.id && (
              <div className="absolute -top-4 -right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Your Vote
              </div>
            )}

            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${charity.color} flex items-center justify-center bg-opacity-10 mb-6 p-0.5`}>
              <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                {charity.icon}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-3">{charity.name}</h3>
            <p className="text-slate-400 text-sm mb-8 flex-grow">
              {charity.description}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Current Votes</span>
                <span className="text-2xl font-black text-slate-200">
                  {votedId === charity.id ? charity.votes + 1 : charity.votes}
                </span>
              </div>
              
              <button 
                onClick={() => setVotedId(charity.id)}
                disabled={votedId !== null}
                className={`px-6 py-2.5 rounded-full font-bold transition-all ${
                  votedId === charity.id 
                    ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/50 cursor-default'
                    : votedId !== null
                      ? 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed hidden'
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                }`}
              >
                {votedId === charity.id ? 'Voted' : 'Vote Now'}
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
