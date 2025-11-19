import React, { useState } from 'react';
import { APP_NAME, AUTHORIZED_USERS } from './constants';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validPassword = AUTHORIZED_USERS[email];
    
    if (validPassword && validPassword === password) {
      onLogin();
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full border border-slate-100">
        <div className="text-center mb-8">
           <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-orange-500">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.632 8.632a.75.75 0 0 1-.53 1.28h-8.63a.75.75 0 0 1-.532-1.28l8.63-8.632Z" />
                <path fillRule="evenodd" d="M2.25 12.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 .75.75v6.5a2.25 2.25 0 0 1-2.25 2.25H3a.75.75 0 0 1-.75-.75V12.75Z" clipRule="evenodd" />
              </svg>
           </div>
           <h1 className="text-2xl font-bold text-slate-800">{APP_NAME}</h1>
           <p className="text-slate-500 text-sm mt-1">Employee Login</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
              placeholder="name@cottage.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 py-2 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2.5 rounded-lg hover:bg-orange-600 transition-colors shadow-md active:scale-95 transform duration-150"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center text-xs text-slate-400">
          Authorized Personnel Only
        </div>
      </div>
    </div>
  );
};

export default Login;
