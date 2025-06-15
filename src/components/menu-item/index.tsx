import HomeIcon from '../../assets/icons/HomeIcon';
import BellIcon from '../../assets/icons/BellIcon';
import CloudIcon from '../../assets/icons/CloudIcon';
import RecordIcon from '../../assets/icons/RecordIcon';
import SettingIcon from '../../assets/icons/SettingIcon';
import AccountIcon from '../../assets/icons/AccountIcon';
const SidebarItem = ({
  label,
  isOpen,
  path,
  id,
  active = false,
  onClick,
}: {
  label: string;
  isOpen: Boolean;
  path: string;
  active?: Boolean;
  id: string;
  onClick: (id: string, path: string) => void;
}) => {
  const renderIcon = (id: string, active: boolean) => {
    switch (id) {
      case 'home':
        return <HomeIcon active={active} />;
      case 'bell':
        return <BellIcon active={active} />;
      case 'record':
        return <RecordIcon active={active} />;
      case 'cloud':
        return <CloudIcon active={active} />;
      case 'setting':
        return <SettingIcon active={active} />;
      case 'account':
        return <AccountIcon />;
      default:
        return null;
    }
  };
  return (
    <div className=" group relative">
      <button
        className={`
        flex items-center gap-3
        ${active ? 'text-white' : 'text-[#858882]'}
        text-sm px-3 py-2 cursor-pointer mx-2 h-12
        ${active ? 'border-[#5f5f5f] rounded-xl border bg-[#292929]' : ''}
        ${isOpen ? 'justify-start w-40' : 'justify-center w-12'}
        transition-[width] duration-300 ease-in-out 
      `}
        onClick={() => onClick(id, path)}
      >
        {renderIcon(id, !!active)}
        {isOpen && <span>{label}</span>}
      </button>
      {/* Tooltip when sidebar is collapsed */}
      {!isOpen && label !== 'Profile' && (
        <div
          className="
            absolute left-full top-1/2 -translate-y-1/2 ml-2
            bg-[#292929] text-white text-xs px-2 py-1 rounded-md
            whitespace-nowrap opacity-0 group-hover:opacity-100
            transition-opacity duration-500 z-50
          "
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
