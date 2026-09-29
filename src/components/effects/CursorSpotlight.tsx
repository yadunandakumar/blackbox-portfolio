'use client';

import { useEffect, useState } from 'react';

export default function CursorSpotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[60] w-[400px] h-[400px] rounded-full opacity-30"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        background:
          'radial-gradient(circle, rgba(0,240,255,0.12) 0%, transparent 70%)',
        transition: 'opacity 0.2s',
      }}
    />
  );
}
