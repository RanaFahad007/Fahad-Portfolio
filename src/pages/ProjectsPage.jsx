import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, ExternalLink, Github } from 'lucide-react';
import SEO from '../seo/SEO';
import { projects } from '../data/projects';
import Button from '../components/Button';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Data Analytics', 'AI & Machine Learning', 'Web Development'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ranafahad.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://ranafahad.dev/projects"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Featured Projects Portfolio"
        description="Explore the complete collection of Data Analytics, Machine Learning, and Full-Stack MERN applications developed by Rana M Fahad."
        path="/projects"
        jsonLd={breadcrumbsJsonLd}
      />

      <main className="pt-28 pb-24 bg-theme-bg min-h-screen">
        <div className="section-container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-theme-accent mb-2">
              Work Portfolio
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tightest text-theme-text mb-3">
              All Technical Projects
            </h1>
            <p className="text-sm sm:text-base text-theme-muted leading-relaxed">
              Explore predictive analytics models, machine learning pipelines, and responsive web platforms.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 p-3 rounded-card border border-theme-border bg-theme-surface shadow-subtle">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-theme-dim" />
              <input
                type="text"
                placeholder="Search projects by keyword, tech..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-btn bg-theme-bg border border-theme-border text-theme-text placeholder-theme-dim text-xs sm:text-sm focus:border-theme-accent focus:outline-none focus:ring-1 focus:ring-theme-accent transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-accent ${
                    selectedCategory === cat
                      ? 'bg-theme-accent text-white shadow-subtle font-bold'
                      : 'text-theme-muted hover:text-theme-text hover:bg-theme-surface-hover'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 p-8 rounded-card border border-theme-border bg-theme-surface">
              <p className="text-theme-muted text-sm sm:text-base mb-4">No projects found matching your search.</p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-card border border-theme-border bg-theme-surface shadow-subtle hover:border-theme-accent hover:shadow-card transition-all duration-200 overflow-hidden flex flex-col justify-between"
                >
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
                        className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-300"
                      />
                    </picture>
                  </Link>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-[11px] font-semibold text-theme-accent uppercase tracking-wider mb-1">
                      {project.category}
                    </div>

                    <Link to={`/projects/${project.slug}`}>
                      <h2 className="text-lg font-bold text-theme-text mb-2 hover:text-theme-accent transition-colors leading-snug">
                        {project.title}
                      </h2>
                    </Link>

                    <p className="text-xs sm:text-sm text-theme-muted leading-relaxed line-clamp-2 mb-4 flex-grow">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 4).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-[6px] bg-theme-surface-hover border border-theme-border text-theme-muted text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-theme-border flex items-center justify-between gap-2">
                      <Button
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="sm"
                        icon={ExternalLink}
                        aria-label={`Demo for ${project.title}`}
                      >
                        Demo
                      </Button>

                      <Button
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="sm"
                        icon={Github}
                        aria-label={`GitHub for ${project.title}`}
                      >
                        GitHub
                      </Button>

                      <Link
                        to={`/projects/${project.slug}`}
                        className="text-xs font-semibold text-theme-accent hover:underline flex items-center gap-1 ml-auto"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
