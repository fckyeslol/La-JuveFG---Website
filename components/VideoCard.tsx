"use client";

import { useRef, useState } from "react";

type Props = {
  src: string;
  description: string;
};

export default function VideoCard({ src, description }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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
    <article className="video-card glass rounded-[2rem] p-5">
      <div className="video-frame">
        <video
          ref={videoRef}
          src={src}
          loop
          muted
          playsInline
          preload="metadata"
          className="video-reel"
        />

        <div className="video-controls">
          <button onClick={togglePlay} className="video-btn" type="button">
            {isPlaying ? "❚❚ Pausar" : "▶ Reproducir"}
          </button>

          <button onClick={toggleMute} className="video-btn" type="button">
            {isMuted ? "🔇 Silenciar" : "🔊 Sonido"}
          </button>
        </div>
      </div>

      <p className="video-description">
        {description}
      </p>
    </article>
  );
}