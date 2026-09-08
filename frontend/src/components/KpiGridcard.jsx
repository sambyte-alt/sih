import React from 'react';

export default function KpiGrid({ metrics }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {metrics.map((item, idx) => (
        <div key={idx} className="bg-green-900 border border-slate-800 p-4 rounded-xl">
          <p className="text-xs text-beige-900 mb-1">{item.label}</p>
          <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
        </div>
      ))}
    </div>
  );
}