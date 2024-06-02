import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import { BaseIntroduction } from "./BaseIntroduction";
import { LargeIntroduction } from "./LargeIntroduction";
export const Introduction = () => {
  const componentToRender = useBreakpointValue({
    base: <BaseIntroduction />,
    md: <LargeIntroduction />,
  });
  return <>{componentToRender}</>;
};
