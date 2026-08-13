"use client";
import React from 'react';

export default function VinylArtwork({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="relative w-[30px] h-[30px] shrink-0">
      <div className={`absolute inset-0 rounded-full bg-amber-500/10 blur-sm transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`relative w-full h-full rounded-full bg-[#0a0a0a] shadow-[0_0_10px_rgba(0,0,0,0.7)] border border-white/5 flex items-center justify-center ${isPlaying ? 'animate-vinyl' : 'animate-vinyl animate-vinyl-paused'}`}>
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="46" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="34" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
          <div className="w-[2px] h-[2px] rounded-full bg-amber-500" />
        </div>
      </div>
    </div>
  );
}
