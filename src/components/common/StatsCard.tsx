
import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
  };

  return (
    <div className={`p-6 rounded-xl border-2 ${colorClasses[color]} hover:shadow-lg transition-shadow`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-75">{title}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>
        <div className="text-right">
          <span className="text-sm font-semibold">{change}</span>
        </div>
      </div>
    </div>
  );
};
