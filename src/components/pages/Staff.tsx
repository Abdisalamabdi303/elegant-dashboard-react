
import React, { useState } from 'react';
import { DataTable } from '../common/DataTable';
import { FilterDropdown } from '../common/FilterDropdown';
import { Modal } from '../common/Modal';
import { StaffForm } from '../forms/StaffForm';
import { Staff as StaffType } from '../../types';

export const Staff: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const staff: StaffType[] = [
    { id: 1, name: 'Prof. Smith', email: 'smith@example.com', department: 'Mathematics', role: 'Professor', status: 'Active', hireDate: '2023-08-15' },
    { id: 2, name: 'Dr. Johnson', email: 'johnson@example.com', department: 'Science', role: 'Head of Department', status: 'Active', hireDate: '2022-09-01' },
    { id: 3, name: 'Ms. Wilson', email: 'wilson@example.com', department: 'English', role: 'Teacher', status: 'Active', hireDate: '2024-01-10' },
  ];

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Full Name' },
    { key: 'email', label: 'Email' },
    { key: 'department', label: 'Department' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
    { key: 'hireDate', label: 'Hire Date' },
  ];

  const departmentOptions = [
    { value: '', label: 'All Departments' },
    { value: 'Mathematics', label: 'Mathematics' },
    { value: 'Science', label: 'Science' },
    { value: 'English', label: 'English' },
    { value: 'History', label: 'History' },
  ];

  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Staff</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Add Staff Member
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <FilterDropdown
            label="Department"
            options={departmentOptions}
            value={filterDepartment}
            onChange={setFilterDepartment}
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
              placeholder="Search staff..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <DataTable columns={columns} data={staff} />
      </div>

      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Staff Member"
      >
        <StaffForm onSubmit={() => {
          console.log('Staff member added');
          setShowAddModal(false);
        }} />
      </Modal>
    </div>
  );
};
