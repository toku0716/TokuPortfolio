import React from 'react';
import { MapPin, Sparkles, Mail, ArrowDown, ExternalLink } from 'lucide-react';
import { userProfile } from '../data/portfolioData';

interface ProfileHeroProps {
  onContactClick: () => void;
}

export const ProfileHero: React.FC<ProfileHeroProps> = ({ onContactClick }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-10 pb-8 sm:pt-16 sm:pb-12 text-center">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-indigo-500/15 via-purple-500/15 to-pink-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-4">
        {/* Avatar with status badge */}
        <div className="relative inline-block mb-4">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-xl shadow-purple-500/10">
            <img
              src={userProfile.avatarUrl}
              alt={userProfile.name}
              className="w-full h-full object-cover rounded-[22px] bg-slate-100 dark:bg-slate-800"
            />
          </div>

          {/* Status badge pill */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 border border-black/10 dark:border-white/10 shadow-sm text-[11px] font-semibold text-slate-700 dark:text-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{userProfile.status}</span>
          </div>
        </div>

        {/* Name and title */}
        <div className="mt-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {userProfile.name}{' '}
            <span className="text-lg font-normal text-slate-500 dark:text-slate-400">
              ({userProfile.japaneseName})
            </span>
          </h1>
          <p className="mt-1.5 text-base sm:text-lg font-medium text-indigo-600 dark:text-indigo-400">
            {userProfile.role}
          </p>
        </div>

        {/* Location & Tags */}
        <div className="mt-3 flex items-center justify-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            {userProfile.location}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Privacy & Native First
          </span>
        </div>

        {/* Tagline & Bio */}
        <p className="mt-5 text-base sm:text-lg text-slate-800 dark:text-slate-200 font-semibold leading-relaxed max-w-xl mx-auto">
          {userProfile.tagline}
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {userProfile.bio}
        </p>

        {/* Hero Quick CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => scrollTo('links')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-sm shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 transition-all cursor-pointer"
          >
            <span>リンク集を見る</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollTo('works')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-sm border border-black/5 dark:border-white/10 transition-colors cursor-pointer"
          >
            <span>制作物一覧 ({'8+'})</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 font-medium text-sm transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>連絡する</span>
          </button>
        </div>
      </div>
    </section>
  );
};
