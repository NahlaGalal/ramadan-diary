import { Box, Button, Heading, List, ListItem } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { IDaysProps } from "./Types";

const HabitTrackerDays: NextPage<IDaysProps> = ({ day, setDay }) => {
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
        اﻷيام
      </Heading>
      <List px={6} display="flex" flexDir={"column"} gap={4}>
        {new Array(30).fill(0).map((_, i) => (
          <ListItem key={i} m={0}>
            <Button
              p={0}
              variant="link"
              fontWeight="normal"
              position={"static"}
              color={day === i + 1 ? "brand.secondary" : "brand.white"}
              _hover={{
                color: "brand.secondary",
              }}
              _focus={{
                boxShadow: "none",
                color: "brand.secondary",
              }}
              onClick={() => setDay(i + 1)}
            >
              {i + 1} رمضان
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HabitTrackerDays;
