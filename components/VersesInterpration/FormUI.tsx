import { AddIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton, Input, Text, Textarea } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { IFormUIProps } from "./Types";

const FormUI: NextPage<IFormUIProps> = ({ register, errors, onSubmit }) => {
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

      <Box flex={1}>
        <Input
          color="brand.white"
          py={2}
          px={4}
          border="2px solid"
          borderColor={"brand.secondary"}
          borderRadius="xl"
          placeholder={"أضف آية..."}
          m={0}
          {...register("verses", { required: "يجب كتابة اﻵية قبل الاضافة" })}
        />

        {errors.verses && (
          <Text role={"alert"} fontSize={12} color="red" mt={1} w="full">
            {errors.verses.message}
          </Text>
        )}

        <Textarea
          color="brand.white"
          py={2}
          px={4}
          border="2px solid"
          borderColor={"brand.secondary"}
          borderRadius="xl"
          placeholder={"أضف التفسير..."}
          m={0}
          mt={4}
          minH={16}
          {...register("interpration", {
            required: "يجب كتابة التفسير قبل الاضافة",
          })}
        />

        {errors.interpration && (
          <Text role={"alert"} fontSize={12} color="red" mt={1} w="full">
            {errors.interpration.message}
          </Text>
        )}
      </Box>
    </HStack>
  );
};

export default FormUI;
