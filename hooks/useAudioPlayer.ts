"use client";
import { useState, useRef, useEffect } from 'react';
import { CHANNELS, Track, Channel } from '@/data/radio';

export const useAudioPlayer = () => {
  const [currentChannel, setCurrentChannel] = useState<Channel>(CHANNELS[0]);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = currentChannel.tracks[trackIndex];

  useEffect(() => {
    const audio = new Audio(currentTrack.src);
    audioRef.current = audio;

    const setAudioData = () => setDuration(audio.duration);
    const setAudioTime = () => setProgress(audio.currentTime);
    const handleEnd = () => nextTrack(true);
    const handleError = () => setError(true);

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnd);
    audio.addEventListener('error', handleError);

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnd);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    const wasPlaying = isPlaying;
    
    audio.src = currentTrack.src;
    audio.load();
    setError(false);
    setProgress(0);

    if (wasPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrack.src, currentChannel.id]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => setError(true));
      setIsPlaying(true);
    }
  };

  const nextTrack = (auto = false) => {
    setTrackIndex((prev: number) => (prev + 1) % currentChannel.tracks.length);
    if (!auto && !isPlaying) setIsPlaying(false); 
  };

  const prevTrack = () => {
    setTrackIndex((prev: number) => (prev - 1 + currentChannel.tracks.length) % currentChannel.tracks.length);
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setProgress(time);
    }
  };

  const changeChannel = (channelId: string) => {
    const channel = CHANNELS.find((c: Channel) => c.id === channelId);
    if (channel) {
      setCurrentChannel(channel);
      setTrackIndex(0);
      setIsPlaying(false);
      if (audioRef.current) audioRef.current.pause();
    }
  };

  return {
    currentTrack,
    currentChannel,
    isPlaying,
    progress,
    duration,
    error,
    togglePlay,
    nextTrack,
    prevTrack,
    seek,
    changeChannel
  };
};