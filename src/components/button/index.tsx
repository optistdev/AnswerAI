import { type LucideIcon } from "lucide-react";

interface ButtonProps {
  className: string;
  label: string;
  icon?: LucideIcon;
  onClick: () => void;
}

const CustomizedButton = ({
  className,
  icon: Icon,
  label,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`py-[7px] px-5 justify-center border-[0.67px] border-[#5a5a5a] bg-[#242424] rounded-[4px] text-white text-[16px] font-semibold
        active:scale-95 transition-all duration-200 flex gap-2.5 items-center ${className}`}
      onClick={onClick}
    >
      {!!Icon && <Icon size={18} />}
      {label}
    </button>
  );
};

export default CustomizedButton;
