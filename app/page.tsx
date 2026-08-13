"use client";
import React from 'react';
import BackgroundVideo from '@/components/BackgroundVideo';
import GrainOverlay from '@/components/GrainOverlay';
import TopBar from '@/components/TopBar';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-black flex flex-col items-center">
      <BackgroundVideo />
      <GrainOverlay />
      
      <div className="relative z-20 w-full">
        <TopBar />
      </div>

      <div className="fixed bottom-[22px] left-0 w-full z-30 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto">
          <MusicPlayer />
        </div>
      </div>
    </main>
  );
}