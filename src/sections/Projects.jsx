import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import Button from '../components/Button';

// Subtle 3D tilt card (max 6 degrees)
const SubtleTiltCard = React.forwardRef(function SubtleTiltCard({ children, className = '' }, ref) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -5;
    const rotY = ((x - centerX) / centerX) * 5;

    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className={className}
    >
      {children}
    </div>
  );
});

export default function Projects({ limit = null }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Data & ML', 'Web', 'Mobile'];

  const displayedProjects = projects
    .filter((p) => {
      if (activeFilter === 'All') return true;
      if (activeFilter === 'Data & ML') return p.category === 'Data Analytics' || p.category === 'AI & Machine Learning';
      if (activeFilter === 'Web') return p.category === 'Web Development';
      if (activeFilter === 'Mobile') return p.tags.includes('Flutter');
      return true;
    })
    .slice(0, limit || projects.length);

  return (
    <section
      id="projects"
      className="py-20 lg:py-28 bg-theme-bg border-t border-theme-border"
      aria-label="Projects Portfolio"
    >
      <div className="section-container">
        {/* Left-Aligned Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-theme-accent mb-2">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tightest text-theme-text mb-3">
              Selected Projects & Case Studies
            </h2>
            <p className="text-sm sm:text-base text-theme-muted leading-relaxed">
              Real-world systems spanning predictive machine learning models, analytics dashboards, and responsive web platforms.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-btn border border-theme-border bg-theme-surface self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-accent ${
                  activeFilter === cat
                    ? 'bg-theme-accent text-white shadow-subtle font-bold'
                    : 'text-theme-muted hover:text-theme-text hover:bg-theme-surface-hover'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Responsive Grid (2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <SubtleTiltCard key={project.id} className="h-full">
                <article className="h-full flex flex-col rounded-card border border-theme-border bg-theme-surface shadow-subtle hover:border-theme-accent hover:shadow-card transition-all duration-200 overflow-hidden group">
                  {/* 16:9 Aspect Ratio Image with Descriptive Alt Text */}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="relative aspect-video overflow-hidden bg-theme-surface-hover block"
                  >
                    <picture>
                      <source srcSet={project.image} type="image/webp" />
                      <img
                        src={project.imageFallback}
                        alt={project.alt}
                        width={800}
                        height={500}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </picture>
                  </Link>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-[11px] font-semibold text-theme-accent uppercase tracking-wider mb-1">
                      {project.category}
                    </div>

                    <Link to={`/projects/${project.slug}`}>
                      <h3 className="text-lg font-bold text-theme-text mb-2 hover:text-theme-accent transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </Link>

                    {/* 2-line clamped description */}
                    <p className="text-xs sm:text-sm text-theme-muted leading-relaxed line-clamp-2 mb-4 flex-grow">
                      {project.shortDescription}
                    </p>

                    {/* Tech Tag Chips (small, neutral, 12px, 6px radius) */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-[6px] bg-theme-surface-hover border border-theme-border text-theme-muted text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 text-xs text-theme-dim font-mono">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Aligned Bottom Action Buttons */}
                    <div className="pt-4 border-t border-theme-border flex items-center justify-between gap-3">
                      <Button
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="sm"
                        icon={ExternalLink}
                        aria-label={`Live demo for ${project.title}`}
                      >
                        Live Demo
                      </Button>

                      <Button
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="sm"
                        icon={Github}
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        GitHub
                      </Button>

                      <Link
                        to={`/projects/${project.slug}`}
                        className="text-xs font-semibold text-theme-accent hover:underline flex items-center gap-1 ml-auto"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </SubtleTiltCard>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button if limited */}
        {limit && (
          <div className="mt-12 text-center">
            <Button
              to="/projects"
              variant="secondary"
              size="md"
              icon={ArrowRight}
            >
              View All 6 Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
