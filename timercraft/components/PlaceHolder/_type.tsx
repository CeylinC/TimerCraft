import { InputHTMLAttributes } from "react";

export interface IProp extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  className?: string;
}