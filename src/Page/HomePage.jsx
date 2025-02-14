import React from "react";
import { Flex } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Introduction } from "../components/Introduction";
import { Faq } from "../components/Faq";
import { Tokenomics } from "../components/Tokenomics";
import { Roadmap } from "../components/Roadmap";
import { Event } from "../components/Event";

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
        <Event/>
        <Tokenomics/>
        <Roadmap/>
        <Faq/>
        <Footer />
      </Flex>
    </>
  );
};
