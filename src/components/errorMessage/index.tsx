import { ErrorMessageProps } from "./errorMessage.interface";

export const ErrorMessage = ({ textError }: ErrorMessageProps) => {
  return (
    <span role="alert" className="w-full flex text-sm text-error pt-2">
      {textError}
    </span>
  );
};
