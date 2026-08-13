"use client";

import React from "react";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

export default function MusicPlayer() {
  const player = useAudioPlayer();

  const progress =
    player.duration > 0
      ? Math.min(100, Math.max(0, (player.progress / player.duration) * 100))
      : 0;

  return (
    <div
      className="
        fixed
        left-1/2
        bottom-8
        -translate-x-1/2
        z-50

        w-[300px]
        max-w-[calc(100vw-32px)]

        flex
        flex-col
        gap-3
      "
    >
      {/* TITLE + ARTIST + PROGRESS */}
      <div className="flex items-center gap-4">
        <div className="text-left min-w-0 shrink-0 max-w-[110px]">
          <div
            className="
              text-[15px]
              leading-[18px]
              font-semibold
              text-white
              truncate
              [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]
            "
          >
            {player.currentTrack.title}
          </div>
          <div
            className="
              mt-[2px]
              text-[11px]
              leading-[14px]
              font-normal
              text-white/70
              truncate
              [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]
            "
          >
            {player.currentTrack.artist}
          </div>
        </div>

        <div className="relative flex-1 h-[3px]">
          <input
            type="range"
            min={0}
            max={player.duration || 1}
            step={0.1}
            value={Math.min(player.progress, player.duration || 1)}
            onChange={(e) => player.seek(Number(e.target.value))}
            className="
              absolute
              inset-0
              w-full
              h-[3px]
              m-0
              p-0
              appearance-none
              cursor-pointer
              bg-transparent
              z-10
            "
            style={{
              background: `linear-gradient(
                to right,
                rgba(255,255,255,0.85) ${progress}%,
                rgba(255,255,255,0.28) ${progress}%
              )`,
              borderRadius: "999px",
            }}
            aria-label="Song progress"
          />
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex items-center justify-center gap-8">
        {/* PREVIOUS */}
        <button
          type="button"
          aria-label="Previous track"
          onClick={() => player.prevTrack()}
          className="w-[22px] h-[22px] flex items-center justify-center text-white/90 hover:text-white transition-colors cursor-pointer drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 5V19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M18 6L9 12L18 18V6Z" fill="currentColor" />
          </svg>
        </button>

        {/* PLAY / PAUSE */}
        <button
          type="button"
          aria-label={player.isPlaying ? "Pause" : "Play"}
          onClick={() => player.togglePlay()}
          className="
            w-[34px]
            h-[34px]
            rounded-full
            flex
            items-center
            justify-center
            bg-white
            text-black
            hover:bg-white/90
            transition-all
            cursor-pointer
            shadow-[0_2px_10px_rgba(0,0,0,0.35)]
          "
        >
          {player.isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5V18.5L19 12L8 5.5Z" />
            </svg>
          )}
        </button>

        {/* NEXT */}
        <button
          type="button"
          aria-label="Next track"
          onClick={() => player.nextTrack()}
          className="w-[22px] h-[22px] flex items-center justify-center text-white/90 hover:text-white transition-colors cursor-pointer drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M18 5V19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M6 6L15 12L6 18V6Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
}