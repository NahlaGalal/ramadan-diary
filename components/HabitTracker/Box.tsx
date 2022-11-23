import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { IBoxProps } from "./Types";

const HabitTrackerBox: NextPage<IBoxProps> = ({ data, header }) => {
  return (
    <Box
      as="section"
      bg="brand.background"
      borderRadius={"xl"}
      flex={1}
      minH="96"
      pb={6}
      maxH="600px"
      overflowY={"auto"}
    >
      <Box
        as="header"
        bg={"brand.secondary"}
        borderTopRadius="xl"
        py={4}
        boxShadow="0 4px 4px rgba(34, 35, 40, 0.5)"
        mb={6}
        position="sticky"
        top={0}
      >
        <Heading
          as="h3"
          fontSize={"2xl"}
          fontWeight="bold"
          color={"brand.main"}
          textAlign="center"
        >
          {header}
        </Heading>
      </Box>

      <Stack mx={4} gap={2}>
        {data.map(({ id, text, startTime, endTime }) => (
          <Box
            key={id}
            bg="brand.main"
            border="2px"
            borderColor={"brand.secondary"}
            p={4}
            borderRadius="xl"
          >
            <Text>{text}</Text>
            {startTime && (
              <Text color={"brand.background"} fontSize="sm">
                {startTime} {endTime && ` - ${endTime}`}
              </Text>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default HabitTrackerBox;
