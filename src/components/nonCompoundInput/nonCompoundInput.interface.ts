import { InputHTMLAttributes } from "react";

export interface NonCompoundInputProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    | "id"
    | "name"
    | "type"
    | "value"
    | "onChange"
    | "placeholder"
    | "tabIndex"
    | "className"
  > {
  label?: string;
  labelClassName?: string;
  errorMessage?: string;
}
