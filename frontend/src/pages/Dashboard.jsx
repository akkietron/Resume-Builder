import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Dashboard = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 mt-10">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6 text-slate-600">Welcome back! Use the links below to view your resume builder or admin area.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link to="/builder" className="block rounded-lg border border-slate-200 bg-slate-50 p-6 text-center hover:border-slate-400">
          <h2 className="text-xl font-semibold">Resume Builder</h2>
          <p className="mt-2 text-sm text-slate-600">Open the editor and build your resume visually.</p>
        </Link>
        {role === 'admin' && (
          <Link to="/admin" className="block rounded-lg border border-slate-200 bg-slate-50 p-6 text-center hover:border-slate-400">
            <h2 className="text-xl font-semibold">Admin Panel</h2>
            <p className="mt-2 text-sm text-slate-600">Manage users and application settings.</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
