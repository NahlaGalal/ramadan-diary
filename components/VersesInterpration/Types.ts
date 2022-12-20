import { FieldError, UseFormRegister } from "react-hook-form";

export interface IListProps {
  data: {
    id: number;
    verses: string;
    interpration: string;
  }[];
}

export interface IProps {
  data: IListProps["data"];
  onSubmitHandler: (body: IFormFields) => Promise<void>;
}

export interface IFormFields {
  verses: string;
  interpration: string;
}

export interface IFormUIProps {
  register: UseFormRegister<IFormFields>;
  errors: {
    verses?: FieldError | undefined;
    interpration?: FieldError | undefined;
  };
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}
