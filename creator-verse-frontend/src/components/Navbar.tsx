"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Swords, Store, Heart, Users, Video } from 'lucide-react';
import WalletConnect from './WalletConnect';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Shield size={18} /> },
    { name: 'Game', path: '/game', icon: <Swords size={18} /> },
    { name: 'Market', path: '/marketplace', icon: <Store size={18} /> },
    { name: 'Impact', path: '/impact', icon: <Heart size={18} /> },
    { name: 'Guilds', path: '/guilds', icon: <Users size={18} /> },
    { name: 'Stream', path: '/stream', icon: <Video size={18} /> },
  ];

  return (
    <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-600">
                CreatorVerse
              </span>
            </Link>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex space-x-1 lg:space-x-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-slate-800 text-white' 
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Wallet */}
          <div className="flex items-center gap-4">
            <WalletConnect />
          </div>

        </div>
      </div>
    </nav>
  );
}
