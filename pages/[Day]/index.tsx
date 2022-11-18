import { Container, Heading, HStack, VStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import Salah from "../../components/Salah";
import Worships from "../../components/Worships";

const Day: NextPage<{ day: string }> = ({ day }) => {
  return (
    <Container py={10} maxW="container.xl">
      <Heading
        as={"h1"}
        fontSize="52px"
        color={"brand.white"}
        fontWeight="700"
        mb={10}
        textAlign="center"
        dir="rtl"
      >
        {day} رمضان
      </Heading>

      <HStack dir="rtl">
        <VStack spacing={6}>
          <Salah />
          <Worships />
        </VStack>
      </HStack>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Array(29)
      .fill(0)
      .map((_, idx) => ({
        params: {
          Day: `${idx + 1}`,
        },
      })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/${params?.Day}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      day: params?.Day,
    },
  };
};

export default Day;
