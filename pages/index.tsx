import { Flex, Link as StyledLink } from "@chakra-ui/react";
import type { NextPage } from "next";
import background from "../public/images/home.jpg";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Flex
      bgColor="brand.main"
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
      <Link href={"/Login"} passHref={true}>
        <StyledLink
          mt="auto"
          mb={6}
          bg="brand.green"
          border={"1px solid"}
          borderColor="brand.green"
          py={3}
          px={10}
          fontSize={"lg"}
          zIndex={"docked"}
          borderRadius={"md"}
          fontWeight="500"
          color={"brand.white"}
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
