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
  setSelected,
  className,
}: IProp) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useOutsideClick(() => setIsOpen(false));

  return (
    <div className={`relative w-44 ${className}`} ref={menuRef}>
      <button
        className={clsx(
          "bg-gray-100 outline-none rounded-lg text-sm px-4 py-[10.5px] inline-flex items-center justify-between w-full",
          "hover:bg-gray-300"
        )}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isDisabled}
      >
        {selected?.name}
        <DropdownAppearanceIcon />
      </button>
      {isOpen && (
        <div className="z-10 bg-gray-100 rounded-lg mt-2 absolute w-full">
          <ul className="py-2 text-sm">
            {menuItems.map((item) => {
              return (
                <li
                  key={item.value}
                  className={clsx(
                    "block px-4 py-2 cursor-pointer",
                    "hover:bg-gray-200",
                    item.value === selected.value && "font-bold"
                  )}
                  onClick={() => {
                    setSelected(item);
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
