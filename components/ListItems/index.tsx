import { CheckCircleIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { IListItemsProps } from "./Types";

const ListItems: NextPage<IListItemsProps> = ({ data }) => {
  return (
    <List display={"flex"} flexDir="column" gap={4}>
      {data.map(({ id, text }) => (
        <ListItem
          key={id}
          color="brand.white"
          py={2}
          px={4}
          border="2px solid"
          borderColor={"brand.secondary"}
          borderRadius="xl"
          display={"flex"}
        >
          <ListIcon as={CheckCircleIcon} width={5} height={5} />
          {text}
        </ListItem>
      ))}
    </List>
  );
};

export default ListItems;
