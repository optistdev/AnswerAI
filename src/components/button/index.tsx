interface ButtonProps {
  className: string;
  label?: string;
  icon?: React.ReactElement;
  onClick: () => void;
}

const CustomizedButton = ({
  className,
  icon,
  label,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer border-[0.67px] border-[#5a5a5a] bg-[#242424] rounded-[4px] text-white text-[16px] font-semibold
        active:scale-95 transition-all duration-200 flex gap-2.5 items-center justify-center ${className}`}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
};

export default CustomizedButton;
