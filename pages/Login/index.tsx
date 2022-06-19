import { Container, Heading } from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <Container py={10} maxW="container.xl">
      <Heading
        as={"h1"}
        fontSize="52px"
        color={"var(--chakra-colors-brand-white)"}
        fontWeight="700"
        mb={10}
        textAlign="center"
      >
        Login
      </Heading>
    </Container>
  );
};

export default Login;
