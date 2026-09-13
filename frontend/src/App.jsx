import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';
import UploadPage from './pages/UploadPage';
import OverviewPage from './pages/OverviewPage';
import RankingPage from './pages/RankingPage';
import DrilldownPage from './pages/DrilldownPage';
import NegativeSpacePage from './pages/NegativeSpacePage';

export default function App() {
  const [batchId, setBatchId] = useState(null);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        
        {/* Application Navigation */}
        <Navbar batchId={batchId} />

        {/* Main Application Area */}
        <main className="min-h-[calc(100vh-64px)]">
          <Routes>

            {/* Data Upload */}
            <Route
              path="/"
              element={
                <UploadPage onBatchReady={setBatchId} />
              }
            />

            {/* Supervisory Overview */}
            <Route
              path="/overview"
              element={
                batchId ? (
                  <OverviewPage batchId={batchId} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />

            {/* Entity Priority Ranking */}
            <Route
              path="/ranking"
              element={
                batchId ? (
                  <RankingPage batchId={batchId} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />

            {/* Entity Drilldown */}
            <Route
              path="/entity/:cseId"
              element={
                batchId ? (
                  <DrilldownPage batchId={batchId} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />

            {/* Negative Space Analysis */}
            <Route
              path="/negative-space"
              element={
                batchId ? (
                  <NegativeSpacePage batchId={batchId} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />

            {/* Unknown URL */}
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}
