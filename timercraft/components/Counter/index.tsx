import clsx from "clsx";
import { IProp } from "./_type";

export default function Counter({ number, className }: IProp) {
  return (
    <div
      className={clsx(
        "text-2xl inline-block leading-5 font-bold px-[5px] py-2 rounded m-px bg-emerald-700",
        className
      )}
    >
      {number}
    </div>
  );
}
