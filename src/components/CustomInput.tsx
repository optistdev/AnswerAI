import React from "react";

interface InputProps {
  width: number;
  height: number;
  type?: "text" | "password" | "email";
  placeholder?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  required?: boolean;
}

const CustomizedInput: React.FC<InputProps> = ({
  width,
  height,
  type = "text",
  placeholder,
  error,
  onChange,
  name,
  required = false,
}) => {
  const isPassword = type === "password";

  const inputBorder =
    error && required
      ? "border-red-500 dark:focus:border-red-700 focus:border-red-700"
      : "border border-gray-600";

  return (
    <div style={{ width, height }} className="relative">
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        required={required}
        aria-invalid={!!(error && required)}
        aria-describedby={`${name}-error`}
        className={`
          w-full h-full px-4 rounded-lg bg-[#1a1a1a] focus:outline-none focus:ring-1 focus:ring-gray-400 ${inputBorder}
          placeholder:text-[15px] text-white
          ${isPassword ? "pr-10" : ""}
        `}
      />
      {error && required && (
        <span
          id={`${name}-error`}
          className="text-red-600 text-sm absolute mt-1"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default CustomizedInput;
