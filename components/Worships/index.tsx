import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaSadCry, FaSadTear, FaMeh, FaSmile, FaLaugh } from "react-icons/fa";

const Worships = () => {
  return (
    <Box bg={"brand.background"} p={6} borderRadius={20} w="full">
      <Heading fontSize={30} textAlign="center" color="brand.white" mb={4}>
        العبادات
      </Heading>

      <VStack spacing={4}>
        {["التراويح", "التهجد", "الدعاء", "الاذكار", "النوافل"].map(
          (worship) => (
            <Grid templateColumns="49px repeat(5, 1fr)" w="full" key={worship}>
              <GridItem>
                <Text
                  color="brand.secondary"
                  fontSize={"md"}
                  fontWeight="normal"
                >
                  {worship}
                </Text>
              </GridItem>
              <GridItem mr="auto">
                <Button
                  bg="transparent"
                  p={0}
                  minW={6}
                  h={6}
                  _hover={{ bg: "transparent" }}
                >
                  <Icon
                    as={FaSadCry}
                    w={6}
                    h={6}
                    color="brand.white"
                    _hover={{ color: "brand.secondary" }}
                  />
                </Button>
              </GridItem>
              <GridItem mr="auto">
                <Button
                  bg="transparent"
                  p={0}
                  minW={6}
                  h={6}
                  _hover={{ bg: "transparent" }}
                >
                  <Icon
                    as={FaSadTear}
                    w={6}
                    h={6}
                    color="brand.white"
                    _hover={{ color: "brand.secondary" }}
                  />
                </Button>
              </GridItem>
              <GridItem mr="auto">
                <Button
                  bg="transparent"
                  p={0}
                  minW={6}
                  h={6}
                  _hover={{ bg: "transparent" }}
                >
                  <Icon
                    as={FaMeh}
                    w={6}
                    h={6}
                    color="brand.white"
                    _hover={{ color: "brand.secondary" }}
                  />
                </Button>
              </GridItem>
              <GridItem mr="auto">
                <Button
                  bg="transparent"
                  p={0}
                  minW={6}
                  h={6}
                  _hover={{ bg: "transparent" }}
                >
                  <Icon
                    as={FaSmile}
                    w={6}
                    h={6}
                    color="brand.white"
                    _hover={{ color: "brand.secondary" }}
                  />
                </Button>
              </GridItem>
              <GridItem mr="auto">
                <Button
                  bg="transparent"
                  p={0}
                  minW={6}
                  h={6}
                  _hover={{ bg: "transparent" }}
                >
                  <Icon
                    as={FaLaugh}
                    w={6}
                    h={6}
                    color="brand.white"
                    _hover={{ color: "brand.secondary" }}
                  />
                </Button>
              </GridItem>
            </Grid>
          )
        )}
      </VStack>
    </Box>
  );
};

export default Worships;
