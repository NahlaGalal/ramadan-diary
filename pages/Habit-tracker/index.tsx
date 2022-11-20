import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  List,
  ListItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";

const HabitTracker = () => {
  const [day, setDay] = useState<number>(1);

  return (
    <Container py={10} maxWidth="container.xl" dir="rtl">
      <Navbar title="تتبع عاداتي" isBack />

      <HStack>
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
      </HStack>
    </Container>
  );
};

export default HabitTracker;
