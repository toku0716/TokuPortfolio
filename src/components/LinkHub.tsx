import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Compass } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';
import type { SocialLink } from '../types';

interface LinkHubProps {
  onCopyLink: (url: string, title: string) => void;
}

export const LinkHub: React.FC<LinkHubProps> = ({ onCopyLink }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'すべて' },
    { id: 'work', label: '制作・アプリ' },
    { id: 'social', label: 'SNS' },
    { id: 'code', label: 'コード' },
    { id: 'blog', label: 'ブログ' },
  ];

  const filteredLinks = selectedCategory === 'all'
    ? socialLinks
    : socialLinks.filter((l) => l.category === selectedCategory);

  const handleCopy = (e: React.MouseEvent, link: SocialLink) => {
    e.preventDefault();
    e.stopPropagation();
    onCopyLink(link.url, link.title);
    setCopiedId(link.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="links" className="py-10 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>Link in Bio & Hub</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            リンク集・公式リンク
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            各種SNSアカウント、Webアプリ、技術記事へのダイレクトアクセス
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                  : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {filteredLinks.map((link) => {
          const isHighlighted = link.highlight;

          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 overflow-hidden cursor-pointer ${
                isHighlighted
                  ? 'bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 border-pink-500/30 dark:border-pink-500/40 hover:border-pink-500 shadow-md shadow-pink-500/5'
                  : 'glass-card border-black/5 dark:border-white/10 hover:border-indigo-500/40'
              }`}
            >
              {/* Highlight ribbon indicator if specified */}
              {isHighlighted && (
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                  <div className="absolute top-2 right-[-24px] rotate-45 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[9px] font-bold py-0.5 px-8 shadow-sm">
                    PICKUP
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3.5 min-w-0 pr-2">
                {/* Icon box */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center text-white flex-shrink-0 bg-gradient-to-br ${
                    link.color || 'from-indigo-500 to-purple-600'
                  } shadow-sm group-hover:scale-105 transition-transform duration-200`}
                >
                  <DynamicIcon name={link.icon} className="w-5 h-5" />
                </div>

                {/* Text details */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {link.title}
                    </span>
                    {link.badge && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-black/5 dark:border-white/5 flex-shrink-0">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  {link.description && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {link.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  type="button"
                  onClick={(e) => handleCopy(e, link)}
                  title="リンクをコピー"
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {copiedId === link.id ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <div className="p-2 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
