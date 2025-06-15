import { X, Info } from 'lucide-react';
import SearchInput from '../../components/input/SearchInput';
import Button from '../../components/button';
import RefreshIcon from '../../assets/icons/RefreshIcon';
import SparklesIcon from '../../assets/icons/SparklesIcon';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import VariableButton from '../../components/button/VariableButton';

interface EditVariablesProps {
  onClick: () => void;
  className: String;
}

const EditVariables = ({ onClick, className }: EditVariablesProps) => {
  const [showPrimary, setShowPrimary] = useState(true);
  const [showSecondary, setShowSecondary] = useState(true);
  const changeHandler = () => {};
  const reRunHandler = () => {};
  const autofillHandler = () => {};
  const variableClickHandler = () => {};
  return (
    <div className={`bg-black/50 z-50 backdrop-blur-xs fixed top-0 left-0 w-screen flex justify-end ${className}`}>
      <div className="w-172 bg-[#0E0D0D] h-screen border border-l-2 border-[#525252] relative px-7 py-3 overflow-y-scroll">
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
          <Button className="h-9" onClick={reRunHandler} label="Rerun" icon={<RefreshIcon className="w-5 h-5" />} />
        </div>
        <div className="bg-[#161618] border border-[#525252] rounded-sm">
          <div className="h-101 border border-b border-[#525252] py-8 px-6 overflow-y-scroll">
            <div className="mb-8">
              <div className="text-[#D5D5D5] mb-5">Variable category 1</div>
              <div className="flex gap-4 flex-wrap">
                <VariableButton label="Carbon1" onClick={variableClickHandler} />
                <VariableButton label="Co2 Distribution" selected onClick={variableClickHandler} />
                <VariableButton label="Fleet Sizing" selected onClick={variableClickHandler} />
              </div>
            </div>
            <div className="mb-8">
              <div className="text-[#D5D5D5] mb-5">Variable category 2</div>
              <div className="flex gap-4 flex-wrap">
                <VariableButton label="Parking Rate" onClick={variableClickHandler} />
                <VariableButton label="Border Rate" selected onClick={variableClickHandler} />
                <VariableButton label="Request Rate" selected onClick={variableClickHandler} />
                <VariableButton label="Variable 1" onClick={variableClickHandler} />
                <VariableButton label="Variable 1" onClick={variableClickHandler} />
                <VariableButton label="Variable 1" selected onClick={variableClickHandler} />
              </div>
            </div>
            <div className="mb-8">
              <div className="text-[#D5D5D5] mb-5">Variable category 3</div>
              <div className="flex gap-4 flex-wrap">
                <VariableButton label="Variable 1" onClick={variableClickHandler} />
                <VariableButton label="Variable 1" selected onClick={variableClickHandler} />
                <VariableButton label="Variable 1" selected onClick={variableClickHandler} />
              </div>
            </div>
          </div>
          <div className="bg-[#222324] py-8 px-8">
            <div className="flex items-center gap-3  pb-4">
              <p className="font-body text-[24px] font-medium">Co2 Distribution</p>
              <Info className="w-4 h-4 text-white" />
            </div>
            <p className="font-body text-[15px] font-normal text-[#BBBBBB]">
              But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a
              skateboard, making it suitable for people of all ages. Whether you're a student, a professional, or a
              senior citizen, Switch adapts to your needs and lifestyle.
            </p>
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
