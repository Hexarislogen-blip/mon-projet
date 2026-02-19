'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 1200;

    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));

      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        setFadeOut(true);
        setTimeout(() => setVisible(false), 500);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-500 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Logo / Initials */}
      <div className="mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
          <span className="text-sm font-bold tracking-tight text-white">HS</span>
        </div>
        <span className="text-sm font-medium text-[#555] tracking-widest uppercase">Hector Sedo</span>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-white/60 rounded-full transition-[width] duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <div className="mt-3 text-[11px] font-mono text-[#444] tabular-nums">
        {progress}%
      </div>
    </div>
  );
}
