import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', href: '#home', route: '/' },
    { name: 'About', href: '#about', route: '/#about' },
    { name: 'Skills', href: '#skills', route: '/#skills' },
    { name: 'Projects', href: '#projects', route: '/projects' },
    { name: 'Certifications', href: '#certifications', route: '/certifications' },
    { name: 'Education', href: '#education', route: '/#education' },
    { name: 'Contact', href: '#contact', route: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      if (isHome) {
        const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'education', 'contact'];
        const scrollPosition = window.scrollY + 180;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Scroll to a homepage section, retrying briefly so the section exists
  // even when we just navigated back to '/' from another page. If the
  // section never appears, fall back to the very top instead of doing nothing.
  const scrollToSection = (targetId) => {
    const tryScroll = (attemptsLeft) => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
      } else if (attemptsLeft > 0) {
        setTimeout(() => tryScroll(attemptsLeft - 1), 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    tryScroll(20);
  };

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);

    if (link.href.startsWith('#')) {
      const targetId = link.href.substring(1);
      if (isHome) {
        scrollToSection(targetId);
      } else {
        navigate('/');
        scrollToSection(targetId);
      }
    } else {
      navigate(link.route);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? 'bg-theme-bg/95 backdrop-blur-md border-b border-theme-border py-3.5 shadow-card'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo / Name Left */}
          <Link
            to="/"
            onClick={() => {
              if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-accent rounded-btn p-1"
            aria-label="Rana M Fahad Portfolio Homepage"
          >
            <div className="w-9 h-9 rounded-btn bg-gradient-to-br from-theme-accent to-theme-accent-hover text-white flex items-center justify-center font-extrabold text-sm tracking-wide shadow-card group-hover:scale-105 transition-transform duration-200">
              RF
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-theme-text group-hover:text-theme-accent transition-colors">
                Rana M Fahad
              </span>
              <span className="text-[11px] text-theme-muted font-medium -mt-0.5">
                Data Analyst & Developer
              </span>
            </div>
          </Link>

          {/* Links Centered */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = isHome
                ? activeSection === link.href.replace('#', '')
                : location.pathname === link.route;

              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`relative px-3.5 py-1.5 text-[13px] font-semibold transition-all duration-150 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-accent ${
                    isActive
                      ? 'text-theme-accent font-bold bg-theme-accent-subtle'
                      : 'text-theme-muted hover:text-theme-text hover:bg-theme-surface-hover'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-theme-accent rounded-full transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button
              href="/Rana_M_Fahad_CV.pdf"
              download="Rana_M_Fahad_CV.pdf"
              variant="secondary"
              size="sm"
              icon={Download}
              iconPosition="left"
              className="hidden sm:inline-flex"
              id="download-cv-nav-btn"
            >
              Download CV
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-btn border border-theme-border bg-theme-surface text-theme-muted hover:text-theme-text hover:bg-theme-surface-hover transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-accent"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 stroke-[1.75]" /> : <Menu className="w-5 h-5 stroke-[1.75]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Clean Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-theme-surface/98 backdrop-blur-md border-b border-theme-border px-6 py-6 shadow-card transition-all">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = isHome
                ? activeSection === link.href.replace('#', '')
                : location.pathname === link.route;

              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`flex items-center justify-between px-4 py-3 rounded-btn text-sm font-semibold text-left transition-colors ${
                    isActive
                      ? 'bg-theme-accent-subtle text-theme-accent font-bold'
                      : 'text-theme-muted hover:bg-theme-surface-hover hover:text-theme-text'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-theme-border">
              <Button
                href="/Rana_M_Fahad_CV.pdf"
                download="Rana_M_Fahad_CV.pdf"
                variant="primary"
                size="md"
                icon={Download}
                iconPosition="left"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download CV
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
