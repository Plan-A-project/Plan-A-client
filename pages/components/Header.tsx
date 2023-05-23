import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

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
