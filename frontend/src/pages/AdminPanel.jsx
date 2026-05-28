import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminPanel = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token || role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 mt-10">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <p className="text-slate-600 mb-6">This is the admin area. In a full app, you would manage users and content here.</p>
      <div className="space-y-4">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h2 className="font-semibold">User Management</h2>
          <p className="text-sm text-slate-600">Demo mode only, no real data is loaded.</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h2 className="font-semibold">System Status</h2>
          <p className="text-sm text-slate-600">Backend and frontend are running, and the admin route is available.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
