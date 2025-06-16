import { useRef, useState } from 'react';
import { X, Info, ChevronUp, ChevronDown } from 'lucide-react';

import SearchInput from '../../components/input/SearchInput';
import Button from '../../components/button';
import VariableButton from '../../components/button/VariableButton';
import useAppDispatch from '../../hooks/global/useAppDispatch';
import useAppSelector from '../../hooks/global/useAppSelector';
import { setSelectedVariables } from '../../store/slices/variables.slice';
import { variables } from '../../utils/data';
import {SparklesIcon,RefreshIcon} from "../../utils/icons"

interface EditVariablesProps {
  onClick: () => void;
  className: String;
}

const EditVariables = ({ onClick, className }: EditVariablesProps) => {
  const [showPrimary, setShowPrimary] = useState(true);
  const [showSecondary, setShowSecondary] = useState(true);
  const { selectedVariables } = useAppSelector((state) => state.variables);
  const [showDescription, setShowDescription] = useState({ title: '', desc: '' });
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useAppDispatch();
  const changeHandler = () => {};
  const reRunHandler = () => {
    dispatch(setSelectedVariables([]));
  };
  const autofillHandler = () => {};
  const variableClickHandler = (id: string) => {
    const temp = [...selectedVariables];
    let temp2 = [];
    if (selectedVariables.includes(id)) {
      temp2 = temp.filter((varialbe) => varialbe !== id);
    } else {
      temp2 = [...temp, id];
    }
    dispatch(setSelectedVariables(temp2));
  };

  const handleMouseEnter = (desc?: string, title?: string) => {
    timerRef.current = setTimeout(() => {
      setShowDescription({
        title: title ?? '',
        desc: desc ?? '',
      });
    }, 1500);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setShowDescription({ title: '', desc: '' });
  };
  return (
    <div className={`bg-black/50 z-50 backdrop-blur-xs fixed top-0 left-0 w-screen flex justify-end ${className}`}>
      <div className="w-172 bg-[#0E0D0D] h-screen border border-l-2 border-[#525252] relative px-7 py-3 overflow-y-auto">
        <button className="outline-none cursor-pointer">
          <X className="w-6 h-6 text-white absolute right-7 top-10" onClick={onClick} />
        </button>
        <p className="font-body text-[24px] font-medium">Edit Variables</p>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 my-4">
          <SearchInput onChange={changeHandler} className="sm:col-span-3 gap-1 h-9" />
          <Button
            className="h-9"
            onClick={autofillHandler}
            label="Autofill"
            icon={<SparklesIcon className="w-5 h-5" />}
          />
          <Button
            className="h-9"
            onClick={reRunHandler}
            label="Rerun"
            icon={<RefreshIcon className="w-5 h-5" active={selectedVariables.length > 0} />}
            active={selectedVariables.length > 0}
          />
        </div>
        <div className="bg-[#161618] border border-[#525252] rounded-sm">
          <div className="h-101 border border-b border-[#525252] py-8 px-6 overflow-y-auto">
            {variables.map((item) => {
              return (
                <div className="mb-8" key={item.id}>
                  <div className="text-[#D5D5D5] mb-5">{item.label}</div>
                  <div className="flex gap-4 flex-wrap">
                    {item.variables.map((btn) => {
                      return (
                        <VariableButton
                          key={btn.id}
                          label={btn.label}
                          onMouseEnter={() => handleMouseEnter(btn.description ?? '', btn.label)}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => variableClickHandler(btn.id)}
                          selected={selectedVariables.includes(btn.id)}
                          desc={btn.description ?? ''}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={`
              overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
              ${showDescription.title ? 'max-h-[500px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}
            `}
          >
            <div className="bg-[#222324] py-8 px-8 rounded-md transition-all duration-500 ease-in-out">
              <div className="flex items-center gap-3 pb-4">
                <p className="font-body text-[24px] font-medium">{showDescription.title}</p>
                <Info className="w-4 h-4 text-white" />
              </div>
              <p className="font-body text-[15px] font-normal text-[#BBBBBB]">{showDescription.desc}</p>
            </div>
          </div>
        </div>
        <div className="w-full h-14 bg-[#222324] mt-4 border border-[#525252] rounded-sm flex justify-between items-center px-5">
          <div className="flex justify-between gap-2.5 items-center">
            <p className="text-xl md:text-2xl text-[#DCFF7F]">Primary Variables</p>
          </div>
          <Button
            className="rounded-full border-[#C8E972] border w-11 h-[34px]"
            icon={showPrimary ? <ChevronUp className="text-[#C8E972]" /> : <ChevronDown className="text-[#C8E972]" />}
            onClick={() => setShowPrimary(!showPrimary)}
          />
        </div>
        <div className="w-full h-14 bg-[#222324] mt-4 border border-[#525252] rounded-sm flex justify-between items-center px-5">
          <div className="flex justify-between gap-2.5 items-center">
            <p className="text-xl md:text-2xl text-[#DCFF7F]">Secondary Variables</p>
          </div>
          <Button
            className="rounded-full border-[#C8E972] border w-11 h-[34px]"
            icon={showSecondary ? <ChevronUp className="text-[#C8E972]" /> : <ChevronDown className="text-[#C8E972]" />}
            onClick={() => setShowSecondary(!showSecondary)}
          />
        </div>
      </div>
    </div>
  );
};

export default EditVariables;
