import Checkbox from "../Checkbox";
import { IProp } from "./_type";

export default function CheckButton({ label, className, ...props }: IProp) {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <Checkbox {...props} />
      <label
        className={`ml-2 text-sm ${props.disabled && "text-gray-300"}`}
        htmlFor={props.id}
      >
        {label}
      </label>
    </div>
  );
}
