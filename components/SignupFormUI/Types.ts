import { FieldError, UseFormRegister } from "react-hook-form";

export interface IFormFields {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface IFormUIProps {
  register: UseFormRegister<IFormFields>;
  errors: {
    name?: FieldError | undefined;
    email?: FieldError | undefined;
    password?: FieldError | undefined;
    confirm_password?: FieldError | undefined;
  };
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}
