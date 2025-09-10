import React from 'react';
import { KPICard, DangerZone, MyTasks, SkeletonLoader, EmptyState } from '../../components/ui';

export default function DashboardPage() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('/api/dashboard-summary')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  if (!data) {
    return <EmptyState message="No data available" />;
  }

  return (
    <div className="dashboard-grid">
      <div className="kpi-row">
        <KPICard title="YTD Revenue" value={data.ytdRevenue} />
        <KPICard title="At-Risk Events" value={data.atRiskEvents} />
        <KPICard title="New Registrations" value={data.newRegistrations} />
      </div>
      <DangerZone events={data.atRiskEventsList} />
      <MyTasks tasks={data.userTasks} />
    </div>
  );
}