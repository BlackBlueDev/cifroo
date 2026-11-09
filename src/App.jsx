import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScreenshotsGallery from './components/ScreenshotsGallery';
import Changelog from './components/Changelog';
import Simulator from './components/Simulator';
import WhyCifroo from './components/WhyCifroo';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DownloadSection from './components/DownloadSection';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { GITHUB_RELEASE_APK_URL } from './data/constants';

export default function App() {
  const handleDownloadApk = (e) => {
    if (e) e.preventDefault();
    window.location.href = GITHUB_RELEASE_APK_URL;
  };

  return (
    <div className="min-h-screen bg-darkBg text-white selection:bg-primary/30 selection:text-primary">
      <Navbar onDownload={handleDownloadApk} />
      <main>
        <Hero onDownload={handleDownloadApk} />
        <ScreenshotsGallery />
        <Changelog onDownload={handleDownloadApk} />
        <Simulator />
        <WhyCifroo />
        <Features />
        <HowItWorks />
        <DownloadSection onDownload={handleDownloadApk} />
        <Faq />
      </main>
      <Footer onDownload={handleDownloadApk} />
    </div>
  );
}
