import {
  Button,
  Container,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NextLink from "next/link";
import React from "react";
import CustomRadio from "../../components/CustomRadio";
import DayBoxContainer from "../../components/DayBoxContainer";
import Navbar from "../../components/Navbar";
import Salah from "../../components/Salah";
import Worships from "../../components/Worships";

const Day: NextPage<{ day: string }> = ({ day }) => {
  return (
    <Container py={10} maxW="container.xl" dir="rtl">
      <Navbar title={`${day} رمضان`} isBack />
      
      <HStack gap={10}>
        <VStack spacing={6}>
          {/* Salah card */}
          <Salah />

          {/* Worships card */}
          <Worships />
        </VStack>

        <VStack spacing={12} flex={1}>
          {/* Hadith */}
          <DayBoxContainer heading="حديث اليوم">
            <Text mb={2}>قال رسول الله ﷺ</Text>
            <Text>
              إذا جاءَ رَمَضانُ فُتِّحَتْ أبْوابُ الجَنَّةِ، وغُلِّقَتْ أبْوابُ
              النَّارِ، وصُفِّدَتِ الشَّياطِينُ
            </Text>
          </DayBoxContainer>

          {/* Pray of day*/}
          <DayBoxContainer heading="دعاء اليوم">
            <Text>رب اجعلني مقيم الصلاة ومن ذريتي ربنا وتقبل دعاء</Text>
          </DayBoxContainer>

          {/* Goal of day */}
          <DayBoxContainer heading="هدف اليوم">
            <Text>إفطار صائم ولو بتمرة</Text>
          </DayBoxContainer>

          {/* Question of day */}
          <DayBoxContainer heading="سؤال اليوم">
            <Text mb={1}>في أي عام هجري فرض الصيام؟</Text>
            <CustomRadio
              name="two"
              values={["2 هجريًا", "3 هجريًا", "4 هجريًا", "5 هجريًا"]}
            />
            <Button
              px={10}
              py={3}
              color="brand.main"
              bg="brand.secondary"
              mx="auto"
              mt={4}
              display="block"
              border="1px solid"
              borderColor="brand.secondary"
              height={"auto"}
              _hover={{
                bg: "brand.main",
                color: "brand.white",
              }}
            >
              إرسال
            </Button>
          </DayBoxContainer>
        </VStack>
      </HStack>

      {/* Btns */}
      <HStack justifyContent={"center"} gap={10} dir="rtl" mt={6}>
        <NextLink href={"/Habit-tracker"} passHref>
          <Link
            px={10}
            py={3}
            color="brand.white"
            bg="brand.green"
            border="1px solid"
            borderColor="brand.green"
            height={"auto"}
            borderRadius="md"
            _hover={{
              bg: "brand.main",
            }}
          >
            تتبع عاداتي
          </Link>
        </NextLink>
        <Link
          px={10}
          py={3}
          color="brand.white"
          bg="brand.green"
          border="1px solid"
          borderColor="brand.green"
          height={"auto"}
          borderRadius="md"
          _hover={{
            bg: "brand.main",
          }}
        >
          القرآن
        </Link>
      </HStack>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Array(29)
      .fill(0)
      .map((_, idx) => ({
        params: {
          Day: `${idx + 1}`,
        },
      })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/${params?.Day}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      day: params?.Day,
    },
  };
};

export default Day;
