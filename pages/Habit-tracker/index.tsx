import { Box, Container, Heading, HStack, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import HabitTrackerDays from "../../components/HabitTracker/Days";
import Navbar from "../../components/Navbar";
import { data } from "./Data";
import HabitTrackerBox from "../../components/HabitTracker/Box";

const HabitTracker = () => {
  const [day, setDay] = useState<number>(1);
  const [habits, setHabits] = useState<{
    [key: number]: {
      id: number;
      text: string;
      startTime?: string;
      endTime?: string;
      type: "todo" | "doing" | "done";
    };
  }>({});

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.dataTransfer.setData("id", id.toString());
  };

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dropHandler = (
    e: React.DragEvent<HTMLDivElement>,
    type: "todo" | "doing" | "done"
  ) => {
    let id = +e.dataTransfer.getData("id");

    let habitsCopy = { ...habits };
    habitsCopy[id].type = type;
    setHabits(habitsCopy);
  };

  useEffect(() => {
    setHabits(
      data.reduce((prev, habit) => ({ ...prev, [habit.id]: { ...habit } }), {})
    );
  }, []);

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
            <HabitTrackerBox
              header="لم أفعله بعد"
              data={Object.values(habits).filter(
                (habit) => habit.type === "todo"
              )}
              dragStartHandler={dragStartHandler}
              dragOverHandler={dragOverHandler}
              dropHandler={dropHandler}
              type="todo"
            />
            {/* Doing */}
            <HabitTrackerBox
              header="أفعله اﻵن"
              data={Object.values(habits).filter(
                (habit) => habit.type === "doing"
              )}
              dragStartHandler={dragStartHandler}
              dragOverHandler={dragOverHandler}
              dropHandler={dropHandler}
              type="doing"
            />
            {/* Done */}
            <HabitTrackerBox
              header="فعلته"
              data={Object.values(habits).filter(
                (habit) => habit.type === "done"
              )}
              dragStartHandler={dragStartHandler}
              dragOverHandler={dragOverHandler}
              dropHandler={dropHandler}
              type="done"
            />
          </HStack>
        </Box>
      </HStack>
    </Container>
  );
};

export default HabitTracker;
