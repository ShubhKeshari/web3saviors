import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import IntroImg from "../assets/Intro.png";
import Aos from "aos";
import "aos/dist/aos.css";
export const LargeIntroduction = () => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 3000, delay: 400 });
  }, []);
  return (
    <Box bgColor={"#0a0a0a"} width={"100%"}>
      <Flex
        maxW={"1512px"}
        width={"100%"}
        height={"fit-content"}
        align={"center"}
        justify={"center"}
        mx={"auto"}
        display={{ base: "none", md: "flex" }}
      >
        <Flex
          width={"50%"}
          gap={6}
          direction={"column"}
          justify={"center"}
          pl={20}
        >
          <Text
            fontFamily={"Shojumaru"}
            fontSize={"44px"}
            fontWeight={"400"}
            lineHeight={"52px"}
            textAlign={"left"}
            color={"#ED0137"}
          >
            Introduction
          </Text>

          <Text
            fontFamily={"ZCOOL KuaiLe"}
            fontSize={"24px"}
            fontWeight={"400"}
            lineHeight={"29px"}
            textAlign={"left"}
            color={"white"}
          >
            We've all been in the mud once, and now we've decided to fight it
            out. <br />
            Pay tribute to those pioneers of WEB3 and the warriors who dedicated
            their love to the blockchain. Save the lucky ones alive, join us to
            save the future!
            <br />
            Our mission is to empower everyone to share wealth and succeed.
            <br />
            <span style={{ color: "#9b9999" }}>read more...</span>
          </Text>

          <Button
            width={"179px"}
            height={"54px"}
            p={"17px 21px"}
            borderRadius={"22px"}
            background={
              "linear-gradient(93.73deg, #D51B46 10.19%, #EE6910 98.19%)"
            }
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            fontSize={"20px"}
            fontFamily={" ZCOOL KuaiLe"}
            textAlign={"left"}
            _hover={{
              bg: "linear-gradient(93.73deg, #F05733 20.19%, #ED0137 88.3%)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Text>Documents &nbsp;</Text>
            <Box as="span">
              {isHovered ? (
                <ChevronUpIcon fontSize={"22px"} />
              ) : (
                <ChevronDownIcon fontSize={"22px"} />
              )}
            </Box>
          </Button>
        </Flex>

        <Box p={5} boxSizing="border-box">
          <Image
            src={IntroImg}
            w={"100%"}
            objectFit="cover"
            data-aos="zoom-in-right"
            css={{
              transition: "transform 0.3s ease",
              ":hover": {
                transform: "scale(1.05)",
                cursor: "pointer",
              },
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};
