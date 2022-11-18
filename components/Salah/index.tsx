import {
  Box,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import CustomCheckbox from "../CustomChecbox";

const Salah: NextPage = () => {
  return (
    <Box
      bg={"brand.background"}
      padding={6}
      borderRadius={20}
    >
      <Heading fontSize={30} textAlign="center" color="brand.white">
        الصلاة
      </Heading>

      <Table
        sx={{
          borderCollapse: "separate",
          borderSpacing: "32px 16px",
        }}
        variant="unstyled"
      >
        <Thead>
          <Tr>
            <Th
              padding={0}
              color={"brand.secondary"}
              fontWeight="normal"
              fontSize={"md"}
            ></Th>
            <Th
              padding={0}
              color={"brand.secondary"}
              fontWeight="normal"
              fontSize={"md"}
            >
              سنة قبل الفرض
            </Th>
            <Th
              padding={0}
              color={"brand.secondary"}
              fontWeight="normal"
              fontSize={"md"}
            >
              الفرض
            </Th>
            <Th
              padding={0}
              color={"brand.secondary"}
              fontWeight="normal"
              fontSize={"md"}
            >
              سنة بعد الفرض
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td padding={0} color={"brand.secondary"}>
              الفجر
            </Td>
            <Td padding={0} textAlign="center">
              <CustomCheckbox name="fajr" value="fajr-before" />
            </Td>
            <Td padding={0} textAlign="center">
              <CustomCheckbox name="fajr" value="fajr-on" />
            </Td>
            <Td padding={0}></Td>
          </Tr>
          <Tr>
            <Td padding={0} color={"brand.secondary"}>
              الظهر
            </Td>
            <Td padding={0} textAlign="center">
              <CustomCheckbox name="dhuhr" value="dhuhr-before" />
            </Td>
            <Td padding={0} textAlign="center">
              <CustomCheckbox name="dhuhr" value="dhuhr-on" />
            </Td>
            <Td padding={0} textAlign="center">
              <CustomCheckbox name="dhuhr" value="dhuhr-after" />
            </Td>
          </Tr>
          <Tr>
            <Td padding={0} color={"brand.secondary"}>
              العصر
            </Td>
            <Td padding={0}></Td>
            <Td padding={0} textAlign="center">
              <CustomCheckbox name="asr" value="asr-on" />
            </Td>
            <Td padding={0}></Td>
          </Tr>
          <Tr>
            <Td padding={0} color={"brand.secondary"}>
              المغرب
            </Td>
            <Td padding={0}></Td>
            <Td padding={0} textAlign="center">
              <CustomCheckbox
                name="maghrib"
              
                value="maghrib-on"
              />
            </Td>
            <Td padding={0} textAlign="center">
              <CustomCheckbox
                name="maghrib"
              
                value="maghrib-after"
              />
            </Td>
          </Tr>
          <Tr>
            <Td padding={0} color={"brand.secondary"}>
              العشاء
            </Td>
            <Td padding={0}></Td>
            <Td padding={0} textAlign="center">
              <CustomCheckbox name="isha" value="isha-on" />
            </Td>
            <Td padding={0} textAlign="center">
              <CustomCheckbox name="isha" value="isha-after" />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default Salah;
