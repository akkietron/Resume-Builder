import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Builder from './pages/Builder';
import AdminPanel from './pages/AdminPanel';

function App() {
  const isAuthenticated = () => !!localStorage.getItem('token');
  const isAdmin = () => localStorage.getItem('role') === 'admin';

  return (
    <Router>
      <Routes>
        <path path="/login" element={<Login />} />
        <path path="/register" element={<Register />} />
        <path path="/dashboard" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />
        <path path="/builder" element={isAuthenticated() ? <Builder /> : <Navigate to="/login" />} />
        <path path="/admin" element={isAuthenticated() && isAdmin() ? <AdminPanel /> : <Navigate to="/dashboard" />} />
        <path path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
export default App;