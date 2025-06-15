import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import AppRoutes from './routes/AppRoutes';
import Sidebar from './pages/layout/SideBar';
import Header from './pages/layout/Header';
import { useAuth } from './context/AuthContext';
import useAppSelector from './hooks/global/useAppSelector';

function App() {
  const { user } = useAuth();
  const { isMenuOpen } = useAppSelector((state) => state.loading);

  return (
    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <div className="flex">
        {user ? <Sidebar /> : <></>}
        <div className="w-full">
          <main className={`w-full minh-[calc(100vh-87px)] ${isMenuOpen ? 'md:ml-50' : 'md:ml-20'}`}>
            <Header />
            <AppRoutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
