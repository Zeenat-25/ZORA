"use client";
import React from 'react';

export default function GrainOverlay() {
  return (
    <div className="fixed inset-0 z-1 pointer-events-none opacity-[0.03] mix-blend-overlay">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}