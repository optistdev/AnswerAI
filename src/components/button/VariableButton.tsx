import { Icons } from "../../utils/icons";

type VariableButtonProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

export const VariableButton = ({
  label,
  selected,
  onClick,
}: VariableButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-[15px] px-4 py-1 rounded-full border text-[15px] tracking-[0%] leading-[150%] font-normal transition-colors
        ${
          selected
            ? "bg-[#282E16] text-lime-400 border-border-secondary"
            : "bg-[#1a1a1a] text-gray-300 border-[#EEEEEE]"
        }`}
    >
      {label}
      <div className="flex gap-2">
        <span className="text-xs">
          <Icons.Sparkles size={14} />
        </span>
        <span>
          {selected ? <Icons.Check size={14} /> : <Icons.Plus size={14} />}
        </span>
      </div>
    </button>
  );
};

export default VariableButton;
