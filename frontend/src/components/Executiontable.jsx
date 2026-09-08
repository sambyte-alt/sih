import React from 'react';

export default function GapTable({ gaps, selectedGap, onSelectGap }) {
  return (
    <div className="bg-emerald-900 border border-slate-800 rounded-xl p-4">
      <h2 className="flex justify-center text-base font-semibold mb-4 text-slate-200 " >Execution Gaps Detected</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase">
            <tr>
              <th className="p-3 text-white text-s">Gap Type</th>
              <th className="p-3 text-white text-s">Detected</th>
              <th className="p-3 text-white ">Risk Score</th>
              <th className="p-3 text-white">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {gaps.map((gap) => (
              <tr 
                key={gap.id} 
                className={`hover:bg-slate-800/40 transition ${selectedGap?.id === gap.id ? 'bg-slate-800/80' : ''}`}
              >
                <td className="p-3 font-medium text-slate-100">{gap.type}</td>
                <td className="p-3 text-slate-400">{gap.time}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    gap.score >= 80 ? 'bg-red-700/20 text-red-500' : 'bg-orange-500/20 text-orange-400'
                  }`}>
                    {gap.score}/100
                  </span>
                </td>
                <td className="p-3">
                  <button 
                    onClick={() => onSelectGap(gap)}
                    className="text-xs bg-teal-600/20 hover:bg-green-300/40 text-black-400 px-3 py-1.5 rounded transition"
                  >
                    View Explainability
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}