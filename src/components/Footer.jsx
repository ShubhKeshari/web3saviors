import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import FooterLogo from "../assets/FooterLogo.png";
export const Footer = () => {
  const footerItems = [
    "Home",
    "IDO",
    "Tokenomics",
    "Road Map",
    "Whitepaper",
    "Pledge",
    "NFT",
    "Games",
  ];
  return (
    <Box
      bg="linear-gradient(180deg, #030405 0%, #120101 100%)"
      h={{ base: "448px", md: "428px" }}
      w="100%"
      boxSizing="border-box"
      paddingTop={"64px"}
      paddingBottom={{ base: "26px", md: "39px" }}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        h="100%"
      >
        <Image
          src={FooterLogo}
          boxSize="163px"
          objectFit="cover"
          alt="SaviourLogo"
          objectPosition={"60% -15%"}
          _hover={{ cursor: "pointer"}}
        />
        <Text
          fontFamily={"Poppins"}
          fontSize={"24px"}
          fontWeight={700}
          background="linear-gradient(92.23deg, #FF002A 5.2%, #720005 90.93%)"
          bgClip="text"
          _hover={{ cursor: "pointer"}}
        >
          SITEMAP
        </Text>
        <Flex
          columnGap={"32px"}
          rowGap={"16px"}
          h="20px"
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {footerItems.map((item, index) => (
            <Text
              key={index}
              fontSize="14px"
              fontWeight={600}
              fontFamily="Poppins"
              color="white"
              _hover={{ cursor: "pointer", color: "#ED0137" }}
            >
              {item}
            </Text>
          ))}
        </Flex>
        <Flex
          color={"#ED0137"}
          w={"111px"}
          h={"27px"}
          justifyContent={"space-between"}
          mt={{ base: "34px", md: "10px" }}
          _hover={{ cursor: "pointer"}}
        >
          <FaTwitter  />
          <FaTelegramPlane />
          <IoMdMail />
        </Flex>
      </Flex>
    </Box>
  );
};
