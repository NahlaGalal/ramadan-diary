import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React, { ReactElement } from "react";
import { HiMoon } from "react-icons/hi";

interface IProps {
  heading: string;
  children: ReactElement | ReactElement[];
}

const DayBoxContainer: NextPage<IProps> = ({ heading, children }) => {
  return (
    <Box
      bg={"brand.main"}
      border="2px solid"
      borderColor="brand.secondary"
      borderRadius={"xl"}
      p={4}
      position="relative"
      w="full"
    >
      <Heading
        bg="brand.main"
        color={"brand.secondary"}
        fontSize="2xl"
        as="h3"
        display={"flex"}
        gap={1}
        alignItems="center"
        height={12}
        position="absolute"
        top={-8}
        px={2}
        fontWeight="bold"
      >
        <Icon as={HiMoon} w={4} h={4} transform="scaleX(-1)" />
        {heading}
        <Icon as={HiMoon} w={4} h={4} transform="scaleX(-1)" />
      </Heading>
      <Box color="brand.white">
        {children}
      </Box>
    </Box>
  );
};

export default DayBoxContainer;
