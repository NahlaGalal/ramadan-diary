import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { IProps } from "./Types";

const FormInput: React.FC<IProps> = ({
  id,
  type,
  label,
  placeholder,
  register,
  error,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordHandler = () => {
    setPasswordShown(!passwordShown);
  };

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
      <InputGroup>
        <Input
          id={id}
          type={passwordShown ? "text" : type}
          placeholder={placeholder}
          borderRadius={20}
          borderColor="var(--chakra-colors-brand-secondary)"
          _focus={{
            borderColor: "var(--chakra-colors-whiteAlpha-400)",
          }}
          {...register}
        />
        {type === "password" && (
          <InputRightElement>
            <Button
              onClick={togglePasswordHandler}
              bg={"transparent"}
              _hover={{
                bg: "transparent",
                boxShadow: "none",
              }}
              _active={{
                bg: "transparent",
                boxShadow: "none",
              }}
              _focus={{
                bg: "transparent",
                boxShadow: "none",
              }}
            >
              {passwordShown ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>

      {error && (
        <Text role={"alert"} fontSize={12} color="red" mt={1}>
          {error.message}
        </Text>
      )}
    </FormControl>
  );
};

export default FormInput;
