import { InputHTMLAttributes } from "react";

export interface IProp extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}