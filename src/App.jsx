import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import PageLoader from './components/PageLoader';

// Lazy-loaded routes for optimal Core Web Vitals & code splitting
const Home = lazy(() => import('./pages/Home'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteFallback() {
  return (
    <div className="min-h-screen bg-theme-bg flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-theme-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-theme-bg text-theme-text font-montserrat">
      {!loadingComplete && (
        <PageLoader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Global Interactive Elements */}
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />

      {/* Main Dynamic Route Views */}
      <div className="flex-grow">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}
