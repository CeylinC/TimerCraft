import clsx from "clsx";
import { IProp } from "./_type";

export default function Title({ className, title }: IProp) {
  return (
    <p
      className={clsx(
        "font-semibold text-title",
        className,
        className === undefined
          ? "my-4"
          : className.includes("text-2xl")
          ? "my-6"
          : "my-4"
      )}
    >
      {title}
    </p>
  );
}
