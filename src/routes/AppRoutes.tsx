import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/login';
import DashboardPage from '../pages/DashboardPage';
import RegisterPage from '../pages/register';

const AppRoutes = () => {
  // const isAuthenticated = !!localStorage.getItem('authToken'); // replace with real auth check

  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      {/* <Route
        path="/dashboard"
        element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />}
      /> */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
