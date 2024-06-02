import { Box, Flex } from "@chakra-ui/react";
import React from "react";

import EventImage from "../assets/Event.png";
export const Herooo = () => {
  return (
      <Box
        backgroundImage={EventImage}
        h="1145px"
        w="100%"
        backgroundPosition="center"
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      ></Box>
  );
};
