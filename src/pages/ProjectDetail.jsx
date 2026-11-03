import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, ChevronRight } from 'lucide-react';
import SEO from '../seo/SEO';
import { projects } from '../data/projects';
import Button from '../components/Button';

export default function ProjectDetail() {
  const { id } = useParams();

  const projectIndex = projects.findIndex(p => p.slug === id || p.id === id);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <main className="pt-36 pb-24 px-4 text-center min-h-screen bg-theme-bg flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-theme-text mb-3">Project Not Found</h1>
        <p className="text-theme-muted mb-6">The requested project could not be located.</p>
        <Button to="/projects" variant="primary" size="md">
          Return to Projects
        </Button>
      </main>
    );
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareSourceCode",
        "name": project.title,
        "description": project.shortDescription,
        "programmingLanguage": project.tags,
        "author": {
          "@type": "Person",
          "name": "Rana M Fahad"
        },
        "codeRepository": project.githubUrl,
        "image": `https://ranafahad.dev${project.image}`
      },
      {
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `https://ranafahad.dev/projects/${project.slug}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title={project.title}
        description={project.shortDescription}
        path={`/projects/${project.slug}`}
        image={project.image}
        jsonLd={projectJsonLd}
      />

      <main className="pt-28 pb-24 bg-theme-bg min-h-screen">
        <div className="section-container max-w-4xl">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-theme-dim mb-6">
            <Link to="/" className="hover:text-theme-text transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/projects" className="hover:text-theme-text transition-colors">Projects</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-theme-text font-semibold truncate max-w-xs">{project.title}</span>
          </nav>

          {/* Back button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-theme-muted hover:text-theme-accent transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          {/* Header Title */}
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-theme-accent mb-2">
              {project.category}
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tightest text-theme-text mb-2">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-theme-muted font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Image */}
          <div className="rounded-card overflow-hidden border border-theme-border bg-theme-surface shadow-card mb-10 relative aspect-[16/10]">
            <picture>
              <source srcSet={project.image} type="image/webp" />
              <img
                src={project.imageFallback}
                alt={project.alt}
                width={800}
                height={500}
                loading="eager"
                className="w-full h-full object-cover object-top"
              />
            </picture>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-card bg-theme-surface border border-theme-border shadow-subtle">
                  <div className="text-xs text-theme-dim font-medium mb-1">{metric.label}</div>
                  <div className="text-xl sm:text-2xl font-bold text-theme-accent">{metric.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-4 p-4 rounded-card bg-theme-surface border border-theme-border shadow-subtle mb-10">
            <Button
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={ExternalLink}
            >
              Live Demo
            </Button>

            <Button
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              icon={Github}
            >
              GitHub Repository
            </Button>
          </div>

          {/* Narrative */}
          <div className="space-y-8">
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-xl font-bold text-theme-text mb-3">
                Overview & Architecture
              </h2>
              <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            {/* Key Technical Features */}
            {project.features && (
              <section aria-labelledby="features-heading">
                <h2 id="features-heading" className="text-xl font-bold text-theme-text mb-3">
                  Technical Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, i) => (
                    <div key={i} className="p-4 rounded-card bg-theme-surface border border-theme-border flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-theme-muted">{feat}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tech Tags */}
            <section aria-labelledby="tech-heading">
              <h2 id="tech-heading" className="text-xl font-bold text-theme-text mb-3">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-[6px] bg-theme-surface border border-theme-border text-theme-text text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Prev / Next Nav */}
          <div className="mt-14 pt-8 border-t border-theme-border grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.slug}`}
                className="p-4 rounded-card border border-theme-border bg-theme-surface hover:border-theme-muted transition-colors flex flex-col items-start"
              >
                <span className="text-xs text-theme-dim mb-1">← Previous Project</span>
                <span className="text-sm font-bold text-theme-text">{prevProject.title}</span>
              </Link>
            ) : <div />}

            {nextProject ? (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="p-4 rounded-card border border-theme-border bg-theme-surface hover:border-theme-muted transition-colors flex flex-col items-end sm:text-right"
              >
                <span className="text-xs text-theme-dim mb-1">Next Project →</span>
                <span className="text-sm font-bold text-theme-text">{nextProject.title}</span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </main>
    </>
  );
}
