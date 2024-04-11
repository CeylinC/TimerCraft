import React, { InputHTMLAttributes } from "react";

interface IProp extends InputHTMLAttributes<HTMLInputElement> {}
export default function Checkbox({ ...props }: IProp) {
  return (
    <input
      type="checkbox"
      className={`w-4 h-4 accent-black`}
      {...props}
    />
  );
}
