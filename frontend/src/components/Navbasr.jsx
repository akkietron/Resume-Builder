import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbasr = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link to="/" className="text-xl font-bold text-slate-900">
            Resume Builder
          </Link>
        </div>

        <nav className="flex flex-wrap items-center gap-3 text-sm">
          {!token ? (
            <>
              <Link to="/login" className="px-3 py-2 rounded hover:bg-slate-100">Login</Link>
              <Link to="/register" className="px-3 py-2 rounded hover:bg-slate-100">Register</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="px-3 py-2 rounded hover:bg-slate-100">Dashboard</Link>
              <Link to="/builder" className="px-3 py-2 rounded hover:bg-slate-100">Builder</Link>
              {role === 'admin' && (
                <Link to="/admin" className="px-3 py-2 rounded hover:bg-slate-100">Admin</Link>
              )}
              <button onClick={logout} className="px-3 py-2 rounded bg-slate-900 text-white hover:bg-slate-800">
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbasr;
