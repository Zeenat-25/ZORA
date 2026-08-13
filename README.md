
# ZORA

A cinematic, nostalgia-themed web music player built with Next.js. ZORA presents a single-screen "radio" experience: a looping ambient background video, a film-grain overlay, a live IST clock, and a floating glass-style music player that streams a curated set of retro Bollywood tracks.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/postcss`
- **Audio:** Native browser `HTMLAudioElement` (no external audio library)

No backend, database, or API layer is present — this is a fully static, client-rendered front-end application.

## Features

- **Ambient looping background video** (`public/bg/ambient-loop.mp4`) with a subtle radial gradient and fade-in.
- **Film-grain overlay** rendered with an SVG `feTurbulence` filter for a cinematic texture.
- **Live clock** in the top bar, displayed in `Asia/Kolkata` (IST) time, updated every second.
- **Glassmorphism music player** fixed to the bottom of the screen, showing the current track title, artist, animated progress bar (seekable), and play/pause/next/previous controls.
- **Retro music library** — 13 pre-loaded Hindi/Bollywood MP3 tracks served from `public/music/`, defined as a single "ZORA" channel in `data/radio.ts`.
- **Custom audio hook** (`useAudioPlayer`) that manages playback state, track progression (including auto-advance on track end), seeking, and channel switching.

## Project Structure

```
Zora/
├── app/
│   ├── layout.tsx          # Root layout, metadata & viewport config
│   ├── page.tsx             # Main page — composes the app UI
│   └── globals.css          # Tailwind import + custom animations/utilities
├── components/
│   ├── BackgroundVideo.tsx  # Looping ambient background video
│   ├── GrainOverlay.tsx     # SVG film-grain texture overlay
│   ├── TopBar.tsx           # ZORA logo, LIVE indicator, IST clock
│   └── MusicPlayer/
│       ├── index.tsx            # Active player UI (title, progress, controls)
│       ├── ChannelSelector.tsx  # Channel-switch button (not currently wired in)
│       ├── PlayerControls.tsx   # Standalone play/pause/next/prev controls (not currently wired in)
│       ├── ProgressBar.tsx      # Standalone seekable progress bar (not currently wired in)
│       └── VinylArtwork.tsx     # Spinning vinyl icon (not currently wired in)
├── data/
│   └── radio.ts              # Channel & track definitions (titles, artists, file paths)
├── hooks/
│   └── useAudioPlayer.ts     # Core audio playback logic (state, controls, events)
├── lib/
│   └── utils.ts              # formatTime() helper (not currently used in the UI)
├── public/
│   ├── bg/ambient-loop.mp4   # Background video asset
│   └── music/*.mp3           # Track audio files
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

> **Note:** `ChannelSelector.tsx`, `PlayerControls.tsx`, `ProgressBar.tsx`, `VinylArtwork.tsx`, and `formatTime()` in `lib/utils.ts` are defined in the codebase but are not currently imported by `components/MusicPlayer/index.tsx` (the active player builds its title/progress/controls UI inline). They're available building blocks if you want to modularize the player further.

## Getting Started

### Prerequisites

- Node.js and npm (a package manager compatible with the included `package-lock.json`)

### Installation

```bash
npm install
```

### Development

Starts the app in development mode (with Turbopack, via `next dev`):

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
```

### Start (Production)

Runs the production build (must be run after `npm run build`):

```bash
npm run start
```

No `lint` or `test` script is defined in `package.json`.

## How It Works

- **`app/page.tsx`** is the single page of the app. It layers `BackgroundVideo`, `GrainOverlay`, `TopBar`, and `MusicPlayer` on top of each other using fixed/absolute positioning.
- **`hooks/useAudioPlayer.ts`** creates and manages a single `HTMLAudioElement` instance. It tracks `isPlaying`, `progress`, `duration`, and `error` state, listens to the audio element's `loadedmetadata`, `timeupdate`, `ended`, and `error` events, and exposes `togglePlay`, `nextTrack`, `prevTrack`, `seek`, and `changeChannel` functions.
- **`components/MusicPlayer/index.tsx`** consumes `useAudioPlayer()` and renders the track title/artist, a native `<input type="range">` seek bar styled with a gradient, and previous/play-pause/next buttons.
- **`data/radio.ts`** defines the `CHANNELS` array (currently one channel, `"ZORA"`) containing `Track` objects (`id`, `title`, `artist`, `src`). `src` values point to files in `public/music/`.

## Adding or Changing Music

1. Add your MP3 file to `public/music/`.
2. Add a corresponding entry to the `tracks` array in `data/radio.ts`:

```ts
{
  id: "14",
  title: "Your Track Title",
  artist: "Artist Name",
  src: "/music/your-file-name.mp3",
}
```

The `src` must exactly match the file name (including spaces) under `public/music/`.

> Some `src` values in `data/radio.ts` currently reference shortened file names (e.g. `/music/Ek Ajnabee Haseen Se.mp3`) that don't exactly match the longer file names actually present in `public/music/`. Verify each `src` path against the real file name if a track fails to play.

To add more than one channel, append a new `Channel` object (with its own `id`, `name`, and `tracks`) to the `CHANNELS` array in `data/radio.ts`.

## Changing the Background Video

Replace `public/bg/ambient-loop.mp4` with your own video file of the same name, or update the `src` path in `components/BackgroundVideo.tsx`.

## Environment Variables

None. No `.env` file or environment-variable usage was found anywhere in the codebase.

## Browser Considerations

- Autoplay of background video relies on the browser's autoplay policy for muted, inline video (`autoPlay muted loop playsInline`), which is generally permitted by modern browsers.
- Audio playback is initiated via a user-triggered play action (`togglePlay`), which respects browser autoplay restrictions for unmuted audio.
- The layout uses `100dvh`/safe-area CSS (`.p-safe`, `viewportFit: "cover"`) to account for mobile browser chrome and notches.

## Deployment

No deployment configuration (e.g. `vercel.json`, Dockerfile, or CI/CD workflow) is present in the codebase. Since this is a standard Next.js application, it can be deployed using any hosting platform or environment that supports running `npm run build` followed by `npm run start`, or an equivalent Next.js-compatible host.

## License

No license file is present in this repository. All rights are reserved by the project owner unless a license is added.
