import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/Navbar";
import VersesConsideration from "../../components/VersesConsideration";
import VersesInterpration from "../../components/VersesInterpration";
import { versesConsideration, versesInterpration } from "./data";

const Quran = () => {
  const addConsiderationHandler = async (body: { text: string }) => {
    console.log(body);
  };

  const addInterprationHandler = async (body: {
    verses: string;
    interpration: string;
  }) => {
    console.log(body);
  };

  return (
    <Container py={10} maxWidth="container.xl" dir="rtl">
      <Navbar title="القرآن" isBack />

      <Box as="main">
        <Text>
          <Text as="span" fontSize={"2xl"} color="brand.secondary">
            ورد اليوم:{" "}
          </Text>
          من صفحة 22 إلى صفحة 42
        </Text>

        <VersesConsideration
          data={versesConsideration}
          onSubmitHandler={addConsiderationHandler}
        />
        <VersesInterpration
          data={versesInterpration}
          onSubmitHandler={addInterprationHandler}
        />
      </Box>
    </Container>
  );
};

export default Quran;
