import { Box, Container, Heading } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { getSubOfDay } from "../../utils/getSubDay";

const Day: NextPage<{ day: string }> = ({ day }) => {
  return (
    <Container py={10} maxW="container.xl">
      <Heading>
        {day}
        {getSubOfDay(+day)} Ramadan
      </Heading>
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
