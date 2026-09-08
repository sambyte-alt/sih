import React from 'react';
import { ShieldAlert, Upload, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-slate-900 border-b border-slate-800 px-6 py-4">
      <div className="flex items-center gap-3">
        <ShieldAlert className="w-10 h-10 text-red-500" />
        <div>
          <h1 className="text-xl font-bold tracking-wide">SAT-SA</h1>
          <p className="text-s text-slate-400">Supervisory Analytics Tool for SOC Assessment</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 bg-orange-500 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded-lg cursor-pointer transition">
          <Upload className="w-4 h-4" />
          <span>Import files (.CSV/.JSON)</span>
          <input type="file" className="hidden" accept=".csv,.json" />
        </label>
        <button className="p-2 bg-black-800 hover:bg-black-700 rounded-lg text-slate-300">
          <Bell className="w-5 h-5" text-white-700 />
        </button>
      </div>
    </header>
  );
}