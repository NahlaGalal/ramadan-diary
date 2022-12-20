import { Box, Button, Heading, List, ListItem } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { ITopicsProps } from "./Types";

const Topics: NextPage<ITopicsProps> = ({ topics, currentTopic, setTopic }) => {
  return (
    <Box
      as="aside"
      border={"1px solid"}
      borderColor={"brand.secondary"}
      borderRadius="md"
      position="relative"
      maxH={"calc(100vh - 152px)"}
      overflow="auto"
      padding={"px"}
    >
      <Heading
        fontSize={"2xl"}
        position="sticky"
        bg={"brand.main"}
        py={4}
        textAlign="center"
        top="-px"
      >
        اﻷقسام
      </Heading>
      <List px={6} display="flex" flexDir={"column"} gap={4} pb={4}>
        {topics.map(({ id, name }) => (
          <ListItem key={id} m={0}>
            <Button
              p={0}
              variant="link"
              fontWeight="normal"
              position={"static"}
              color={id === currentTopic ? "brand.secondary" : "brand.white"}
              _hover={{
                color: "brand.secondary",
              }}
              _focus={{
                boxShadow: "none",
                color: "brand.secondary",
              }}
              onClick={() => setTopic(id)}
            >
              {name}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Topics;
