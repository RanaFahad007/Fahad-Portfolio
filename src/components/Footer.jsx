import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import Button from './Button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-theme-bg border-t border-theme-border pt-12 pb-10 text-theme-muted">
      <div className="section-container">
        {/* Simple Three-Part Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-theme-border">
          {/* Part 1: Name + Short Line */}
          <div className="flex flex-col items-start gap-1">
            <span className="font-bold text-base text-theme-text">Rana M Fahad</span>
            <span className="text-xs text-theme-dim">
              Data Analyst | MERN Stack | Flutter Developer
            </span>
          </div>

          {/* Part 2: Quick Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-start md:justify-center gap-5 text-xs font-semibold">
            <Link to="/" className="text-theme-muted hover:text-theme-text transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-theme-muted hover:text-theme-text transition-colors">
              Projects
            </Link>
            <Link to="/certifications" className="text-theme-muted hover:text-theme-text transition-colors">
              Certifications
            </Link>
            <Link to="/contact" className="text-theme-muted hover:text-theme-text transition-colors">
              Contact
            </Link>
          </nav>

          {/* Part 3: Social Icons */}
          <div className="flex items-center justify-start md:justify-end gap-2.5">
            <Button
              href="https://linkedin.com/in/Ranafahad-23"
              target="_blank"
              rel="noopener noreferrer"
              variant="icon"
              aria-label="Visit Rana M Fahad on LinkedIn"
            >
              <Linkedin className="w-4 h-4 stroke-[1.75]" />
            </Button>

            <Button
              href="https://github.com/Ranafahad007"
              target="_blank"
              rel="noopener noreferrer"
              variant="icon"
              aria-label="Visit Rana M Fahad on GitHub"
            >
              <Github className="w-4 h-4 stroke-[1.75]" />
            </Button>

            <Button
              href="mailto:ranafahad00789@gmail.com"
              variant="icon"
              aria-label="Send Email to Rana M Fahad"
            >
              <Mail className="w-4 h-4 stroke-[1.75]" />
            </Button>

            <button
              onClick={scrollToTop}
              className="w-11 h-11 p-0 flex items-center justify-center border border-theme-border rounded-btn text-theme-muted hover:text-theme-text hover:bg-theme-surface-hover transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 stroke-[1.75]" />
            </button>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="pt-6 text-center text-xs text-theme-dim">
          © {new Date().getFullYear()} Rana M Fahad. All rights reserved. Built with React 18 & Three.js.
        </div>
      </div>
    </footer>
  );
}
