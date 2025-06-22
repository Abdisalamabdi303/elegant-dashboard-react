
import React from 'react';
import { StatsCard } from '../common/StatsCard';
import { RecentActivity } from '../common/RecentActivity';

export const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Students', value: '1,234', change: '+12%', color: 'blue' as const },
    { title: 'Active Staff', value: '89', change: '+5%', color: 'green' as const },
    { title: 'Total Courses', value: '45', change: '+2%', color: 'purple' as const },
    { title: 'This Month Revenue', value: '$24,500', change: '+18%', color: 'orange' as const },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
        <h1 className="text-4xl font-bold mb-2">Dashboard Overview</h1>
        <p className="text-indigo-100 text-lg">Welcome back! Here's what's happening at your institution today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl transition-all duration-200 border border-blue-200 group">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">+</span>
              </div>
              <span className="font-semibold text-gray-700">Add New Student</span>
            </button>
            <button className="w-full flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-xl transition-all duration-200 border border-green-200 group">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">📚</span>
              </div>
              <span className="font-semibold text-gray-700">Create Course</span>
            </button>
            <button className="w-full flex items-center p-4 bg-gradient-to-r from-purple-50 to-violet-50 hover:from-purple-100 hover:to-violet-100 rounded-xl transition-all duration-200 border border-purple-200 group">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">📅</span>
              </div>
              <span className="font-semibold text-gray-700">Schedule Meeting</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="xl:col-span-2">
          <RecentActivity />
        </div>
      </div>

      {/* Additional Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold">25</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Parent-Teacher Conference</h3>
                <p className="text-gray-600 text-sm">June 25, 2024 - 2:00 PM</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold">30</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Final Examinations</h3>
                <p className="text-gray-600 text-sm">June 30, 2024 - 9:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">System Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="font-medium text-gray-900">Server Status</span>
              </div>
              <span className="text-green-600 font-semibold">Online</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="font-medium text-gray-900">Database</span>
              </div>
              <span className="text-green-600 font-semibold">Connected</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                <span className="font-medium text-gray-900">Backup Status</span>
              </div>
              <span className="text-yellow-600 font-semibold">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
