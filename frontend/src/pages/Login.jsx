import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }

    localStorage.setItem('token', 'demo-token');
    localStorage.setItem('role', email.includes('admin') ? 'admin' : 'user');
    navigate('/dashboard');
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 mt-10">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <p className="text-sm text-slate-600 mb-6">Use an email containing <strong>admin</strong> for admin access.</p>
      {error && <div className="mb-4 rounded border border-red-300 bg-red-50 p-3 text-red-700">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-slate-900 text-white rounded hover:bg-slate-800">
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-slate-600">
        New here? <Link to="/register" className="text-slate-900 underline">Register</Link>
      </p>
    </div>
  );
};

export default Login;
