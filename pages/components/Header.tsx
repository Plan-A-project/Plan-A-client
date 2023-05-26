import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface HeaderProps {
  headingText: string;
}

const Header = ({ headingText }: HeaderProps) => {
  const router = useRouter();

  return (
    <Flex align={"center"}>
      <ChevronLeftIcon
        focusable={true}
        boxSize={9}
        onClick={() => router.back()}
      />
      <Text textStyle="headline1">{headingText}</Text>
    </Flex>
  );
};

export default Header;
