import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import AppRoutes from './routes/AppRoutes';
import Sidebar from './pages/layout/SideBar';
import { useAuth } from './context/AuthContext';
import { useEffect } from 'react';

function App() {
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <div className="flex">
        {user ? <Sidebar /> : <></>}
        <div className="w-full">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
