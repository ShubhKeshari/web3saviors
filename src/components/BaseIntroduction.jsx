import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import IntroImg from "../assets/Intro.png";
import Aos from "aos";
import "aos/dist/aos.css";
const BaseIntroduction = () => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 3000, delay: 400 });
  }, []);
  return (
    <Box bgColor={"#0a0a0a"} width={"100%"}>
      <Flex
        width={"100%"}
        height={"fit-content"}
        align={"center"}
        justify={"center"}
        mx={"auto"}
        px={2}
      >
        <Flex gap={6} direction={"column"} justify={"center"} p={5}>
          <Text
            fontFamily={"Shojumaru"}
            fontSize={"23px"}
            fontWeight={"400"}
            lineHeight={"27.37px"}
            textAlign={"center"}
            color={"#ED0137"}
          >
            Introduction
          </Text>

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

          <Text
            fontFamily={"ZCOOL KuaiLe"}
            fontSize={"23px"}
            fontWeight={"400"}
            lineHeight={"27.37px"}
            textAlign={"center"}
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
            width={"178.94px"}
            height={"54.06px"}
            p={"17.03px 21.29px"}
            borderRadius={"21.92px"}
            background={
              "linear-gradient(93.73deg, #D51B46 10.19%, #EE6910 98.19%)"
            }
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            fontSize={"13.92px"}
            fontFamily={" ZCOOL KuaiLe"}
            textAlign={"center"}
            _hover={{
              bg: "linear-gradient(93.73deg, #F05733 20.19%, #ED0137 88.3%)",
            }}
            mx={"auto"}
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
      </Flex>
    </Box>
  );
};
export { BaseIntroduction };
