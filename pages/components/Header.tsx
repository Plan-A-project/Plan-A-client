import { Flex, Text } from "@chakra-ui/react";

import LeftArrowIcon from "@/components/icons/LeftArrowIcon";

interface HeaderProps {
  headingText: string;
}

const Header = ({ headingText }: HeaderProps) => {
  return (
    <Flex align={"center"} gap={"8px"}>
      <LeftArrowIcon />
      <Text
        textStyle="headline1"
        color={"grey.900"}
        transform={"translateY(1.5px)"}
      >
        {headingText}
      </Text>
    </Flex>
  );
};

export default Header;
