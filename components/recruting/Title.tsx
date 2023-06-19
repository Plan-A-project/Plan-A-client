import React from "react";

import { HStack, Heading } from "@chakra-ui/layout";

import { RightArrowIcon } from "../icons";
import Search from "../icons/Search";

export default function Title() {
  return (
    <HStack justifyContent={"space-between"}>
      <RightArrowIcon />
      <Heading>채용</Heading>
      <Search />
    </HStack>
  );
}
