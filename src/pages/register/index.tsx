import React, { useState } from 'react';
import { registerWithEmail } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input';
import Button from '../../components/button';

const RegisterPage: React.FC = () => {
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
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className=" p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full h-[50px]"
            error={error}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            name="passoword"
            placeholder="Password"
            className="w-full h-[50px]"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" label="Register" className="w-full h-[50px]" />
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="/" className="text-blue-500 underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
