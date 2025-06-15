import SearchInput from '../../components/input/SearchInput';
import { useLocation } from 'react-router-dom';
import MenuBarIcon from '../../assets/icons/MenuBarIcon';
import useAppDispatch from '../../hooks/global/useAppDispatch';
import { setIsMenuOpen } from '../../store/slices/loading.slice';

const Header = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const menuBarClickHandler = () => {
    dispatch(setIsMenuOpen(true));
  };
  return (
    <div className="flex justify-between w-full items-center h-[87px] px-6 py-5">
      <div className="flex h-[37px]">
        <button
          className="md:hidden px-3 h-full flex items-center justify-center text-white"
          onClick={menuBarClickHandler}
        >
          <MenuBarIcon />
        </button>
        {location?.pathname == '/dashboard' && (
          <>
            <TabItem
              name="Charging Stations"
              active
              onClick={() => console.log('Charging Stations')} //set tab to charging station
            />
            <TabItem
              name="Fleet Sizing"
              active={false}
              onClick={() => console.log('Fleet Sizing')} //set tab to fleet sizing
            />
            <TabItem
              name="Parking"
              active={false}
              onClick={() => console.log('Parking')} //set tab to fleet parking
            />
          </>
        )}
      </div>
      <div className="h-[37px] hidden md:block">
        <SearchInput className="h-full" />
      </div>
    </div>
  );
};

interface TabProps {
  active: boolean;
  name: string;
  onClick: () => void;
}

const TabItem = ({ active, name, onClick }: TabProps) => {
  return (
    <button
      className={`${
        active ? 'bg-[#242424] border-[0.67px] border-[#5A5A5A]' : ''
      } px-2 md:px-5 h-[37px] text-[12px] md:text-[16px] text-white flex items-center rounded-sm cursor-pointer`}
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
};

export default Header;
