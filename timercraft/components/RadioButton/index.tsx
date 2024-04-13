import clsx from "clsx";
import { IProp } from "./_type";

export default function RadioButton({ label, className, ...props }: IProp) {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <input type="radio" className={`w-4 h-4 accent-inputActive`} {...props} />
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
