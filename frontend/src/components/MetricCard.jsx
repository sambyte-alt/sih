export default function MetricCard({ title, value, subtitle, icon: Icon, color = 'blue' }) {
  const colors = {
    blue: 'text-blue-600 dark:text-blue-400',
    red: 'text-red-600 dark:text-red-400',
    orange: 'text-orange-500 dark:text-orange-400',
    green: 'text-green-600 dark:text-green-400',
    yellow: 'text-yellow-600 dark:text-yellow-400',
    purple: 'text-purple-600 dark:text-purple-400',
    slate: 'text-slate-500 dark:text-slate-400'
  };
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm transition-colors dark:bg-slate-800 dark:border-slate-700">
      <div className="flex items-center justify-between mb-2">
        <p className="text-slate-500 text-sm dark:text-slate-400">{title}</p>
        {Icon && <Icon className={`w-5 h-5 ${colors[color]}`} />}
      </div>
      <p className={`text-3xl font-bold ${colors[color]}`}>{value}</p>
      {subtitle && <p className="text-slate-400 text-xs mt-1 dark:text-slate-500">{subtitle}</p>}
    </div>
  );
}
