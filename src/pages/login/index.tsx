import React, { useState } from 'react';
import { loginWithEmail, loginWithGoogle } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input';
import Button from '../../components/authButton';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormErrors({
      email: '',
      password: '',
    });

    let hasError = false;

    if (!formData.email.trim()) {
      setFormErrors((prev) => ({ ...prev, email: 'Email is required.' }));
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
      hasError = true;
    }

    if (!formData.password.trim()) {
      setFormErrors((prev) => ({ ...prev, password: 'Password is required.' }));
      hasError = true;
    } else if (formData.password.length < 6) {
      setFormErrors((prev) => ({ ...prev, password: 'Password must be at least 6 characters.' }));
      hasError = true;
    }

    if (hasError) return;

    try {
      const result = await loginWithEmail(formData.email, formData.password);
      console.log(result);
      navigate('/dashboard');
    } catch (err: any) {
      console.log(err.message || 'Log in failed.');
    }
  };
  const googleAuthHandler = async () => {
    try {
      const result = await loginWithGoogle();
      console.log(result);
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Google login failed:', err.message);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    switch (name) {
      case 'email':
        if (!value.trim()) {
          setFormErrors((prev) => ({ ...prev, email: 'Email is required.' }));
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          setFormErrors((prev) => ({ ...prev, email: 'Enter a valid email.' }));
        } else {
          setFormErrors((prev) => ({ ...prev, email: '' }));
        }
        break;

      case 'password':
        if (!value.trim()) {
          setFormErrors((prev) => ({ ...prev, password: 'Password is required.' }));
        } else if (value.length < 6) {
          setFormErrors((prev) => ({ ...prev, password: 'At least 6 characters.' }));
        } else {
          setFormErrors((prev) => ({ ...prev, password: '' }));
        }
        break;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className=" p-6 rounded-lg shadow-md w-full max-w-md">
        <img src="/images/logo.png" className="w-full h-30 object-cover p-4 mb-8"></img>
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            name="email"
            placeholder="you@example.com"
            className="w-full h-[50px]"
            error={formErrors.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full h-[50px]"
            error={formErrors.password}
            onChange={handleChange}
          />

          <Button type="submit" label="Sign In" className="w-full h-[50px]" />
        </form>
        <div className="my-4">
          <Button
            label="Sign in with Google"
            className="w-full h-[50px]"
            img="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            onClick={googleAuthHandler}
          />
        </div>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't you have an account?{' '}
          <Link to="/register" className="text-blue-500 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
