"use client";
import React from 'react';

export default function PlayerControls({ isPlaying, onToggle, onNext, onPrev }: any) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button onClick={onPrev} aria-label="Previous track" className="text-white/70 hover:text-white transition-colors cursor-pointer">
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6L18 18V6z" /></svg>
      </button>
      <button onClick={onToggle} aria-label={isPlaying ? 'Pause' : 'Play'} className="text-white hover:text-amber-300 transition-colors cursor-pointer">
        {isPlaying ? (
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6 5h4v14H6zm8 0h4v14h-4z" /></svg>
        ) : (
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        )}
      </button>
      <button onClick={onNext} aria-label="Next track" className="text-white/70 hover:text-white transition-colors cursor-pointer">
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
      </button>
    </div>
  );
}
