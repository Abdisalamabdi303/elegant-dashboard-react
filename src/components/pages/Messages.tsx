
import React, { useState } from 'react';
import { DataTable } from '../common/DataTable';
import { FilterDropdown } from '../common/FilterDropdown';
import { Modal } from '../common/Modal';
import { MessageForm } from '../forms/MessageForm';
import { Message } from '../../types';

export const Messages: React.FC = () => {
  const [showComposeModal, setShowComposeModal] = useState(false);

  const messages: Message[] = [
    { id: 1, sender: 'John Doe', recipient: 'Prof. Smith', subject: 'Question about Assignment', content: 'I have a question...', date: '2024-06-22', status: 'Unread' },
    { id: 2, sender: 'Prof. Smith', recipient: 'Jane Smith', subject: 'Grade Update', content: 'Your grade has been...', date: '2024-06-21', status: 'Read' },
    { id: 3, sender: 'Admin', recipient: 'All Students', subject: 'Holiday Notice', content: 'The school will be closed...', date: '2024-06-20', status: 'Read' },
  ];

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'sender', label: 'From' },
    { key: 'recipient', label: 'To' },
    { key: 'subject', label: 'Subject' },
    { key: 'date', label: 'Date' },
    { key: 'status', label: 'Status' },
  ];

  const statusOptions = [
    { value: '', label: 'All Messages' },
    { value: 'Read', label: 'Read' },
    { value: 'Unread', label: 'Unread' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
        <button
          onClick={() => setShowComposeModal(true)}
          className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
        >
          Compose Message
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <FilterDropdown
            label="Status"
            options={statusOptions}
            value=""
            onChange={() => {}}
          />
          <div className="flex-1 min-w-64">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>

        <DataTable columns={columns} data={messages} />
      </div>

      <Modal
        isOpen={showComposeModal}
        onClose={() => setShowComposeModal(false)}
        title="Compose New Message"
      >
        <MessageForm onSubmit={() => {
          console.log('Message sent');
          setShowComposeModal(false);
        }} />
      </Modal>
    </div>
  );
};
