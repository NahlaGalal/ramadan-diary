import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import SignupFormUI from "../../components/SignupFormUI";
import { IFormFields } from "../../components/SignupFormUI/Types";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<IFormFields>();

  const onSubmitHandler = (data: IFormFields) => {
    console.log(data);
  };

  return (
    <Container py={10} maxW="container.sm" dir="rtl">
      <Heading
        as={"h1"}
        fontSize="52px"
        color={"var(--chakra-colors-brand-white)"}
        fontWeight="700"
        mb={10}
        textAlign="center"
      >
        أهلا بك في يوميات رمضان
      </Heading>
      <Heading
        as={"h2"}
        fontSize="32px"
        color={"var(--chakra-colors-brand-white)"}
        fontWeight="700"
        mb={10}
        textAlign="center"
      >
        سجل الآن
      </Heading>

      <SignupFormUI
        register={register}
        onSubmit={handleSubmit(onSubmitHandler)}
        errors={errors}
        password={watch("password")}
      />
    </Container>
  );
};

export default Signup;
