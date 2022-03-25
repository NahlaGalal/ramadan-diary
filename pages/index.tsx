import { Flex, Link as StyledLink } from "@chakra-ui/react";
import type { NextPage } from "next";
import background from "../public/images/home.jpg";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Flex
      bgColor="var(--chakra-colors-brand-main)"
      height={"100vh"}
      flexDirection={"column"}
      alignItems="center"
    >
      <Image
        src={background}
        alt="Ramadan background"
        objectFit="cover"
        width={"600px"}
      />
      <Link href={"/"} passHref={true}>
        <StyledLink
          mt="auto"
          mb={6}
          bg="var(--chakra-colors-brand-green)"
          border={"1px solid var(--chakra-colors-brand-green)"}
          py={3}
          px={10}
          fontSize={"lg"}
          zIndex={"docked"}
          borderRadius={"md"}
          fontWeight="500"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "tranparent" }}
        >
          دخول
        </StyledLink>
      </Link>
    </Flex>
  );
};

export default Home;
