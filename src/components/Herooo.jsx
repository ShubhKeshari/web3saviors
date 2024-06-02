import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import EventImage from "../assets/Event.png";
import TokenImage from "../assets/Token.png";
import RoadmapImage from "../assets/Roadmap.png";

export const Herooo = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent={"center"}
      mx="auto"
    >
      {/* Event Section */}
      <Box
        backgroundImage={EventImage}
        h="1145px"
        w="100%"
        backgroundPosition="center"
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      ></Box>

      {/* Token Section */}
      <Box
        backgroundImage={TokenImage}
        h="706px"
        w="100%"
        backgroundPosition="center"
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      ></Box>

      {/* Roadmap Section */}
      <Box
        backgroundImage={RoadmapImage}
        h="716px"
        w="100%"
        backgroundPosition="center"
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        opacity={0.6}
      ></Box>
      {/* Above Footer */}
      
    </Flex>
  );
};
