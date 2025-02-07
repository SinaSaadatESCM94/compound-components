import { LabelProps } from "./label.interface";
import { twClassNames } from "../../utils";

export const Label = ({ text, className }: LabelProps) => {
  return (
    <label
      className={twClassNames("w-full flex text-md text-dark pb-2", className)}
    >
      {text}
    </label>
  );
};
