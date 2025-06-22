
import React from 'react';

export const RecentActivity: React.FC = () => {
  const activities = [
    { action: 'New student registered', user: 'John Doe', time: '2 minutes ago', type: 'student' },
    { action: 'Course updated', user: 'Prof. Smith', time: '15 minutes ago', type: 'course' },
    { action: 'Attendance marked', user: 'Jane Wilson', time: '1 hour ago', type: 'attendance' },
    { action: 'Staff added', user: 'Admin', time: '2 hours ago', type: 'staff' },
    { action: 'Report generated', user: 'System', time: '4 hours ago', type: 'report' },
  ];

  const getTypeIcon = (type: string) => {
    const icons = {
      student: '👨‍🎓',
      course: '📚',
      attendance: '✅',
      staff: '👨‍🏫',
      report: '📈',
    };
    return icons[type as keyof typeof icons] || '📝';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-xl">{getTypeIcon(activity.type)}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.action}</p>
              <p className="text-sm text-gray-600">by {activity.user}</p>
            </div>
            <div className="text-xs text-gray-500">{activity.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
