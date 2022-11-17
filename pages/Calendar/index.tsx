import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { getMonthDays, weekDays } from "../../utils/getDays";

const Calendar: NextPage = () => {
  return (
    <Box bgColor="var(--chakra-colors-brand-main)" dir={"rtl"}>
      <Container py={10} maxW="container.xl">
        <Heading
          as={"h1"}
          fontSize="52px"
          color={"var(--chakra-colors-brand-white)"}
          fontWeight="700"
          mb={10}
          textAlign="center"
        >
          إمساكية رمضان
        </Heading>
        <Box overflowX={"auto"}>
          <Table
            color={"var(--chakra-colors-brand-secondary)"}
            cellSpacing={24}
            variant={"unstyled"}
            sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
          >
            <Thead>
              <Tr>
                {weekDays.map((day) => (
                  <Th
                    fontWeight="500"
                    fontSize={"2xl"}
                    key={day}
                    textAlign={"center"}
                  >
                    {day}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {getMonthDays().map((week) => (
                <Tr fontSize={"xl"} key={`w-${week[0].id}`}>
                  {week.map(({ id, rate, today }) =>
                    id > 0 ? (
                      <Td
                        isNumeric={true}
                        key={id}
                        bg={`var(--chakra-colors-brand-${
                          today ? "secondary" : "background"
                        })`}
                        height={"32"}
                        textAlign="center"
                        verticalAlign={"top"}
                        color={`var(--chakra-colors-brand-${
                          today ? "main" : "secondary"
                        })`}
                        fontWeight={500}
                      >
                        <Link href={`/${id}`}>
                          <a>{id}</a>
                        </Link>
                        {rate ? (
                          <CircularProgress
                            value={rate}
                            size="44px"
                            thickness={"6px"}
                            color="var(--chakra-colors-brand-secondary)"
                            display={"block"}
                            width="max-content"
                            mx="auto"
                            mt={4}
                          >
                            <CircularProgressLabel>
                              <Text
                                fontSize={"md"}
                                color="var(--chakra-colors-brand-white)"
                                marginTop={1}
                              >
                                {rate}%
                              </Text>
                            </CircularProgressLabel>
                          </CircularProgress>
                        ) : undefined}
                      </Td>
                    ) : (
                      <Td key={id}></Td>
                    )
                  )}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Container>
    </Box>
  );
};

export default Calendar;
