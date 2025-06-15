import { useState, useRef, useEffect } from 'react';

import MenuBarIcon from '../../assets/icons/MenuBarIcon';
import SidebarItem from '../../components/menu-item';
import useAppSelector from '../../hooks/global/useAppSelector';
import useAppDispatch from '../../hooks/global/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { setIsMenuOpen } from '../../store/slices/loading.slice';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';

const sideBarItems = [
  {
    id: 'home',
    label: 'Home',
    path: '/dashboard',
  },
  {
    id: 'bell',
    label: 'Alerts',
    path: '/notfound',
  },
  {
    id: 'record',
    label: 'Media Logs',
    path: '/notfound',
  },
  {
    id: 'cloud',
    label: 'Upload',
    path: '/notfound',
  },
  {
    id: 'setting',
    label: 'Settings',
    path: '/notfound',
  },
];

const Sidebar = () => {
  const [selectedItem, setSeletedItem] = useState(() => {
    return localStorage.getItem('sidebarSelected') || 'home';
  });
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const { isMenuOpen } = useAppSelector((state) => state.loading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    console.log('here');

    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  const clickHander = (id: string, path: string) => {
    setSeletedItem(id);
    localStorage.setItem('sidebarSelected', id);
    navigate(path);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
      localStorage.clear();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div
      className={`
        fixed md:relative bg-background-primary border-r border-[#222324]
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        flex flex-col
        transition-[width] duration-500 ease-in-out 
        ${isMenuOpen ? 'w-50' : 'w-20'} h-screen shrink-0
      `}
    >
      {/* Top Section */}
      <div className="flex flex-grow flex-col items-center gap-7 ">
        <button
          onClick={toggleSidebar}
          className={`text-white mt-8 cursor-pointer w-full flex ${isMenuOpen ? 'justify-end' : 'justify-center'}`}
        >
          {!isMenuOpen ? <MenuBarIcon className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5 mr-2" />}
        </button>

        <div className={`flex flex-col gap-5 w-full items-center ${isMenuOpen && 'items-start'}`}>
          {sideBarItems.map((item) => (
            <SidebarItem
              id={item.id}
              key={item.id}
              label={item.label}
              path={item.path}
              isOpen={isMenuOpen}
              active={selectedItem === item.id}
              onClick={() => clickHander(item.id, item.path)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Profile */}
      <div ref={profileMenuRef} className="relative flex items-center justify-center mb-4">
        <SidebarItem
          id="account"
          label="Profile"
          isOpen={isMenuOpen}
          path="/profile"
          onClick={() => setIsProfileMenuOpen((prev) => !prev)}
        />

        <div
          className={`
            absolute left-full bottom-3 ml-[-10px]
            bg-[#292929] text-white text-sm rounded-lg shadow-lg z-50
            flex flex-col min-w-[140px]
            transform transition-all duration-300 ease-out
            ${
              isProfileMenuOpen
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
            }
          `}
        >
          {/* ▼ Triangle on bottom-left */}
          <div className="absolute left-[-6px] bottom-3 w-3 h-3 bg-[#292929] rotate-45 z-[-1]" />

          <button className="px-4 py-2 hover:bg-[#3a3a3a] text-left cursor-pointer">My Account</button>
          <button className="px-4 py-2 hover:bg-[#3a3a3a] text-left cursor-pointer" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
