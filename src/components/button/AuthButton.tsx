interface ButtonProps {
  className: string;
  label: string;
  type?: 'button' | 'submit' | 'reset';
  img?: string;
  onClick?: () => void;
}

const AuthButton = ({ className, label, type, img, onClick }: ButtonProps) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <button
        className="w-full h-full flex items-center justify-center rounded- text-white text-lg font-semibold
        bg-gradient-to-r from-blue-500 dark:from-cyan-400 via-purple-500 dark:via-sky-500 to-pink-500 dark:to-blue-600
        hover:from-blue-600 dark:hover:from-cyan-500 hover:via-purple-600 dark:hover:via-sky-600 hover:to-pink-600 dark :hover:to-blue-700
        active:scale-95 transition-all duration-200"
        onClick={onClick}
        type={type}
      >
        {img && <img src={img} className="w-7 h-7 mr-2" />}
        {label}
      </button>
    </div>
  );
};

export default AuthButton;
