
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
    blue: 'from-red-50 to-rose-50 text-red-700 border-red-200/50',
    green: 'from-rose-50 to-pink-50 text-rose-700 border-rose-200/50',
    purple: 'from-pink-50 to-red-50 text-pink-700 border-pink-200/50',
    orange: 'from-red-50 to-rose-50 text-red-700 border-red-200/50',
  };

  const gradientClasses = {
    blue: 'from-red-500 to-rose-500',
    green: 'from-rose-500 to-pink-500',
    purple: 'from-pink-500 to-red-500',
    orange: 'from-red-600 to-rose-600',
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
                : 'bg-gradient-to-r from-red-100 to-rose-100 text-red-700 border border-red-200/50'
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
          <p className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent font-poppins">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

