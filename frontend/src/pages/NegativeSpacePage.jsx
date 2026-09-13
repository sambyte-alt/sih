import { useState, useEffect, useMemo } from 'react';
import { getNegativeSpace } from '../api';
import RiskBadge from '../components/RiskBadge';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorBanner from '../components/ErrorBanner';
import { EyeOff } from 'lucide-react';

export default function NegativeSpacePage({ batchId }) {
  const [findings, setFindings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await getNegativeSpace(batchId);
        setFindings(res.data.findings || []);
      } catch (err) {
        setError(err.message || 'Failed to fetch negative space findings');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [batchId]);

  const grouped = useMemo(() => {
    const groups = {
      MISSING_TELEMETRY: [],
      MISSING_ALERT_CATEGORY: [],
      MISSING_ESCALATION: []
    };
    
    findings.forEach(f => {
      if (groups[f.finding_type]) {
        groups[f.finding_type].push(f);
      } else {
        groups[f.finding_type] = [f];
      }
    });
    
    return groups;
  }, [findings]);

  if (loading) return <LoadingSpinner message="Scanning for blind spots..." />;

  const FindingCard = ({ finding }) => (
    <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm transition-colors dark:bg-slate-800 dark:border-slate-700">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-blue-600 font-bold dark:text-blue-400">{finding.cse_id}</span>
          {finding.asset_id && (
            <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-mono border border-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600">
              Asset: {finding.asset_id}
            </span>
          )}
        </div>
        <RiskBadge level={finding.severity || 'MEDIUM'} />
      </div>
      
      <p className="text-slate-700 mb-4 dark:text-slate-200">{finding.description}</p>
      
      <div className="grid grid-cols-2 gap-4 bg-slate-50 p-3 rounded-lg border border-slate-200 text-sm font-mono mb-3 dark:bg-slate-900/50 dark:border-slate-700">
        <div>
          <span className="text-slate-400 text-xs block mb-1 dark:text-slate-500">Expected</span>
          <span className="text-green-600 dark:text-green-400">{finding.expected}</span>
        </div>
        <div>
          <span className="text-slate-400 text-xs block mb-1 dark:text-slate-500">Observed</span>
          <span className="text-red-600 dark:text-red-400">{finding.observed}</span>
        </div>
      </div>
      
      {finding.peer_context && (
        <p className="text-xs text-slate-500 bg-slate-50 p-2 rounded italic border border-slate-100 dark:text-slate-400 dark:bg-slate-800/50 dark:border-slate-700/30">
          Peer context: {finding.peer_context}
        </p>
      )}
    </div>
  );

  return (
    <div className="p-6 max-w-7xl mx-auto pb-12">
      <div className="flex items-center gap-4 mb-2">
        <EyeOff className="w-8 h-8 text-slate-500 dark:text-slate-400" />
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Negative Space Findings</h1>
        <span className="bg-purple-100 text-purple-700 border border-purple-300 px-3 py-1 rounded-full text-sm font-bold dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800">
          {findings.length} Total
        </span>
      </div>
      <p className="text-slate-500 mb-8 dark:text-slate-400">
        Detected absences in CSE security data — findings represent monitoring blind spots, not confirmed incidents.
      </p>

      {error && <ErrorBanner message={error} onDismiss={() => setError(null)} />}

      <div className="space-y-10">
        
        {/* Missing Telemetry */}
        <section>
          <div className="border-b-2 border-purple-300 pb-2 mb-4 dark:border-purple-800">
            <h2 className="text-xl font-bold text-purple-700 dark:text-purple-300">Missing Telemetry</h2>
          </div>
          {grouped.MISSING_TELEMETRY?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {grouped.MISSING_TELEMETRY.map((f, i) => <FindingCard key={i} finding={f} />)}
            </div>
          ) : (
            <p className="text-slate-400 italic dark:text-slate-500">No findings of this type.</p>
          )}
        </section>

        {/* Missing Alert Categories */}
        <section>
          <div className="border-b-2 border-red-300 pb-2 mb-4 dark:border-red-800">
            <h2 className="text-xl font-bold text-red-600 dark:text-red-400">Missing Alert Categories</h2>
          </div>
          {grouped.MISSING_ALERT_CATEGORY?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {grouped.MISSING_ALERT_CATEGORY.map((f, i) => <FindingCard key={i} finding={f} />)}
            </div>
          ) : (
            <p className="text-slate-400 italic dark:text-slate-500">No findings of this type.</p>
          )}
        </section>

        {/* Missing Escalation */}
        <section>
          <div className="border-b-2 border-orange-300 pb-2 mb-4 dark:border-orange-800">
            <h2 className="text-xl font-bold text-orange-600 dark:text-orange-400">Missing Escalation Records</h2>
          </div>
          {grouped.MISSING_ESCALATION?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {grouped.MISSING_ESCALATION.map((f, i) => <FindingCard key={i} finding={f} />)}
            </div>
          ) : (
            <p className="text-slate-400 italic dark:text-slate-500">No findings of this type.</p>
          )}
        </section>

      </div>
    </div>
  );
}
