import React from "react";

import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

interface HeaderProps {
  headingText: string;
}

const Header = ({ headingText }: HeaderProps) => {
  return (
    <Flex align={"center"}>
      <ChevronLeftIcon focusable={true} boxSize={9} />
      <Text textStyle="headline1">{headingText}</Text>
    </Flex>
  );
};

export default Header;
