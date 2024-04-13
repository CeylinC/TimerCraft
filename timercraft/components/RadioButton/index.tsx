import { IProp } from "./_type";

export default function RadioButton({ label, className, ...props }: IProp) {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <input type="radio" className={`w-4 h-4 accent-black`} {...props} />
      <label
        className={`ml-2 text-sm ${props.disabled && "text-gray-300"}`}
        htmlFor={props.id}
      >
        {label}
      </label>
    </div>
  );
}
