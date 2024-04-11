import React, { InputHTMLAttributes } from "react";

interface IProp extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export default function RadioButton({ label, ...props }: IProp) {
  return (
    <div className="flex flex-row items-center">
      <input type="radio" className={`w-4 h-4 accent-black`} {...props} />
      <label
        className={`ml-2 text-sm ${props.disabled && "text-gray-300"}`}
        htmlFor={props.id}
      >
        {label}
      </label>
    </div>
  );
}
