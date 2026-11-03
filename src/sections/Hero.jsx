import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Github, Mail, Award, Sparkles, Code2 } from 'lucide-react';
import HeroScene from '../three/HeroScene';
import Button from '../components/Button';
import { useTheme } from '../context/ThemeContext';

// Dynamic interactive badge that moves between positions on theme toggle,
// dodges/repels when cursor reaches it, and displays lively animations.
function InteractiveHeroBadge({
  darkPos,
  lightPos,
  isDark,
  icon: Icon,
  iconBgClass = '',
  iconColorClass = '',
  badgeSubtitle,
  badgeTitle,
  className = '',
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const pos = isDark ? darkPos : lightPos;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    // Interactive spring repulsion dodging away from cursor
    setOffset({
      x: Math.max(-24, Math.min(24, -dx * 0.35)),
      y: Math.max(-20, Math.min(20, -dy * 0.35)),
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <motion.div
      layout
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        top: pos.top,
        left: pos.left,
        right: pos.right,
        bottom: pos.bottom,
        x: offset.x,
        y: isHovered ? offset.y - 10 : [0, -6, 0],
      }}
      transition={{
        top: { type: 'spring', stiffness: 200, damping: 20 },
        left: { type: 'spring', stiffness: 200, damping: 20 },
        right: { type: 'spring', stiffness: 200, damping: 20 },
        bottom: { type: 'spring', stiffness: 200, damping: 20 },
        x: { type: 'spring', stiffness: 350, damping: 18 },
        y: isHovered
          ? { type: 'spring', stiffness: 400, damping: 16 }
          : { duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
      }}
      whileHover={{
        scale: 1.09,
        boxShadow: isDark
          ? '0 20px 35px -10px rgba(56, 189, 248, 0.4)'
          : '0 20px 35px -10px rgba(2, 132, 199, 0.3)',
      }}
      whileTap={{ scale: 0.94 }}
      drag
      dragSnapToOrigin
      dragElastic={0.25}
      className={`absolute z-30 cursor-grab active:cursor-grabbing select-none overflow-hidden rounded-xl bg-theme-surface border border-theme-border shadow-card backdrop-blur-md transition-colors ${className}`}
    >
      {/* Animated Light Shimmer that sweeps across when cursor reaches the badge */}
      {isHovered && (
        <motion.div
          initial={{ x: '-120%' }}
          animate={{ x: '240%' }}
          transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-theme-accent/25 dark:via-sky-400/35 to-transparent pointer-events-none -skew-x-12 z-20"
        />
      )}

      {/* Ripple ring animation on cursor reach */}
      {isHovered && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0.9 }}
          animate={{ scale: 1.45, opacity: 0 }}
          transition={{ duration: 0.9, repeat: Infinity }}
          className="absolute inset-0 rounded-xl border border-theme-accent/50 pointer-events-none z-10"
        />
      )}

      <div className="relative z-10 flex items-center gap-2.5 px-3.5 py-2">
        {Icon && (
          <motion.div
            animate={
              isHovered
                ? { rotate: [0, -18, 18, -10, 0], scale: 1.2 }
                : { rotate: 0, scale: 1 }
            }
            transition={{ duration: 0.5 }}
            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${iconBgClass}`}
          >
            <Icon className={`w-4 h-4 ${iconColorClass}`} />
          </motion.div>
        )}
        <div>
          {badgeSubtitle && (
            <div className="text-[10px] text-theme-muted font-medium leading-tight">
              {badgeSubtitle}
            </div>
          )}
          <div className="text-xs font-bold leading-tight text-theme-text whitespace-nowrap">
            {badgeTitle}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const titles = [
  "Google Certified Data Analyst",
  "MERN Stack Developer",
  "Flutter App Developer",
  "Machine Learning Engineer"
];

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let speed = isDeleting ? 35 : 75;

    if (!isDeleting && displayText === current) {
      speed = 2000;
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      speed = 350;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setIsDeleting(true);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 lg:py-24"
    >
      {/* 3D Background Canvas */}
      <HeroScene />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: CV Details & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-theme-border bg-theme-surface/80 backdrop-blur-sm text-xs font-medium text-theme-muted mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for opportunities</span>
              <span className="text-theme-border">•</span>
              <span>Lahore, Punjab</span>
            </motion.div>

            {/* Main H1 Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest text-theme-text mb-4"
            >
              Rana M Fahad
            </motion.h1>

            {/* Dynamic Typewriter Line */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="h-10 sm:h-12 flex items-center mb-6"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-theme-accent">
                {displayText}
                <span className="inline-block w-0.5 h-6 sm:h-7 bg-theme-accent ml-1 animate-pulse align-middle" />
              </h2>
            </motion.div>

            {/* Concise Intro from CV */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed mb-8"
            >
              Computer Science student at University of Gujrat with 3+ years of experience engineering full-stack MERN web applications and cross-platform Flutter mobile apps, alongside Google-certified expertise in Data Analytics and Machine Learning.
            </motion.p>

            {/* CTA Buttons: View Projects (Primary) & Download CV (Secondary) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8"
            >
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                magnetic={true}
                className="w-full sm:w-auto"
                id="hero-view-projects-btn"
              >
                View Projects
              </Button>

              <Button
                href="/Rana_M_Fahad_CV.pdf"
                download="Rana_M_Fahad_CV.pdf"
                variant="secondary"
                size="lg"
                icon={Download}
                iconPosition="left"
                className="w-full sm:w-auto"
                id="hero-download-cv-btn"
              >
                Download CV
              </Button>
            </motion.div>

            {/* Social Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <Button
                href="https://linkedin.com/in/Ranafahad-23"
                target="_blank"
                rel="noopener noreferrer"
                variant="icon"
                aria-label="LinkedIn Profile"
                id="hero-linkedin-btn"
              >
                <Linkedin className="w-[18px] h-[18px] stroke-[1.75]" />
              </Button>

              <Button
                href="https://github.com/Ranafahad007"
                target="_blank"
                rel="noopener noreferrer"
                variant="icon"
                aria-label="GitHub Profile"
                id="hero-github-btn"
              >
                <Github className="w-[18px] h-[18px] stroke-[1.75]" />
              </Button>

              <Button
                href="mailto:ranafahad00789@gmail.com"
                variant="icon"
                aria-label="Send an email"
                id="hero-email-btn"
              >
                <Mail className="w-[18px] h-[18px] stroke-[1.75]" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Cutout Portrait with Ambient Tech Aura & Floating Chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0"
          >
            {/* Ambient Background Aura */}
            <div
              className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-theme-accent/20 via-sky-400/10 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse"
              style={{ animationDuration: '6s' }}
            />

            {/* Slow Orbiting Tech Rings */}
            <div className="absolute w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] rounded-full border border-theme-accent/20 border-dashed pointer-events-none -z-10 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] rounded-full border border-theme-border/40 pointer-events-none -z-10" />

            {/* Main Portrait Wrapper (No rectangular box, no border) */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] flex items-end justify-center group">
              <picture className="w-full relative z-10 flex items-end justify-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_20px_40px_rgba(2,132,199,0.22)] transition-transform duration-500 group-hover:scale-[1.02]">
                <source srcSet="/images/fahad_portrait.webp" type="image/webp" />
                <img
                  src="/images/fahad_portrait.png"
                  alt="Rana M Fahad - Data Analyst and Full-Stack Developer"
                  width={700}
                  height={875}
                  loading="eager"
                  className="w-full h-auto object-contain max-h-[460px] select-none"
                />
              </picture>

              {/* Seamless Bottom Gradient Fade into background */}
              <div className="absolute -bottom-1 inset-x-0 h-20 bg-gradient-to-t from-theme-bg via-theme-bg/60 to-transparent z-20 pointer-events-none" />

              {/* Dynamic Interactive Badge 1: Google Certified Data Analytics */}
              <InteractiveHeroBadge
                darkPos={{ top: '10%', left: '-8%' }}
                lightPos={{ top: '22%', left: '-12%' }}
                isDark={isDark}
                icon={Award}
                iconBgClass="bg-theme-accent/15 border-theme-accent/25"
                iconColorClass="text-theme-accent"
                badgeSubtitle="Google Certified"
                badgeTitle="Data Analytics"
              />

              {/* Dynamic Interactive Badge 2: 3+ Years in MERN & Flutter */}
              <InteractiveHeroBadge
                darkPos={{ bottom: '16%', right: '-6%' }}
                lightPos={{ bottom: '6%', right: '-10%' }}
                isDark={isDark}
                icon={Code2}
                iconBgClass="bg-emerald-500/15 border-emerald-500/25"
                iconColorClass="text-emerald-500"
                badgeSubtitle="3+ Years Experience"
                badgeTitle="MERN & Flutter Apps"
              />

              {/* Dynamic Interactive Badge 3: 16+ Certifications */}
              <InteractiveHeroBadge
                darkPos={{ top: '3%', right: '2%' }}
                lightPos={{ top: '12%', right: '-8%' }}
                isDark={isDark}
                icon={Sparkles}
                iconBgClass="bg-theme-accent/15 border-theme-accent/25"
                iconColorClass="text-theme-accent"
                badgeTitle="16+ Certifications"
              />
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
