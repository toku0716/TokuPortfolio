import React from 'react';
import { Cpu, Check } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Skills</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          スキル＆使用技術
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          プロダクトの特性に応じて最適な技術スタックを選定・実装しています
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-5 rounded-2xl glass-card border border-black/5 dark:border-white/10"
          >
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-black/5 dark:border-white/5 flex items-center justify-between">
              <span>{category.title}</span>
              <span className="text-xs font-normal text-slate-400">
                {category.skills.length} skills
              </span>
            </h3>

            <div className="space-y-2.5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-black/5 dark:border-white/5 hover:border-indigo-500/30 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                  {skill.level && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 shadow-2xs border border-black/5 dark:border-white/5">
                      {skill.level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
