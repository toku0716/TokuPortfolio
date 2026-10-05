import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { userProfile } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t border-black/5 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white">
            <Sparkles className="w-3 h-3" />
          </div>
          <span>
            © {currentYear} {userProfile.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            Built with React & Tailwind CSS
          </span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold cursor-pointer"
          >
            <span>ページ先頭へ</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
