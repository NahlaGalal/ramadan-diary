import { AddIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Input, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { IFormUIProps } from "./Types";

const FormUI: NextPage<IFormUIProps> = ({
  register,
  errors,
  onSubmit,
  placeholder,
}) => {
  return (
    <HStack as="form" mt={6} gap={4} onSubmit={onSubmit} wrap={"wrap"}>
      <IconButton
        type="submit"
        icon={<AddIcon width={7} height={7} />}
        aria-label="Add goal"
        width={"14"}
        height={"14"}
        bg="brand.green"
        borderRadius={"full"}
        m={0}
      />

      <Input
        color="brand.white"
        py={2}
        px={4}
        border="2px solid"
        borderColor={"brand.secondary"}
        borderRadius="xl"
        placeholder={placeholder}
        m={0}
        flex={1}
        {...register("text", { required: "يجب كتابة الحقل قبل التسجيل" })}
      />

      {errors.text && (
        <Text role={"alert"} fontSize={12} color="red" mt={1} w="full">
          {errors.text.message}
        </Text>
      )}
    </HStack>
  );
};

export default FormUI;
