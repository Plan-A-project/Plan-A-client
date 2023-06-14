import { Flex } from "@chakra-ui/react";

import AlarmIcon from "@/components/icons/AlarmIcon";
import Logo from "@/components/icons/Logo";
import SearchIcon from "@/components/icons/SearchIcon";

export function Header() {
  return (
    <Flex bg={"#FFFFFF"} justify="space-between" p={"0.6rem 1rem"}>
      <Logo />
      <Flex w="3.5rem" justify="space-between">
        <SearchIcon />
        <AlarmIcon />
      </Flex>
    </Flex>
  );
}
