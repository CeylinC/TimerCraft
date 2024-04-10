import React from "react";

interface IProp {
  placeholder: string;
  width?: number;
  isDisabled?: boolean;
}
export default function Title({
  placeholder,
  width,
  isDisabled = false,
}: IProp) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      disabled={isDisabled}
      className={`outline-none text-gray-400 border py-2 px-4 rounded-lg focus:border-black focus:text-black ${
        width && `w-[${width}px]`
      }`}
    />
  );
}
