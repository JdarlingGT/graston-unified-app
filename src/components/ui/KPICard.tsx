import React from 'react';

interface KPICardProps {
  title: string;
  value: number;
}

const KPICard: React.FC<KPICardProps> = ({ title, value }) => {
  return (
    <div className="kpi-card">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
};

export default KPICard;