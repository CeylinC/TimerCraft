import { InputHTMLAttributes } from "react";

export interface IProp extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    className?: string;
  }