import { Flex } from "@chakra-ui/react";

import { SearchIcon, AlarmIcon, Logo } from "@/components/icons";


export default function Header() {


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
