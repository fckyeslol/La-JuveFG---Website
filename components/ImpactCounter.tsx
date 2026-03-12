"use client";

import { useEffect, useRef, useState } from "react";

type ImpactCounterProps = {
  end: number;
  label: string;
  suffix?: string;
};

export default function ImpactCounter({
  end,
  label,
  suffix = "",
}: ImpactCounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 1600;
    const stepTime = Math.max(20, Math.floor(duration / end));

    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref} className="metric-card glass">
      <div className="metric-value">
        {count.toLocaleString("es-CO")}
        {suffix}
      </div>
      <div className="metric-label">{label}</div>
    </div>
  );
}