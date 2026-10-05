import React from 'react';
import { Sun, Moon, Share2, Sparkles } from 'lucide-react';
import { userProfile } from '../data/portfolioData';

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onShare: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  onToggleDarkMode,
  onShare,
  activeSection,
}) => {
  const navItems = [
    { id: 'links', label: 'リンク集' },
    { id: 'works', label: '制作物' },
    { id: 'skills', label: 'スキル' },
    { id: 'about', label: '理念 / About' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-black/5 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-slate-900 dark:text-white leading-none">
              {userProfile.name}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              Portfolio & Links
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-800/60 p-1 rounded-full border border-black/5 dark:border-white/5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeSection === item.id
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Share button */}
          <button
            onClick={onShare}
            aria-label="このサイトを共有"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            title="サイトURLを共有 / コピー"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Theme toggle */}
          <button
            onClick={onToggleDarkMode}
            aria-label="テーマ切り替え"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            title={darkMode ? 'ライトモードに切替' : 'ダークモードに切替'}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>
        </div>
      </div>
    </header>
  );
};
