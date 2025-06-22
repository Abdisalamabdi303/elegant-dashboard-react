
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, color }) => {
  const colorClasses = {
    blue: 'from-blue-50 to-cyan-50 text-blue-700 border-blue-200/50',
    green: 'from-green-50 to-emerald-50 text-green-700 border-green-200/50',
    purple: 'from-purple-50 to-violet-50 text-purple-700 border-purple-200/50',
    orange: 'from-orange-50 to-red-50 text-orange-700 border-orange-200/50',
  };

  const gradientClasses = {
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
    purple: 'from-purple-500 to-violet-500',
    orange: 'from-orange-500 to-red-500',
  };

  const icons = {
    blue: '👥',
    green: '👨‍🏫',
    purple: '📚',
    orange: '💰',
  };

  const isPositive = change.startsWith('+');

  return (
    <div className={`glass backdrop-blur-sm p-6 rounded-2xl border ${colorClasses[color]} hover:shadow-premium hover:scale-105 transition-all duration-300 shadow-premium-sm group relative overflow-hidden`}>
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-14 h-14 bg-gradient-to-br ${gradientClasses[color]} rounded-xl flex items-center justify-center text-white text-xl shadow-premium group-hover:scale-110 transition-transform duration-300`}>
            {icons[color]}
          </div>
          <div className="text-right">
            <span className={`text-sm font-bold px-3 py-1.5 rounded-full flex items-center space-x-1 ${
              isPositive 
                ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border border-green-200/50' 
                : 'bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border border-red-200/50'
            } shadow-premium-sm`}>
              {isPositive ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              <span>{change}</span>
            </span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold opacity-80 mb-2">{title}</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};
