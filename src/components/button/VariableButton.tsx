import { Check, Plus } from "lucide-react";
import { SparklesIcon } from "../../utils/icons";

type VariableButtonProps = {
  label: string;
  selected?: boolean;
  onClick: () => void;
  onMouseEnter: (desc: String, title: String) => void;
  onMouseLeave: () => void;
  desc: String;
};

export const VariableButton = ({
  label,
  selected = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  desc,
}: VariableButtonProps) => {
  return (
    <div className="relative group cursor-pointer">
      <button
        onClick={onClick}
        className={`flex items-center gap-[15px] px-4 py-1 rounded-full border text-[15px] tracking-[0%] leading-[150%] font-normal transition-colors cursor-pointer
          ${
            selected
              ? "bg-[#282E16] text-lime-400 border-[#C9FF3B]"
              : "bg-[#5959594D] text-gray-300 border-[#EEEEEE]"
          }`}
        onMouseEnter={() => onMouseEnter(desc, label)}
        onMouseLeave={onMouseLeave}
      >
        {label}
        <div className="flex gap-2">
          <span className="text-xs">
            <SparklesIcon className="w-3 h-3" selected={selected} />
          </span>
          <span>{selected ? <Check size={14} /> : <Plus size={14} />}</span>
        </div>
      </button>

      {/* Tooltip or indicator */}

      {selected && (
        <div
          className="
          w-[calc(100%-20px)] h-[8px] rounded-full
          absolute bottom-[-2px] left-[10px]
          [background:linear-gradient(90deg,_#3BFF72_0%,_#C9FF3B_52%)]
          backdrop-blur-[20px]
          opacity-0 group-hover:opacity-20 transition-opacity duration-200 z-40
        "
        ></div>
      )}
    </div>
  );
};

export default VariableButton;
