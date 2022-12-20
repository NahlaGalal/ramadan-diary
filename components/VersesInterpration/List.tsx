import { CheckCircleIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { IListProps } from "./Types";

const InterprationList: NextPage<IListProps> = ({ data }) => {
  return (
    <List display={"flex"} flexDir="column" gap={6}>
      {data.map(({ id, verses, interpration }) => (
        <ListItem key={id}>
          <Text
            color="brand.white"
            py={2}
            px={4}
            border="2px solid"
            borderColor={"brand.secondary"}
            borderRadius="xl"
            display={"flex"}
          >
            <ListIcon as={CheckCircleIcon} width={5} height={5} />
            {verses}
          </Text>
          <Text
            color="brand.white"
            py={2}
            px={4}
            border="2px solid"
            borderColor={"brand.secondary"}
            borderRadius="xl"
            display={"flex"}
            mr={6}
            mt={4}
          >
            <ListIcon as={CheckCircleIcon} width={5} height={5} />
            {interpration}
          </Text>
        </ListItem>
      ))}
    </List>
  );
};

export default InterprationList;
