import Switch from "../Switch";
import { IProp } from "./_type";

export default function Toggle({ label, className, ...props }: IProp) {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <Switch {...props} />
      <label
        className={`ml-2 text-sm ${props.disabled && "text-gray-300"}`}
        htmlFor={props.id}
      >
        {label}
      </label>
    </div>
  );
}
