"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play()
      .then(() => {
        setIsPlaying(true);
        setIsMuted(true);
      })
      .catch(() => {
        setIsPlaying(false);
      });
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="hero-image-card relative overflow-hidden">
      <video
        ref={videoRef}
        src="/images/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      <div className="absolute inset-0 bg-[#0b1f3a]/20 pointer-events-none z-20" />

      <div className="hero-floating glass-strong float-a z-30 pointer-events-none">
        <p className="text-sm text-slate-500">Impacto comunitario</p>
        <h3 className="text-xl font-bold mt-1">
          Liderazgo + acción + territorio
        </h3>
      </div>

      <div className="hero-floating glass-strong float-b z-30 pointer-events-none">
        <p className="text-sm text-slate-500">Red juvenil</p>
        <h3 className="text-xl font-bold mt-1">
          Más conexión, más oportunidades
        </h3>
      </div>

      <div className="hero-controls z-40">
        <button type="button" onClick={togglePlay} className="hero-control-btn">
          {isPlaying ? "❚❚ Pausar" : "▶ Reproducir"}
        </button>

        <button type="button" onClick={toggleMute} className="hero-control-btn">
          {isMuted ? "🔇 Activar sonido" : "🔊 Silenciar"}
        </button>
      </div>
    </div>
  );
}