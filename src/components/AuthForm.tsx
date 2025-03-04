import React, { useState } from 'react';
import { User, Lock, Mail, ArrowLeft } from 'lucide-react';

interface AuthFormProps {
  mode: 'login' | 'register' | 'reset';
  onLogin: (credentials: { email: string; password: string }) => void;
  onRegister: (userData: { name: string; email: string; password: string }) => void;
  onCancel: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onLogin, onRegister, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (mode === 'register') {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      onRegister({ name, email, password });
    } else if (mode === 'login') {
      onLogin({ email, password });
    } else if (mode === 'reset') {
      // Handle password reset (not implemented in MVP)
      console.log('Password reset for:', email);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-secondary-dark rounded-lg shadow-md p-8 text-gray-200">
      <div className="flex items-center mb-6">
        <button 
          onClick={onCancel}
          className="mr-4 text-gray-400 hover:text-primary"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-2xl font-bold text-primary">
          {mode === 'login' ? 'Login' : mode === 'register' ? 'Create Account' : 'Reset Password'}
        </h2>
      </div>

      {error && (
        <div className="bg-red-900 border border-red-700 text-red-100 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {mode === 'register' && (
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className="text-gray-500" />
              </div>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 w-full p-2.5 bg-secondary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                placeholder="John Doe"
                required
              />
            </div>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail size={18} className="text-gray-500" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 w-full p-2.5 bg-secondary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        {mode !== 'reset' && (
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-500" />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 w-full p-2.5 bg-secondary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
        )}

        {mode === 'register' && (
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-500" />
              </div>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pl-10 w-full p-2.5 bg-secondary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-6">
          {mode === 'login' && (
            <button
              type="button"
              className="text-sm text-primary hover:text-primary-light"
              onClick={() => console.log('Reset password flow (not implemented in MVP)')}
            >
              Forgot Password?
            </button>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-secondary-dark font-bold py-2.5 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50 transition-colors"
        >
          {mode === 'login' ? 'Sign In' : mode === 'register' ? 'Create Account' : 'Reset Password'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;