"use client";
import React, { useEffect, useState } from 'react';

export default function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      }).format(new Date());
      setTime(now);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeParts = time.split(" ");
  const hmMars = timeParts[0]?.split(":") || ["00", "00"];
  const ampm = timeParts[1] || "";

  return (
    <header className="flex justify-between items-start px-6 sm:px-10 md:px-12 pt-8 sm:pt-10 md:pt-12 text-[10px] md:text-[11px] tracking-[0.3em] font-medium uppercase text-white/40">
      <div className="text-white font-bold tracking-[0.5em] opacity-90">ZORA</div>

      <div className="flex flex-col items-end gap-1.5">
        <div className="flex items-center gap-2 text-white/60">
          <span className="w-1 h-1 bg-amber-400 rounded-full animate-pulse" />
          LIVE
        </div>

        <div className="tabular-nums flex items-center text-white/40">
          <span>{hmMars[0]}</span>
          <span className="animate-blink mx-0.5">:</span>
          <span>{hmMars[1]}</span>
          <span className="ml-1 text-[9px] opacity-60">{ampm}</span>
        </div>
      </div>
    </header>
  );
}