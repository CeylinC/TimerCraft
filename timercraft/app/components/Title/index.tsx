import React from "react";

interface IProp {
  fontSize?: number;
  fontWeight?: "normal" | "bold";
  children: React.ReactNode;
}
export default function Title({
  fontSize = 16,
  fontWeight = "normal",
  children,
}: IProp) {
  return (
    <p className={`text-[${fontSize}px] font-${fontWeight}`}>{children}</p>
  );
}
