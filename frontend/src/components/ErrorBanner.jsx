import { X } from 'lucide-react';

export default function ErrorBanner({ message, onDismiss }) {
  if (!message) return null;
  
  return (
    <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg flex items-center justify-between mb-6 dark:bg-red-900/40 dark:border-red-800 dark:text-red-200">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-red-600 dark:text-red-400">Error:</span>
        <span>{message}</span>
      </div>
      {onDismiss && (
        <button onClick={onDismiss} className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300" aria-label="Dismiss error">
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
