import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-transparent pointer-events-none"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        className="h-full bg-theme-accent transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
