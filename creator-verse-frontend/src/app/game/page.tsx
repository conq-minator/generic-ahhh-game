import { Swords } from 'lucide-react';

export default function GamePage() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center py-20 px-4">
      
      <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-slate-950 border border-slate-700 rounded-2xl flex items-center justify-center text-slate-300 mb-8 shadow-inner">
            <Swords size={40} className="text-rose-400" />
          </div>
          
          <h2 className="text-3xl font-black mb-4">CreatorVerse Arena</h2>
          <p className="text-slate-400 mb-10 max-w-md mx-auto">
            This space is reserved for the Member 3 Game Engine integration. 
            Once the Unity WebGL or React Canvas game is ready, it will be embedded right here.
          </p>
          
          <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-6 w-full max-w-md text-left text-sm text-slate-400">
            <h4 className="font-semibold text-slate-300 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span> Pending Integration
            </h4>
            <ul className="space-y-2 list-disc list-inside">
              <li>Enemy Defeat Logic</li>
              <li>Random Loot Generation</li>
              <li>Mint as NFT Button (ERC721)</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}
