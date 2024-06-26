"use client";
import DropdownAppearanceIcon from "@/asset/DropdownAppearanceIcon";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import clsx from "clsx";
import { useState } from "react";
import { IProp } from "./_type";

export default function Dropdown({
  menuItems,
  isDisabled = false,
  selected,
  onChange,
  className,
}: IProp) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useOutsideClick(() => setIsOpen(false));

  return (
    <div className={`relative w-44 ${className}`} ref={menuRef}>
      <button
        className={clsx(
          "bg-inputBackground outline-none rounded-lg text-sm px-4 py-[10.5px] inline-flex items-center justify-between w-full text-labelActive",
          "hover:bg-inputHover",
          isDisabled && "cursor-not-allowed"
        )}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isDisabled}
      >
        {menuItems.filter((item) => item.value === selected)[0].name}
        <DropdownAppearanceIcon />
      </button>
      {isOpen && (
        <div className="z-10 bg-inputBackground rounded-lg mt-2 absolute w-full">
          <ul className="py-2 text-sm">
            {menuItems.map((item, index) => {
              return (
                <li
                  key={index}
                  id={item.value}
                  className={clsx(
                    "block px-4 py-2 cursor-pointer text-labelActive",
                    "hover:bg-inputHover",
                    item.value === selected && "font-bold"
                  )}
                  onClick={(event) => {
                    onChange(event);
                    setIsOpen(!isOpen);
                  }}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
