
import React, { useState } from 'react';
import { DataTable } from '../common/DataTable';
import { FilterDropdown } from '../common/FilterDropdown';
import { Modal } from '../common/Modal';
import { CourseForm } from '../forms/CourseForm';
import { Course } from '../../types';

export const Courses: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const courses: Course[] = [
    { id: 1, name: 'Advanced Mathematics', code: 'MATH301', instructor: 'Prof. Smith', credits: 4, status: 'Active', schedule: 'Mon, Wed, Fri 10:00 AM' },
    { id: 2, name: 'Physics Fundamentals', code: 'PHYS101', instructor: 'Dr. Johnson', credits: 3, status: 'Active', schedule: 'Tue, Thu 2:00 PM' },
    { id: 3, name: 'English Literature', code: 'ENG201', instructor: 'Ms. Wilson', credits: 3, status: 'Active', schedule: 'Mon, Wed 1:00 PM' },
  ];

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Course Name' },
    { key: 'code', label: 'Course Code' },
    { key: 'instructor', label: 'Instructor' },
    { key: 'credits', label: 'Credits' },
    { key: 'status', label: 'Status' },
    { key: 'schedule', label: 'Schedule' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Add Course
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-64">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        <DataTable columns={columns} data={courses} />
      </div>

      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Course"
      >
        <CourseForm onSubmit={() => {
          console.log('Course added');
          setShowAddModal(false);
        }} />
      </Modal>
    </div>
  );
};
