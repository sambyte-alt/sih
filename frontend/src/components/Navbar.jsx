import { NavLink } from 'react-router-dom';

export default function Navbar({ batchId }) {
  const navItems = [
    {
      name: 'Overview',
      path: '/overview',
    },
    {
      name: 'Risk Ranking',
      path: '/ranking',
    },
    {
      name: 'Negative Space',
      path: '/negative-space',
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6">

        {/* Brand */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">
              SA
            </div>

            <div>
              <div className="text-base font-semibold tracking-tight text-slate-900">
                SAT-SA
              </div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                Supervisory Analytics
              </div>
            </div>
          </div>

          <div className="hidden h-7 w-px bg-slate-200 md:block" />

          <div className="hidden text-xs text-slate-500 lg:block">
            SOC Supervisory Assessment
          </div>
        </div>

        {/* Navigation */}
        {batchId && (
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    'px-4 py-2 text-sm font-medium transition-colors',
                    'border-b-2',
                    isActive
                      ? 'border-blue-700 text-blue-700'
                      : 'border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900',
                  ].join(' ')
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}

        {/* Batch Status */}
        <div className="flex items-center gap-3">
          {batchId ? (
            <>
              <div className="hidden text-right sm:block">
                <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  Active Assessment
                </div>
                <div className="font-mono text-xs text-slate-700">
                  {batchId.slice(0, 8)}...
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-slate-700">
                  Active
                </span>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-slate-400" />
              <span className="text-xs font-medium text-slate-500">
                No active assessment
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Mobile navigation */}
      {batchId && (
        <div className="border-t border-slate-100 bg-slate-50 px-4 md:hidden">
          <div className="flex gap-1 overflow-x-auto py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    'whitespace-nowrap rounded-md px-3 py-2 text-xs font-medium',
                    isActive
                      ? 'bg-white text-blue-700 shadow-sm'
                      : 'text-slate-600 hover:bg-white hover:text-slate-900',
                  ].join(' ')
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}