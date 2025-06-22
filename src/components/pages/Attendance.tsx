
import React, { useState } from 'react';
import { DataTable } from '../common/DataTable';
import { FilterDropdown } from '../common/FilterDropdown';
import { Attendance as AttendanceType } from '../../types';

export const Attendance: React.FC = () => {
  const [filterDate, setFilterDate] = useState('');
  const [filterCourse, setFilterCourse] = useState('');

  const attendance: AttendanceType[] = [
    { id: 1, studentId: 1, studentName: 'John Doe', courseId: 1, courseName: 'Advanced Mathematics', date: '2024-06-22', status: 'Present' },
    { id: 2, studentId: 2, studentName: 'Jane Smith', courseId: 1, courseName: 'Advanced Mathematics', date: '2024-06-22', status: 'Present' },
    { id: 3, studentId: 3, studentName: 'Mike Johnson', courseId: 2, courseName: 'Physics Fundamentals', date: '2024-06-22', status: 'Absent' },
  ];

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'studentName', label: 'Student' },
    { key: 'courseName', label: 'Course' },
    { key: 'date', label: 'Date' },
    { key: 'status', label: 'Status' },
  ];

  const courseOptions = [
    { value: '', label: 'All Courses' },
    { value: 'Advanced Mathematics', label: 'Advanced Mathematics' },
    { value: 'Physics Fundamentals', label: 'Physics Fundamentals' },
    { value: 'English Literature', label: 'English Literature' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Attendance</h1>
        <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
          Mark Attendance
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <FilterDropdown
            label="Course"
            options={courseOptions}
            value={filterCourse}
            onChange={setFilterCourse}
          />
          <div className="flex-1 min-w-64">
            <input
              type="text"
              placeholder="Search attendance..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        <DataTable columns={columns} data={attendance} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600">Present Today</p>
              <p className="text-3xl font-bold text-green-700 mt-1">245</p>
            </div>
            <div className="text-3xl">✅</div>
          </div>
        </div>

        <div className="bg-red-50 rounded-xl p-6 border border-red-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-600">Absent Today</p>
              <p className="text-3xl font-bold text-red-700 mt-1">12</p>
            </div>
            <div className="text-3xl">❌</div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-yellow-600">Late Today</p>
              <p className="text-3xl font-bold text-yellow-700 mt-1">8</p>
            </div>
            <div className="text-3xl">⏰</div>
          </div>
        </div>
      </div>
    </div>
  );
};
