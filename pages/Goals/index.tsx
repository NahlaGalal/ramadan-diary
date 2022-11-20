import { Container } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import ListItems from "../../components/ListItems";
import FormUI from "../../components/ListItems/FormUI";
import { IFormFields } from "../../components/ListItems/Types";
import Navbar from "../../components/Navbar";
import { goals } from "./data";

const Goals = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    // watch,
  } = useForm<IFormFields>();

  const onSubmitHandler = async (body: IFormFields) => {
    console.log(body);
  };

  return (
    <Container py={10} maxWidth="container.xl" dir="rtl">
      <Navbar title="أهدافي" isBack currentPage="goals" />

      <ListItems data={goals} />

      <FormUI
        register={register}
        onSubmit={handleSubmit(onSubmitHandler)}
        errors={errors}
        placeholder="أضف هدف..."
      />
    </Container>
  );
};

export default Goals;
