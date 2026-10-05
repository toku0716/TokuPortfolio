import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900/90 dark:bg-white/95 text-white dark:text-slate-900 shadow-2xl backdrop-blur-md border border-white/10 dark:border-slate-800/10 transition-all animate-bounce">
      {type === 'success' ? (
        <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 flex-shrink-0" />
      ) : (
        <Info className="w-4 h-4 text-sky-400 dark:text-sky-600 flex-shrink-0" />
      )}
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-xs text-gray-400 hover:text-white dark:hover:text-black cursor-pointer"
      >
        ✕
      </button>
    </div>
  );
};
