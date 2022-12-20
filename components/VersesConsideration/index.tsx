import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import ListItems from "../ListItems";
import FormUI from "../ListItems/FormUI";
import { IFormFields } from "../ListItems/Types";
import { IProps } from "./Types";

const VersesConsideration: React.FC<IProps> = ({ data, onSubmitHandler }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormFields>();

  return (
    <Box as="section" mt={4}>
      <Heading as="h2" fontSize={"3xl"} color="brand.secondary">
        تدبر اﻵيات:
      </Heading>
      <Text fontSize={"sm"} mt={2} mb={4}>
        اكتب اﻵيات الي أثرت معك وتود تذكرها دائمًا
      </Text>

      <ListItems data={data} />

      <FormUI
        register={register}
        onSubmit={handleSubmit(onSubmitHandler)}
        errors={errors}
        placeholder="أضف آية..."
      />
    </Box>
  );
};

export default VersesConsideration;
