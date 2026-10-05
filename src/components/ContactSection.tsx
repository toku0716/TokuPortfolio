import React, { useState } from 'react';
import { Copy, Check, Send } from 'lucide-react';
import { userProfile } from '../data/portfolioData';

interface ContactSectionProps {
  onCopyText: (text: string, label: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    onCopyText(userProfile.email, 'メールアドレス');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="p-8 sm:p-10 rounded-3xl glass-card border border-indigo-500/20 text-center relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-4 border border-emerald-200 dark:border-emerald-800/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>新規開発・ご相談受付中</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            お問い合わせ・ご連絡
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            アプリの共同開発、技術的なご相談、フィードバックなどお気軽にご連絡ください。
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${userProfile.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-md shadow-indigo-500/25 transition cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>メールソフトで送信</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-black/5 dark:border-white/10 transition cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>コピー完了！</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>アドレスをコピー</span>
                </>
              )}
            </button>
          </div>

          <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
            {userProfile.email}
          </p>
        </div>
      </div>
    </section>
  );
};
