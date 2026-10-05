import React from 'react';
import { ShieldCheck, Zap, Sparkles, Terminal, Heart } from 'lucide-react';
import { developmentPrinciples, userProfile } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-pink-500" />;
      default:
        return <Heart className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section id="about" className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
          <Terminal className="w-3.5 h-3.5" />
          <span>Philosophy & Vision</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          ものづくりのこだわり・理念
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          「使って心地よく、安心できる」ソフトウェア体験を届けるための指針です
        </p>
      </div>

      {/* Principles Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {developmentPrinciples.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl glass-card flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-semibold text-slate-400">
              <span>Principle 0{index + 1}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Bio Summary Quote Banner */}
      <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 dark:border-indigo-500/30">
        <div className="max-w-3xl">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            メッセージ / About {userProfile.name}
          </h4>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            ソフトウェアは、使う人の日常を少しでも軽く、楽しく、豊かにするためのツールであると考えています。
            フロントエンドのインタラクションからmacOSネイティブアプリの軽快さ、ローカルAIの可能性まで、技術の引き出しを広げながら日々新しいプロダクトづくりに挑戦しています。
          </p>
        </div>
      </div>
    </section>
  );
};
