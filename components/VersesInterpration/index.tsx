import { Box, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import FormUI from "./FormUI";
import InterprationList from "./List";
import { IFormFields, IProps } from "./Types";

const VersesInterpration: NextPage<IProps> = ({ data, onSubmitHandler }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormFields>();

  return (
    <Box as="section" mt={10}>
      <Heading as="h2" fontSize={"3xl"} color="brand.secondary">
        تفسير اﻵيات:
      </Heading>
      <Text fontSize={"sm"} mt={2} mb={4}>
        اكتب اﻵيات التي تود تذكر تفسيرها
      </Text>

      <InterprationList data={data} />

      <FormUI
        register={register}
        onSubmit={handleSubmit(onSubmitHandler)}
        errors={errors}
      />
    </Box>
  );
};

export default VersesInterpration;
