import { twClassNames } from "../../utils";
import { CompoundInputProps } from "./compoundInput.interface";

export const CompoundInput = ({
  tabIndex = 0,
  id = "compoundInput",
  name = "compoundInput",
  type = "text",
  value = "",
  className = "",
  placeholder = "",
  onChange,
}: CompoundInputProps) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      tabIndex={tabIndex}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={twClassNames(
        "w-full h-10 flex items-center rounded-lg border border-neutral bg-light text-primary focus:border-primary outline-none text-primary text-lg px-2 compoundInput-container",
        className
      )}
      role="textbox"
    />
  );
};
