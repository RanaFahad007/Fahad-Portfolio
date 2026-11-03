import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 250);
          return 100;
        }
        return prev + 10;
      });
    }, 28);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-theme-bg text-theme-text"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' } }}
      >
        <div className="flex flex-col items-center max-w-xs px-6 text-center">
          <div className="w-12 h-12 mb-4 rounded-btn bg-theme-accent text-white font-bold text-base flex items-center justify-center shadow-subtle">
            RF
          </div>

          <h1 className="text-base font-bold tracking-tight text-theme-text mb-1">
            Rana M Fahad
          </h1>
          <p className="text-xs text-theme-muted mb-6">
            Data Analyst | Developer
          </p>

          {/* Clean Progress bar */}
          <div className="w-48 h-1 bg-theme-border rounded-full overflow-hidden">
            <div
              className="h-full bg-theme-accent rounded-full transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 text-xs font-mono text-theme-dim">
            {progress}%
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
