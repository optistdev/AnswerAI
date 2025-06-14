import React, { useState } from 'react';
import { registerWithEmail } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input';
import Button from '../../components/authButton';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const result = await registerWithEmail(email, password);
      console.log(result);

      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Registration failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className=" p-6 rounded-lg shadow-md w-full max-w-md">
        <img src="/images/logo.png" className="w-full h-30 object-cover p-4 mb-8"></img>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full h-[50px]"
            error={error}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            name="passoword"
            placeholder="Enter your password"
            className="w-full h-[50px]"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" label="Sign In" className="w-full h-[50px]" />
          <Button
            label="Sign in with Google"
            className="w-full h-[50px]"
            img="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          />
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/register" className="text-blue-500 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
