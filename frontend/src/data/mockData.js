export const kpiMetrics = [
  { label: "Total SOC Alerts", value: "1,450", color: "text-blue-400" },
  { label: "High Risk Gaps", value: "12", color: "text-red-500" },
  { label: "Average Risk Score", value: "78/100", color: "text-orange-400" },
  { label: "Peer Benchmark Index", value: "94.2%", color: "text-emerald-400" },
];

export const initialGaps = [
  { id: "GAP-101", type: "Missed Escalation", time: "5m ago", score: 88, severity: "Critical" },
  { id: "GAP-102", type: "Closure Without Investigation", time: "12m ago", score: 78, severity: "High" },
  { id: "GAP-103", type: "Incomplete Investigation Logs", time: "45m ago", score: 65, severity: "Medium" },
  { id: "GAP-104", type: "Absent Alert Category", time: "2h ago", score: 52, severity: "Low" },
];

export const shapData = [
  { feature: "Alert Duration < 10s", importance: 4.2 },
  { feature: "No Supervisor Notes", importance: 3.5 },
  { feature: "High-Severity Threat", importance: 2.8 },
  { feature: "Off-Hours Execution", importance: 1.9 },
];

export const telemetryData = [
  { category: "Logs", count: 450 },
  { category: "Network", count: 300 },
  { category: "Endpoint", count: 220 },
  { category: "Auth", count: 180 },
];