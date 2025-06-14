import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import CustomizedButton from './components/button';
import SearchInput from './components/input/SearchInput';
import { Icons } from './utils/icons';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
      <CustomizedButton className='m-10' label='Login' icon={Icons.Search} onClick={() => console.log("sldfjsdlk")}/>
      <SearchInput className='w-80 h-10 m-10' />
    </BrowserRouter>
  );
}

export default App;

