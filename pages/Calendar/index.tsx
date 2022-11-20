import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Container,
  LinkBox,
  LinkOverlay,
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
import Navbar from "../../components/Navbar";
import { getMonthDays, weekDays } from "../../utils/getDays";

const Calendar: NextPage = () => {
  return (
    <Box bgColor="brand.main" dir={"rtl"}>
      <Container py={10} maxW="container.xl">
        <Navbar title="إمساكية رمضان" isBack={false} />

        <Box overflowX={"auto"}>
          <Table
            color={"brand.secondary"}
            cellSpacing={24}
            variant={"unstyled"}
            sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
          >
            <Thead>
              <Tr>
                {weekDays.map((day) => (
                  <Th
                    fontWeight="semibold"
                    fontSize={"2xl"}
                    key={day}
                    textAlign={"center"}
                    lineHeight={"7"}
                    p={0}
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
                      <LinkBox
                        as="td"
                        key={id}
                        bg={`brand.${today ? "secondary" : "background"}`}
                        height={"32"}
                        textAlign="center"
                        verticalAlign={"top"}
                        color={`brand.${today ? "main" : "secondary"}`}
                        fontWeight={"semibold"}
                        cursor="pointer"
                        role={"gridcell"}
                      >
                        <Link href={`/${id}`}>
                          <LinkOverlay>{id}</LinkOverlay>
                        </Link>
                        {rate ? (
                          <CircularProgress
                            value={rate}
                            size="44px"
                            thickness={"6px"}
                            color="brand.secondary"
                            display={"block"}
                            width="max-content"
                            mx="auto"
                            mt={4}
                          >
                            <CircularProgressLabel>
                              <Text
                                fontSize={"md"}
                                color="brand.white"
                                marginTop={1}
                                fontWeight="normal"
                              >
                                {rate}%
                              </Text>
                            </CircularProgressLabel>
                          </CircularProgress>
                        ) : undefined}
                      </LinkBox>
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
