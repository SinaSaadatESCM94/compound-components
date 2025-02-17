import { InputHTMLAttributes } from "react";

export interface CompoundInputProps
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
  > {}
