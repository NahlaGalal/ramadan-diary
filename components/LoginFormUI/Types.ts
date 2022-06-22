import { FieldError, UseFormRegister } from "react-hook-form";

export interface IFormFields {
  email: string;
  password: string;
}

export interface IFormUIProps {
  register: UseFormRegister<IFormFields>;
  errors: {
    email?: FieldError | undefined;
    password?: FieldError | undefined;
  };
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}
