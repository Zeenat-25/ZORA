"use client";
import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0a0a0c]">
      <div className="absolute inset-0 opacity-25" style={{ background: 'radial-gradient(circle at 50% -20%, #1a1a2e 0%, #050505 80%)' }} />
      <video
        autoPlay muted loop playsInline controls={false}
        className="w-full h-full object-cover transition-opacity duration-1000"
        onCanPlay={(e) => (e.currentTarget.style.opacity = "1")}
        style={{ opacity: 0, filter: 'brightness(1.18) saturate(1.08)' }}
      >
        <source src="/bg/ambient-loop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/5" />
    </div>
  );
}
