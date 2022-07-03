import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { inputsValidation } from "../../utils/validations";
import FormInput from "../FormInput";
import { IFormUIProps } from "./Types";

const SignupFormUI: React.FC<IFormUIProps> = ({
  register,
  onSubmit,
  errors,
  password
}) => {
  return (
    <VStack as="form" onSubmit={onSubmit} spacing={"24px"} color="#fff">
      {/* Name */}
      <FormInput
        id="name"
        type="text"
        label="الاسم"
        placeholder="اكتب اسمك هنا..."
        register={register("name", inputsValidation("name"))}
        error={errors.name}
      />

      {/* Email */}
      <FormInput
        id="email"
        type="email"
        label="البريد اﻹلكتروني"
        placeholder="اكتب البريد اﻹلكتروني هنا..."
        register={register("email", inputsValidation("email"))}
        error={errors.email}
      />

      {/* Password */}
      <FormInput
        id="password"
        type="password"
        label="كلمة السر"
        placeholder="اكتب كلمة السر هنا..."
        register={register("password", inputsValidation("password"))}
        error={errors.password}
      />

      {/* Confirm password */}
      <FormInput
        id="confirm_password"
        type={"password"}
        label="إعادة كلمة السر"
        placeholder="اعد كتابة كلمة السر هنا..."
        register={register(
          "confirm_password",
          inputsValidation("confirm_password", password)
        )}
        error={errors.confirm_password}
      />

      {/* Submit button */}
      <Button
        type="submit"
        mt="auto"
        mb={6}
        bg="var(--chakra-colors-brand-green)"
        border={"1px solid var(--chakra-colors-brand-green)"}
        py={3}
        px={10}
        fontSize={"lg"}
        borderRadius={"md"}
        fontWeight="500"
        color={"var(--chakra-colors-brand-white)"}
        _hover={{ bg: "transparent" }}
        _active={{ bg: "tranparent" }}
      >
        تسجيل
      </Button>
    </VStack>
  );
};

export default SignupFormUI;
