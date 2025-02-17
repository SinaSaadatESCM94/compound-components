import { twClassNames } from "../../utils";
import { FieldsetProps } from "./fieldset.interface";

export const Fieldset = ({ children, className }: FieldsetProps) => {
  return (
    <fieldset className={twClassNames("w-full flex flex-col", className)}>
      {children}
    </fieldset>
  );
};
