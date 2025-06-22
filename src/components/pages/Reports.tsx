
import React, { useState } from 'react';
import { FilterDropdown } from '../common/FilterDropdown';

export const Reports: React.FC = () => {
  const [reportType, setReportType] = useState('');
  const [dateRange, setDateRange] = useState('');

  const reportTypes = [
    { value: '', label: 'Select Report Type' },
    { value: 'student-performance', label: 'Student Performance' },
    { value: 'attendance-summary', label: 'Attendance Summary' },
    { value: 'course-enrollment', label: 'Course Enrollment' },
    { value: 'staff-workload', label: 'Staff Workload' },
    { value: 'financial-summary', label: 'Financial Summary' },
  ];

  const dateRanges = [
    { value: '', label: 'Select Time Period' },
    { value: 'this-week', label: 'This Week' },
    { value: 'this-month', label: 'This Month' },
    { value: 'this-semester', label: 'This Semester' },
    { value: 'this-year', label: 'This Year' },
    { value: 'custom', label: 'Custom Range' },
  ];

  const generateReport = () => {
    console.log('Generating report:', { reportType, dateRange });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Generate Report</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <FilterDropdown
            label="Report Type"
            options={reportTypes}
            value={reportType}
            onChange={setReportType}
          />
          <FilterDropdown
            label="Time Period"
            options={dateRanges}
            value={dateRange}
            onChange={setDateRange}
          />
          <div className="flex items-end">
            <button
              onClick={generateReport}
              className="w-full px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Generate Report
            </button>
          </div>
        </div>

        {dateRange === 'custom' && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-900">Quick Reports</h4>
            <span className="text-2xl">📊</span>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
              <div className="font-medium">Today's Attendance</div>
              <div className="text-sm text-gray-600">Current day attendance summary</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
              <div className="font-medium">Weekly Overview</div>
              <div className="text-sm text-gray-600">This week's key metrics</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
              <div className="font-medium">Monthly Summary</div>
              <div className="text-sm text-gray-600">Complete monthly report</div>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-900">Export Options</h4>
            <span className="text-2xl">📤</span>
          </div>
          <div className="space-y-3">
            <button className="w-full p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
              Export as PDF
            </button>
            <button className="w-full p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
              Export as Excel
            </button>
            <button className="w-full p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
              Export as CSV
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-900">Scheduled Reports</h4>
            <span className="text-2xl">⏰</span>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="font-medium text-sm">Weekly Attendance</div>
              <div className="text-xs text-gray-600">Every Monday at 9:00 AM</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="font-medium text-sm">Monthly Performance</div>
              <div className="text-xs text-gray-600">1st of every month</div>
            </div>
            <button className="w-full p-2 text-sm text-teal-600 border border-teal-300 rounded-lg hover:bg-teal-50 transition-colors">
              + Add Scheduled Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
