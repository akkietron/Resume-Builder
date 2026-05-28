import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbasr from './components/Navbasr';
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
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbasr />
        <main className="max-w-6xl mx-auto p-4">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/builder" element={isAuthenticated() ? <Builder /> : <Navigate to="/login" />} />
            <Route path="/admin" element={isAuthenticated() && isAdmin() ? <AdminPanel /> : <Navigate to="/dashboard" />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;