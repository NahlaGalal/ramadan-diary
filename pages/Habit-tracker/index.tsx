import { Box, Container, Heading, HStack, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import NextLink from "next/link";
import HabitTrackerDays from "../../components/HabitTracker/Days";
import Navbar from "../../components/Navbar";
import { doing, done, toDo } from "./Data";
import HabitTrackerBox from "../../components/HabitTracker/Box";

const HabitTracker = () => {
  const [day, setDay] = useState<number>(1);

  return (
    <Container py={10} maxWidth="container.xl" dir="rtl">
      <Navbar title="تتبع عاداتي" isBack />

      <HStack gap={6} alignItems="flex-start">
        {/* Days */}
        <HabitTrackerDays day={day} setDay={setDay} />

        {/* Tracker */}
        <Box as="main" ms={`0 !important`} flex={1}>
          {/* Header */}
          <HStack as="header" alignItems={"center"}>
            <Heading fontSize={"2xl"} fontWeight="medium">
              يوم الثلاثاء ({day} رمضان)
            </Heading>
            <Text fontWeight={"bold"} color="brand.secondary">
              50%
            </Text>
            <NextLink href="/Habit-statistic" passHref>
              <Link ms="auto !important" _hover={{ color: "brand.secondary" }}>
                مشاهدة الاحصائيات
              </Link>
            </NextLink>
          </HStack>

          <HStack gap={6} mt={6} alignItems="flex-start">
            {/* Todo */}
            <HabitTrackerBox header="لم أفعله بعد" data={toDo} />
            {/* Doing */}
            <HabitTrackerBox header="أفعله اﻵن" data={doing} />
            {/* Done */}
            <HabitTrackerBox header="فعلته" data={done} />
          </HStack>
        </Box>
      </HStack>
    </Container>
  );
};

export default HabitTracker;
