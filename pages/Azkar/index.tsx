import { Box, Container, HStack, List } from "@chakra-ui/react";
import React, { useState } from "react";
import Topics from "../../components/Azkar/Topics";
import Zkr from "../../components/Azkar/Zkr";
import Navbar from "../../components/Navbar";
import { topics, azkarData } from "./data";

const Azkar = () => {
  const [currentTopic, setCurrentTopic] = useState<number>(0);

  return (
    <Container py={10} maxWidth="container.xl" dir="rtl">
      <Navbar title="اﻷذكار" isBack currentPage="azkar" />

      <HStack gap={10} alignItems="flex-start">
        {/* Topics */}
        <Topics
          topics={topics}
          currentTopic={currentTopic}
          setTopic={setCurrentTopic}
        />

        {/* Azkar */}
        <Box as="main" ms={`0 !important`} flex={1}>
          <List display={"flex"} flexDirection="column" gap={8}>
            {azkarData.map((zkr, i) => (
              <Zkr {...zkr} key={zkr.id} isOdd={!(i % 2)} />
            ))}
          </List>
        </Box>
      </HStack>
    </Container>
  );
};

export default Azkar;
