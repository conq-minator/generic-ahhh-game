import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4">
        
        <div className="flex items-center gap-2 text-slate-400">
          Built with <Heart className="text-rose-500 fill-rose-500" size={16} /> for Web3 Hackathon
        </div>

        <div className="text-sm text-slate-500 text-center max-w-md">
          CreatorVerse: Where gaming achievements create real-world impact.
          Every NFT trade helps fund disaster relief and global causes.
        </div>

      </div>
    </footer>
  );
}
