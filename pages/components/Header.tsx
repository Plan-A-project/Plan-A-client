import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

interface HeaderProps {
  headingText: string;
}

const Header = ({ headingText }: HeaderProps) => {
  return (
    <Flex align={"center"}>
      <ChevronLeftIcon focusable={true} boxSize={9} />
      <Heading as="h2" size="md">
        {headingText}
      </Heading>
    </Flex>
  );
};

export default Header;
