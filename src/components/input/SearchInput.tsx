import React from "react";
import { Icons } from "../../utils/icons";
interface InputProps {
  className: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<InputProps> = ({
  className,
  onChange,
}) => {
  return (
    <div
      className={`relative ${className}`}
    >
      <Icons.Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
        size={16}
      />
      <input
        placeholder={"Search"}
        type="search"
        onChange={onChange}
        className={`
          w-full h-full pl-10 pr-4 py-2 rounded-[5px] bg-[#1a1a1a] border-[1px] border-gray-600 text-white placeholder-gray-400 outline-none focus:ring-1 focus:ring-gray-400
        `}
      />
    </div>
  );
};

export default SearchInput;
