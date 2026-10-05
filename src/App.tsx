import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ProfileHero } from './components/ProfileHero';
import { LinkHub } from './components/LinkHub';
import { WorksSection } from './components/WorksSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';
import type { Project } from './types';

export const App: React.FC = () => {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Modal and Toast state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('links');

  // Handle theme changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['links', 'works', 'skills', 'about', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleCopyLink = (url: string, title: string) => {
    navigator.clipboard.writeText(url).then(() => {
      showToast(`「${title}」のURLをコピーしました`);
    }).catch(() => {
      showToast('URLのコピーに失敗しました');
    });
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label}をコピーしました`);
    }).catch(() => {
      showToast('コピーに失敗しました');
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Yuuki - Portfolio & Link Hub',
      text: 'Yuukiのポートフォリオ兼リンク集サイトです。',
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch {
        // User dismissed share dialog
      }
    } else {
      handleCopyText(window.location.href, 'サイトURL');
    }
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdff] dark:bg-[#0f111a] text-slate-800 dark:text-slate-100 transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
      {/* Background radial ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-[110px]" />
      </div>

      {/* Header Navigation */}
      <Header
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
        onShare={handleShare}
        activeSection={activeSection}
      />

      {/* Main Content */}
      <main className="relative">
        <ProfileHero onContactClick={handleContactClick} />
        <LinkHub onCopyLink={handleCopyLink} />
        <WorksSection onSelectProject={(project) => setSelectedProject(project)} />
        <SkillsSection />
        <AboutSection />
        <ContactSection onCopyText={handleCopyText} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
};

export default App;
