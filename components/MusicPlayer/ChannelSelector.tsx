"use client";
import React from 'react';
import { CHANNELS } from '@/data/radio';

export default function ChannelSelector({ activeId, onSelect }: any) {
  const index = CHANNELS.findIndex((c: any) => c.id === activeId);
  const active = CHANNELS[index] ?? CHANNELS[0];
  const handleClick = () => onSelect(CHANNELS[(index + 1) % CHANNELS.length].id);

  return (
    <button onClick={handleClick} title="Switch channel" className="flex items-center gap-1 cursor-pointer group">
      <span className="w-[3px] h-[3px] rounded-full bg-amber-400/80" />
      <span className="text-[7px] tracking-[0.16em] uppercase font-semibold text-amber-300/80 group-hover:text-amber-200 whitespace-nowrap transition-colors">
        {active.name}
      </span>
    </button>
  );
}
