import { IProp } from "./_type";

export default function Title({ className, title, children }: IProp) {
  return (
    <>
      <p className={`font-semibold ${className}`}>{title}</p>
      <div
        className={
          className === undefined
            ? "my-4"
            : className.includes("text-2xl")
            ? "my-6"
            : "my-4"
        }
      >
        {children}
      </div>
    </>
  );
}
