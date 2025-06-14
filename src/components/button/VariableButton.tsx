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
      className={`flex items-center gap-2 px-4 py-1 rounded-full border text-sm transition-colors
        ${
          selected
            ? "bg-lime-500/10 text-lime-400 border-lime-400"
            : "bg-[#1a1a1a] text-gray-300 border-gray-600"
        }`}
    >
      {label}
      <span className="text-xs">
        <Icons.Sparkles />
      </span>
      <span>{selected ? <Icons.Check /> : <Icons.Plus />}</span>
    </button>
  );
};

export default VariableButton;
