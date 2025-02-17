import { Label, ErrorMessage } from "../../components";
import { twClassNames } from "../../utils";
import { NonCompoundInputProps } from "./nonCompoundInput.interface";

export const NonCompoundInput = ({
  tabIndex = 0,
  type = "text",
  id = "nonCompoundInput",
  name = "nonCompoundInput",
  onChange,
  value = "",
  className = "",
  placeholder = "",
  label = "",
  labelClassName = "",
  errorMessage = undefined,
}: NonCompoundInputProps) => {
  return (
    <div className="w-full flex flex-col">
      {!!label && <Label text={label} className={labelClassName} />}
      <input
        id={id}
        name={name}
        type={type}
        tabIndex={tabIndex}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={twClassNames(
          "w-full h-10 flex items-center rounded-lg border border-neutral bg-light text-primary focus:border-primary outline-none text-primary text-lg px-2 nonCompoundInput-container",
          className
        )}
        role="textbox"
      />
      {errorMessage !== undefined && <ErrorMessage textError={errorMessage} />}
    </div>
  );
};
