import clsx from "clsx";
import Switch from "../Switch";
import { IProp } from "./_type";

export default function Toggle({ label, className, ...props }: IProp) {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <Switch {...props} />
      <label
        className={clsx(
          "ml-2 text-sm",
          props.disabled && "text-disabled cursor-not-allowed",
          props.checked && "text-labelActive"
        )}
        htmlFor={props.id}
      >
        {label}
      </label>
    </div>
  );
}
