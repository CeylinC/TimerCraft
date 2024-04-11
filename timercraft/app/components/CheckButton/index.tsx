import React, { InputHTMLAttributes } from "react";
import Checkbox from "../Checkbox";

interface IProp extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export default function CheckButton({ label, ...props }: IProp) {
  return (
    <div className="flex flex-row items-center">
      <Checkbox {...props} />
      <label className={`ml-2 text-sm ${props.disabled && "text-gray-300"}`} htmlFor={props.id}>{label}</label>
    </div>
  );
}
