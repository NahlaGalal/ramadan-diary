import { Container } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import ListItems from "../../components/ListItems";
import FormUI from "../../components/ListItems/FormUI";
import { IFormFields } from "../../components/ListItems/Types";
import Navbar from "../../components/Navbar";
import { prays } from "./data";

const Prays = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormFields>();

  const onSubmitHandler = async (body: IFormFields) => {
    console.log(body);
  };

  return (
    <Container py={10} maxWidth="container.xl" dir="rtl">
      <Navbar title="أدعيتي" isBack currentPage="prays" />

      <ListItems data={prays} />

      <FormUI
        register={register}
        onSubmit={handleSubmit(onSubmitHandler)}
        errors={errors}
        placeholder="أضف دعاء..."
      />
    </Container>
  );
};

export default Prays;
