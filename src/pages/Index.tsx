
import React from 'react';
import { AdminLayout } from '../components/layout/AdminLayout';
import { Dashboard } from '../components/pages/Dashboard';

const Index = () => {
  return (
    <AdminLayout>
      <Dashboard />
    </AdminLayout>
  );
};

export default Index;
