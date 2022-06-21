import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface IProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  error: FieldError | undefined;
}
