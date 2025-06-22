
import React from 'react';
import { StatsCard } from '../common/StatsCard';
import { RecentActivity } from '../common/RecentActivity';

export const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Students', value: '1,234', change: '+12%', color: 'blue' },
    { title: 'Total Staff', value: '89', change: '+3%', color: 'green' },
    { title: 'Active Courses', value: '45', change: '+8%', color: 'purple' },
    { title: 'Today\'s Attendance', value: '92%', change: '+2%', color: 'orange' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-left">
              <div className="text-2xl mb-2">👨‍🎓</div>
              <div className="font-medium text-gray-900">Add Student</div>
              <div className="text-sm text-gray-600">Register new student</div>
            </button>
            <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-left">
              <div className="text-2xl mb-2">👨‍🏫</div>
              <div className="font-medium text-gray-900">Add Staff</div>
              <div className="text-sm text-gray-600">Add new staff member</div>
            </button>
            <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-left">
              <div className="text-2xl mb-2">📚</div>
              <div className="font-medium text-gray-900">New Course</div>
              <div className="text-sm text-gray-600">Create new course</div>
            </button>
            <button className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors text-left">
              <div className="text-2xl mb-2">📅</div>
              <div className="font-medium text-gray-900">Schedule</div>
              <div className="text-sm text-gray-600">Manage appointments</div>
            </button>
          </div>
        </div>

        <RecentActivity />
      </div>
    </div>
  );
};
