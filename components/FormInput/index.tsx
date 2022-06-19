import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { IProps } from "./Types";

const FormInput: React.FC<IProps> = ({ id, type, label, placeholder }) => {
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input id={id} type={type} placeholder={placeholder} />
    </FormControl>
  );
};

export default FormInput;
