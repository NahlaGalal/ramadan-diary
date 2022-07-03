import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useForm } from "react-hook-form";
import SignupFormUI from "../../components/LoginFormUI";
import { IFormFields } from "../../components/LoginFormUI/Types";

const Login = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<IFormFields>();

  const onSubmitHandler = async (body: IFormFields) => {
    try {
      const data = await axios.post("/api/login", body);
      if (data.data.success) {
        window.localStorage.setItem("ramadan-user", data.data.token);
        router.push("/Calendar");
      }
    } catch (err: any) {
      const errors = err.response.data.errors;
      errors.forEach((error: { [key in "email" | "password"]: string }) =>
        Object.keys(error).forEach((key: string) =>
          setError(
            key as "email" | "password",
            {
              type: "validate",
              message: error[key as "email" | "password"],
            },
            {
              shouldFocus: true,
            }
          )
        )
      );
    }
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
        أهلا بك مرة أخري
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
      />
    </Container>
  );
};

export default Login;
