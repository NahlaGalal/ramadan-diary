import { ListItem, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { IZkrProps } from "./Types";

const Zkr: NextPage<IZkrProps> = ({ num, text, isOdd }) => {
  return (
    <ListItem
      display={"flex"}
      alignItems="center"
      flexDirection={isOdd ? "row-reverse" : "row"}
      width="80%"
      alignSelf={isOdd ? "flex-end" : "flex-start"}
    >
      <Text
        as="span"
        width={20}
        height="20"
        background={"brand.white"}
        borderRadius="full"
        display={"flex"}
        flexDirection="column"
        justifyContent="center"
        alignItems={"center"}
        zIndex={10}
      >
        <Text as="span" color="brand.secondary">
          {num}
        </Text>
        <Text as="span" color="brand.main" fontWeight={"medium"}>
          مرة
        </Text>
      </Text>
      <Text
        background={"brand.background"}
        py={3}
        flex={1}
        mr={isOdd ? 0 : "-10"}
        ml={isOdd ? "-10" : 0}
        pr={isOdd ? 10 : 14}
        pl={isOdd ? 14 : 10}
        minHeight={20}
        color="brand.secondary"
        fontSize={"sm"}
        position="relative"
        clipPath={
          isOdd
            ? `polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%)`
            : `polygon(40px 0, 100% 0, 100% 100%, 40px 100%, 0 50%)`
        }
      >
        {text}
      </Text>
    </ListItem>
  );
};

export default Zkr;
