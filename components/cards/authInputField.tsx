"use client";

import React from "react";

interface InputFieldProps {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const authInputField: React.FC<InputFieldProps> = ({
  type,
  name,
  label,
  placeholder,
  error,
  inputRef,
  onChange,
  value,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="mb-3 block text-sm text-dark dark:text-white">
        {label}
      </label>
      <input
        ref={inputRef}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xs border px-6 py-3 text-base outline-none transition-all duration-300 ${
          error
            ? "border-red-500"
            : "border-stroke bg-[#f8f8f8] dark:border-transparent dark:bg-[#2C303B]"
        } dark:text-body-color-dark`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default authInputField;
