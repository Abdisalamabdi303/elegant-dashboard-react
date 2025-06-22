
import React, { useState } from 'react';
import { DataTable } from '../common/DataTable';
import { FilterDropdown } from '../common/FilterDropdown';
import { Modal } from '../common/Modal';
import { AppointmentForm } from '../forms/AppointmentForm';
import { Appointment } from '../../types';

export const Appointments: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const appointments: Appointment[] = [
    { id: 1, studentName: 'John Doe', staffName: 'Prof. Smith', date: '2024-06-25', time: '10:00 AM', purpose: 'Academic Counseling', status: 'Scheduled' },
    { id: 2, studentName: 'Jane Smith', staffName: 'Dr. Johnson', date: '2024-06-26', time: '2:00 PM', purpose: 'Career Guidance', status: 'Scheduled' },
    { id: 3, studentName: 'Mike Johnson', staffName: 'Ms. Wilson', date: '2024-06-24', time: '11:00 AM', purpose: 'Grade Discussion', status: 'Completed' },
  ];

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'studentName', label: 'Student' },
    { key: 'staffName', label: 'Staff' },
    { key: 'date', label: 'Date' },
    { key: 'time', label: 'Time' },
    { key: 'purpose', label: 'Purpose' },
    { key: 'status', label: 'Status' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Schedule Appointment
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div className="flex-1 min-w-64">
            <input
              type="text"
              placeholder="Search appointments..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        <DataTable columns={columns} data={appointments} />
      </div>

      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Schedule New Appointment"
      >
        <AppointmentForm onSubmit={() => {
          console.log('Appointment scheduled');
          setShowAddModal(false);
        }} />
      </Modal>
    </div>
  );
};
