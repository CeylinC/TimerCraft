import clsx from "clsx";
import { IProp } from "./_type";

export default function PlaceHolder({
  placeholder,
  className,
  ...props
}: IProp) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={clsx(
        `text-sm outline-none text-gray-400 border py-2 px-4 rounded-lg ${className}`,
        "focus:border-black focus:text-black"
      )}
      {...props}
    />
  );
}
