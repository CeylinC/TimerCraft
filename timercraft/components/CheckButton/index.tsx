import clsx from "clsx";
import Checkbox from "../Checkbox";
import { IProp } from "./_type";

export default function CheckButton({ label, className, ...props }: IProp) {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <Checkbox {...props} />
      <label
        className={clsx(
          "ml-2 text-sm text-label",
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
