import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !password) return;

    localStorage.setItem('token', 'demo-token');
    localStorage.setItem('role', 'user');
    setSuccess('Registration successful, redirecting to dashboard...');
    setTimeout(() => navigate('/dashboard'), 800);
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 mt-10">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      {success && <div className="mb-4 rounded bg-emerald-50 border border-emerald-200 p-3 text-emerald-700">{success}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>
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
          Create Account
        </button>
      </form>
      <p className="mt-4 text-sm text-slate-600">
        Already have an account? <Link to="/login" className="text-slate-900 underline">Login</Link>
      </p>
    </div>
  );
};

export default Register;
