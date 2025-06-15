import { useState } from 'react';

import MenuBarIcon from '../../assets/icons/MenuBarIcon';
import SidebarItem from '../../components/menu-item';
import useAppSelector from '../../hooks/global/useAppSelector';
import useAppDispatch from '../../hooks/global/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { setIsMenuOpen } from '../../store/slices/loading.slice';

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
  const { isMenuOpen } = useAppSelector((state) => state.loading);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const toggleSidebar = () => {
    console.log('here');

    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  const clickHander = (id: string, path: string) => {
    setSeletedItem(id);
    localStorage.setItem('sidebarSelected', id);
    navigate(path);
  };

  return (
    <div
      className={`
        h-screen border-r border-[#222324]  fixed md:relative bg-background-primary ${
          !isMenuOpen ? 'hidden md:block' : ''
        }
        flex flex-col justify-between 
        transition-[width] duration-500 ease-in-out overflow-hidden
        ${isMenuOpen ? 'w-50' : 'w-20'} shrink-0
      `}
    >
      {/* Top Section */}
      <div className="flex flex-col items-center gap-7">
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
      <div className="flex items-center justify-center mb-4">
        <SidebarItem id="account" label="Profile" isOpen={isMenuOpen} path="/profile" onClick={clickHander} />
      </div>
    </div>
  );
};

export default Sidebar;
