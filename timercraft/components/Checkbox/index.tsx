import { IProp } from "./_type";

export default function Checkbox({ className, ...props }: IProp) {
  return (
    <input
      type="checkbox"
      className={`w-4 h-4 cursor-pointer accent-inputActive ${className}`}
      {...props}
    />
  );
}
