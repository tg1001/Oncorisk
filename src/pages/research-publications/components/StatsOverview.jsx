import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  const statCards = [
    {
      icon: 'FileText',
      label: 'Total Publications',
      value: stats?.totalPublications,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: 'Award',
      label: 'Peer-Reviewed',
      value: stats?.peerReviewed,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: 'Quote',
      label: 'Total Citations',
      value: stats?.totalCitations?.toLocaleString(),
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10'
    },
    {
      icon: 'TrendingUp',
      label: 'Avg Impact Factor',
      value: stats?.avgImpactFactor?.toFixed(1),
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {statCards?.map((stat, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-4 md:p-6 hover:border-accent/50 transition-all duration-300"
        >
          <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 ${stat?.bgColor} rounded-lg mb-3`}>
            <Icon name={stat?.icon} size={20} className={stat?.color} />
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
            {stat?.value}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            {stat?.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;