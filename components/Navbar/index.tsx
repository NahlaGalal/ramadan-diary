import {
  Button,
  Heading,
  HStack,
  Icon,
  List,
  ListItem,
} from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";
import React from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { FaPray } from "react-icons/fa";
import { GiPrayerBeads, GiTargeted } from "react-icons/gi";
import { IProps } from "./Type";
import { SettingsIcon } from "@chakra-ui/icons";

const Navbar: NextPage<IProps> = ({ title }) => {
  return (
    <HStack
      as="nav"
      justifyContent={"space-between"}
      alignItems="center"
      mb={6}
      gap="4"
    >
      <List color={"brand.white"} display="flex" gap={4}>
        <ListItem height={6}>
          <Icon as={GiPrayerBeads} height={6} width={6} />
        </ListItem>
        <ListItem height={6}>
          <Icon as={FaPray} height={6} width={6} />
        </ListItem>
        <ListItem height={6}>
          <Icon as={GiTargeted} height={6} width={6} />
        </ListItem>
        <ListItem height={6}>
          <SettingsIcon height={6} width={6} />
        </ListItem>
      </List>

      <Heading
        as={"h1"}
        fontSize={"5xl"}
        color={"brand.white"}
        fontWeight="700"
        textAlign="center"
        mr={0}
      >
        {title}
      </Heading>

      <NextLink href="/Calendar" passHref>
        <Button
          rightIcon={<TbArrowBackUp size={24} />}
          variant="link"
          color={"brand.white"}
          mr={0}
          _hover={{
            textDecoration: "none"
          }}
        >
          رجوع
        </Button>
      </NextLink>
    </HStack>
  );
};

export default Navbar;
