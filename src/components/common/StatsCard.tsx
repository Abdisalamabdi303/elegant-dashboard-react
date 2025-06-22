
import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, color }) => {
  const colorClasses = {
    blue: 'bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 border-blue-200 shadow-blue-100',
    green: 'bg-gradient-to-br from-green-50 to-green-100 text-green-700 border-green-200 shadow-green-100',
    purple: 'bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 border-purple-200 shadow-purple-100',
    orange: 'bg-gradient-to-br from-orange-50 to-orange-100 text-orange-700 border-orange-200 shadow-orange-100',
  };

  const iconClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  };

  const icons = {
    blue: '👥',
    green: '👨‍🏫',
    purple: '📚',
    orange: '💰',
  };

  return (
    <div className={`p-6 rounded-2xl border-2 ${colorClasses[color]} hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${iconClasses[color]} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}>
          {icons[color]}
        </div>
        <div className="text-right">
          <span className={`text-sm font-bold px-3 py-1 rounded-full ${
            change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {change}
          </span>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium opacity-80 mb-1">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </div>
  );
};
