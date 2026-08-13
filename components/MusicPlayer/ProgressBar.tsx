"use client";
import React from 'react';

export default function ProgressBar({ progress, duration, onSeek, error }: any) {
  const percentage = duration > 0 ? (progress / duration) * 100 : 0;

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    onSeek((x / rect.width) * duration);
  };

  return (
    <div
      className="relative w-full h-[3px] bg-white/10 rounded-full cursor-pointer group"
      onClick={handleSeek}
      title={error ? "Unavailable" : undefined}
    >
      <div
        className="absolute h-full bg-amber-500 rounded-full flex items-center justify-end"
        style={{ width: `${percentage}%` }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24] scale-0 group-hover:scale-100 transition-transform" />
      </div>
    </div>
  );
}
