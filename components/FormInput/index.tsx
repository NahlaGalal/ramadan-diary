import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { IProps } from "./Types";

const FormInput: React.FC<IProps> = ({ id, type, label, placeholder }) => {
  return (
    <FormControl>
      <FormLabel
        htmlFor={id}
        fontSize="lg"
        color={"var(--chakra-colors-brand-secondary)"}
        fontWeight={500}
      >
        {label}
      </FormLabel>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        borderRadius={20}
        borderColor="var(--chakra-colors-brand-secondary)"
        _focus={{
          borderColor: "var(--chakra-colors-whiteAlpha-400)",
        }}
      />
    </FormControl>
  );
};

export default FormInput;
