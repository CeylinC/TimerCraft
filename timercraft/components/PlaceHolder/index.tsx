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
        `text-sm outline-none text-label border border-label py-2 px-4 rounded-lg ${className}`,
        "focus:border-labelActive focus:text-labelActive"
      )}
      {...props}
    />
  );
}
