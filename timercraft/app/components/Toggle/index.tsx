import React, { InputHTMLAttributes } from "react";
import Switch from "../Switch";

interface IProp extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export default function Toggle({ label, ...props }: IProp) {
  return (
    <div className="flex flex-row items-center">
      <Switch {...props} />
      <label className={`ml-2 text-sm ${props.disabled && "text-gray-300"}`} htmlFor={props.id}>{label}</label>
    </div>
  );
}
