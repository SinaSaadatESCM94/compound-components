import { ErrorMessageProps } from "./errorMessage.interface";

export const ErrorMessage = ({ textError }: ErrorMessageProps) => {
  return (
    <span role="alert" className="w-full h-5 flex text-xs text-error pt-1">
      {textError}
    </span>
  );
};
