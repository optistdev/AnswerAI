import { Menu, User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../../assets/icons/HomeIcon';
import BellIcon from '../../assets/icons/BellIcon';
import CloudIcon from '../../assets/icons/CloudIcon';
import RecordIcon from '../../assets/icons/RecordIcon';
import SettingIcon from '../../assets/icons/SettingIcon';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`
        h-screen border-r border-[#222324] 
        flex flex-col justify-between transition-all duration-500 
        ${isOpen ? 'w-40' : 'w-20'}
      `}
    >
      {/* Top Section */}
      <div className="flex flex-col items-center gap-6">
        <div className="w-full h-[87px] flex items-center justify-center">
          <button onClick={toggleSidebar} className="text-white">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <div className="hidden sm:flex flex-col gap-10 w-full items-center">
          <SidebarItem icon={<HomeIcon active />} label="Home" isOpen={isOpen} path="/dashboard" />
          <SidebarItem icon={<BellIcon />} label="Alerts" isOpen={isOpen} path="/notfound" />
          <SidebarItem icon={<RecordIcon />} label="Media" isOpen={isOpen} path="/notfound" />
          <SidebarItem icon={<CloudIcon />} label="Upload" isOpen={isOpen} path="/notfound" />
          <SidebarItem icon={<SettingIcon />} label="Settings" isOpen={isOpen} path="/notfound" />
        </div>
      </div>

      {/* Bottom Profile */}
      <div className="flex items-center justify-center mb-4">
        <SidebarItem icon={<User className="w-5 h-5" />} label="Profile" isOpen={isOpen} path="/profile" />
      </div>
    </div>
  );
};

const SidebarItem = ({
  icon,
  label,
  isOpen,
  path,
}: {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
  path: string;
}) => {
  const navigate = useNavigate();
  return (
    <button
      className={`
        flex items-center gap-3 text-white text-sm w-full px-3 py-2 cursor-pointer
        ${isOpen ? 'justify-start' : 'justify-center'}
      `}
      onClick={() => navigate(path)}
    >
      {icon}
      {isOpen && <span>{label}</span>}
    </button>
  );
};

export default Sidebar;
