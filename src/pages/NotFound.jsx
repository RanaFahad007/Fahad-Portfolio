import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../seo/SEO';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The requested page could not be found."
        path="/404"
        noindex={true}
      />
      <main className="min-h-screen bg-theme-bg flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-md w-full text-center">
          <div className="inline-block px-6 py-3 rounded-card border border-theme-border bg-theme-surface text-theme-accent font-extrabold text-5xl mb-6 shadow-subtle">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-theme-text mb-2">
            Page Not Found
          </h1>
          <p className="text-sm text-theme-muted mb-8 leading-relaxed">
            The page you requested does not exist or has been relocated.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              to="/"
              variant="primary"
              size="md"
              icon={Home}
              iconPosition="left"
            >
              Return Home
            </Button>
            <Button
              to="/projects"
              variant="secondary"
              size="md"
              icon={ArrowLeft}
              iconPosition="left"
            >
              View Projects
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
