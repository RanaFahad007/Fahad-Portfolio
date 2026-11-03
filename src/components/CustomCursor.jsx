import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Subtle outer tracking ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-theme-accent/50"
        animate={{
          x: position.x - (isHovered ? 20 : 14),
          y: position.y - (isHovered ? 20 : 14),
          width: isHovered ? 40 : 28,
          height: isHovered ? 40 : 28,
          backgroundColor: isHovered ? 'var(--accent-subtle)' : 'transparent',
          borderColor: isHovered ? 'var(--accent)' : 'var(--border-color)',
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.15,
        }}
      />
      {/* Central dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-1.5 h-1.5 rounded-full bg-theme-accent"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
          mass: 0.1,
        }}
      />
    </>
  );
}
