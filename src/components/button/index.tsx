interface ButtonProps {
  className: string;
  label: string;
  onClick: () => void;
}

const CustomizedButton = ({ className, label, onClick }: ButtonProps) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <button
        className="w-full h-full py-2 px-3 flex items-center justify-center border border-[#5a5a5a] bg-[#242424] rounded-[4px] text-white text-lg font-semibold
        active:scale-95 transition-all duration-200"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default CustomizedButton;
