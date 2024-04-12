"use client";
import DropdownAppearanceIcon from "@/app/asset/DropdownAppearanceIcon";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";
import { useEffect, useState } from "react";

interface IProp {
  menuItems: { name: string; value: string }[];
  isDisabled?: boolean;
  selected: { name: string; value: string };
  setSelected: (selected: { name: string; value: string }) => void;
}
export default function Dropdown({
  menuItems,
  isDisabled = false,
  selected,
  setSelected,
}: IProp) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useOutsideClick(() => setIsOpen(false));

  return (
    <div className="w-44" ref={menuRef}>
      <button
        className="bg-gray-100 hover:bg-gray-300 outline-none rounded-lg text-sm px-4 py-[10.5px] inline-flex items-center justify-between w-full"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isDisabled}
      >
        {selected?.name}
        <DropdownAppearanceIcon />
      </button>
      {isOpen && (
        <div id="dropdown" className="z-10 bg-gray-100 rounded-lg mt-2">
          <ul className="py-2 text-sm">
            {menuItems.map((item) => {
              return (
                <li
                  key={item.value}
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => {setSelected(item); setIsOpen(!isOpen)}}
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
