import React from "react";
import { Flex } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Introduction } from "../components/Introduction";
import { Faq } from "../components/Faq";

export const HomePage = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent={"center"}
        mx="auto"
      >
        <Hero />
        <Introduction/>
        <Faq/>
        <Footer />
      </Flex>
    </>
  );
};
