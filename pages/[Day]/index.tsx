import { Box, Container, Heading, HStack, VStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import Salah from "../../components/Salah";
import { getSubOfDay } from "../../utils/getSubDay";

const Day: NextPage<{ day: string }> = ({ day }) => {
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
        {day}
        {getSubOfDay(+day)} Ramadan
      </Heading>

      <HStack dir="rtl">
        <VStack>
          <Salah />
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
  return {
    props: {
      day: params?.Day,
    },
  };
};

export default Day;
