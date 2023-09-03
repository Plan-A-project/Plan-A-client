import { Flex } from "@chakra-ui/react";

import { SearchIcon, AlarmIcon, Logo } from "@/components/icons";
import SearchModal from "@/components/common/SearchModal";
import { searchFunctionFactory, testAutocompleteFunction } from "@/utils/utils";

export default function Header() {
  const testSearchFunction = searchFunctionFactory("익명게시판");
  return (
    <Flex bg={"#FFFFFF"} justify="space-between" p={"0.6rem 1rem"}>
      <Logo />
      <Flex justify="space-between">
        <SearchModal
          autocompleteFunction={testAutocompleteFunction}
          searchFunction={testSearchFunction}
        />
        {/* <AlarmIcon /> */}
      </Flex>
    </Flex>
  );
}
