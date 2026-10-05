import React, { useState } from 'react';
import { Search, ExternalLink, FolderGit2, Info } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

interface WorksSectionProps {
  onSelectProject: (project: Project) => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'すべて' },
    { id: 'web', label: 'Web & アプリ' },
    { id: 'ai', label: 'AI・対話' },
    { id: 'macos', label: 'macOS Native' },
    { id: 'tool', label: '開発ツール' },
    { id: 'system', label: '低レイヤー / C' },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="works" className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Works & Projects</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            制作実績・プロダクト一覧
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            プライバシー保護・ネイティブパフォーマンス・直感的なUXを追求した開発実績
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="技術・キーワード検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-black/5 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Bento Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-8">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            該当するプロジェクトが見つかりませんでした。別のキーワードをお試しください。
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group relative flex flex-col justify-between p-5 rounded-2xl glass-card cursor-pointer ${
                  isFeatured ? 'ring-1 ring-indigo-500/20 dark:ring-indigo-400/20' : ''
                }`}
              >
                <div>
                  {/* Card Top: Icon & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: project.accentColor }}
                    >
                      <DynamicIcon name={project.iconName} className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      {project.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60">
                          {project.badge}
                        </span>
                      )}
                      <span className="text-[11px] font-semibold text-slate-400">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400 line-clamp-1">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Card Bottom: Tags & Actions */}
                <div className="mt-5 pt-3.5 border-t border-black/5 dark:border-white/5">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] text-slate-400 px-1 py-0.5">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action row */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:underline">
                      <Info className="w-3.5 h-3.5" />
                      詳細を見る
                    </span>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer"
                          title="GitHubで見る"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition cursor-pointer"
                          title="デモ / Webを開く"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
