import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScreenshotsGallery from './components/ScreenshotsGallery';
import Changelog from './components/Changelog';
import Simulator from './components/Simulator';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import EstudosBannerSection from './components/EstudosBannerSection';
import EstudosView from './components/EstudosView';
import { GITHUB_RELEASE_APK_URL } from './data/constants';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/estudos' || hash === '#estudos') {
        return 'estudos';
      }
    }
    return 'home';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/estudos' || hash === '#estudos') {
        setCurrentView('estudos');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (currentView === 'estudos' && (path === '/' || hash === '')) {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, [currentView]);

  const handleDownloadApk = (e) => {
    if (e) e.preventDefault();
    window.location.href = GITHUB_RELEASE_APK_URL;
  };

  const handleOpenEstudos = (e) => {
    if (e) e.preventDefault();
    // Abre em nova aba conforme pedido do usuário e mantém suporte a abrir na mesma tela
    window.open('/#estudos', '_blank');
  };

  const handleOpenEstudosInline = (e) => {
    if (e) e.preventDefault();
    setCurrentView('estudos');
    window.history.pushState(null, '', '#estudos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'estudos') {
    return (
      <EstudosView
        onBack={handleBackToHome}
        onDownload={handleDownloadApk}
      />
    );
  }

  return (
    <div className="min-h-screen bg-darkBg text-white selection:bg-primary/30 selection:text-primary">
      <Navbar
        onDownload={handleDownloadApk}
        onOpenEstudos={handleOpenEstudosInline}
      />
      <main>
        <Hero onDownload={handleDownloadApk} />
        <ScreenshotsGallery />
        <Changelog onDownload={handleDownloadApk} />
        <EstudosBannerSection onOpenEstudos={handleOpenEstudosInline} />
        <Simulator />
        <HowItWorks />
      </main>
      <Footer onDownload={handleDownloadApk} />
    </div>
  );
}
