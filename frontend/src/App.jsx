import React, { useState } from 'react';
import Header from './components/Header';
import KpiGrid from './components/KpiGridcard';
import GapTable from './components/Executiontable';
import ExplainabilityPanel from './components/ExplainabilityPanel';
import { kpiMetrics, initialGaps, shapData, telemetryData } from './data/mockData';

export default function App() {
  const [gaps] = useState(initialGaps);
  const [selectedGap, setSelectedGap] = useState(initialGaps[0]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <KpiGrid metrics={kpiMetrics} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GapTable gaps={gaps} selectedGap={selectedGap} onSelectGap={setSelectedGap} />
          <ExplainabilityPanel selectedGap={selectedGap} shapData={shapData} telemetryData={telemetryData} />
        </div>
      </main>
    </div>
  );
}