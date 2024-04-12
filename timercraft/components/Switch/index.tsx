import clsx from "clsx";
import { IProp } from "./_type";

export default function Switch({ className, ...props }: IProp) {
  return (
    <input
      className={clsx(
        `cursor-pointer h-6 w-11 relative appearance-none rounded-full bg-gray-200 transition-[background-color] ${className}`,
        "after:absolute after:z-[1] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform after:content-[''] after:top-0.5 after:translate-x-0.5 after:shadow-md",
        "checked:bg-black checked:after:translate-x-[22px]",
        "disabled:bg-gray-300 disabled:cursor-not-allowed"
      )}
      type="checkbox"
      {...props}
    />
  );
}
