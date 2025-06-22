
import React, { useState } from 'react';
import { DataTable } from '../common/DataTable';
import { FilterDropdown } from '../common/FilterDropdown';
import { Modal } from '../common/Modal';
import { StudentForm } from '../forms/StudentForm';
import { Student } from '../../types';

export const Students: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterGrade, setFilterGrade] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const students: Student[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', grade: '10th', status: 'Active', enrollDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', grade: '11th', status: 'Active', enrollDate: '2024-01-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', grade: '9th', status: 'Inactive', enrollDate: '2024-02-01' },
  ];

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Full Name' },
    { key: 'email', label: 'Email' },
    { key: 'grade', label: 'Grade' },
    { key: 'status', label: 'Status' },
    { key: 'enrollDate', label: 'Enrollment Date' },
  ];

  const gradeOptions = [
    { value: '', label: 'All Grades' },
    { value: '9th', label: '9th Grade' },
    { value: '10th', label: '10th Grade' },
    { value: '11th', label: '11th Grade' },
    { value: '12th', label: '12th Grade' },
  ];

  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Students</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Student
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <FilterDropdown
            label="Grade"
            options={gradeOptions}
            value={filterGrade}
            onChange={setFilterGrade}
          />
          <FilterDropdown
            label="Status"
            options={statusOptions}
            value={filterStatus}
            onChange={setFilterStatus}
          />
          <div className="flex-1 min-w-64">
            <input
              type="text"
              placeholder="Search students..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <DataTable columns={columns} data={students} />
      </div>

      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Student"
      >
        <StudentForm onSubmit={() => {
          console.log('Student added');
          setShowAddModal(false);
        }} />
      </Modal>
    </div>
  );
};
