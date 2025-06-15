import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Search, X } from "lucide-react";
import MenuBarIcon from "../../assets/icons/MenuBarIcon";
import SearchInput from "../../components/input/SearchInput";
import Button from "../../components/button";
import useAppDispatch from "../../hooks/global/useAppDispatch";
import { setIsMenuOpen } from "../../store/slices/loading.slice";

const tabs = [
  { name: "Charging Stations", key: "charging" },
  { name: "Fleet Sizing", key: "fleet" },
  { name: "Parking", key: "parking" },
];

const Header = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const showTabs = location.pathname === "/dashboard";

  return (
    <>
      <div className="flex justify-between items-center w-full h-16 md:h-[87px] px-4 md:px-6 pt-2 md:pt-5">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button
            className="md:hidden flex items-center justify-center text-white h-[37px] px-3"
            onClick={() => dispatch(setIsMenuOpen(true))}
          >
            <MenuBarIcon />
          </button>

          {showTabs && (
            <div className="flex gap-2 overflow-x-auto">
              {tabs.map((tab, index) => (
                <TabItem
                  key={tab.key}
                  name={tab.name}
                  active={index === 0}
                  onClick={() => console.log(tab.name)}
                />
              ))}
            </div>
          )}

          <Button
            className="block md:hidden p-1"
            onClick={() => setShowMobileSearch(true)}
            icon={<Search size={14} />}
          />
        </div>

        <div className="hidden md:block h-[37px]">
          <SearchInput className="h-full w-40 lg:w-auto" />
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {showMobileSearch && (
        <div className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a] px-4 py-3 flex items-center gap-2">
          <SearchInput className="flex-1 h-10 text-sm" />
          <Button
            className="p-2"
            icon={<X size={18} />}
            onClick={() => setShowMobileSearch(false)}
          />
        </div>
      )}
    </>
  );
};

interface TabProps {
  active: boolean;
  name: string;
  onClick: () => void;
}

const TabItem = ({ active, name, onClick }: TabProps) => (
  <button
    className={`h-[37px] px-3 md:px-5 text-[10px] lg:text-[16px] rounded-sm flex items-center text-white cursor-pointer
      ${active ? "bg-[#242424] border border-[#5A5A5A]" : "bg-transparent"}`}
    onClick={onClick}
  >
    {name}
  </button>
);

export default Header;
