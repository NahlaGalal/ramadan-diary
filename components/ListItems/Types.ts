import { FieldError, UseFormRegister } from "react-hook-form";

export interface IListItemsProps {
  data: {
    id: number;
    text: string;
  }[];
}

export interface IFormFields {
  text: string;
}

export interface IFormUIProps {
  register: UseFormRegister<IFormFields>;
  errors: {
    text?: FieldError | undefined;
  };
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  placeholder: string
}
