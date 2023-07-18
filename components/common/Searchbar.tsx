import { Dispatch, SetStateAction } from "react";

import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { SearchbarHookProps } from "@/hooks/useSearchbar";

import CaretLeft from "../icons/CaretLeft";
import Close from "../icons/Close";
import Search from "../icons/Search";

export type SearchbarProps = SearchbarHookProps & {
  searchword: string;
  setSearchword: Dispatch<SetStateAction<string>>;
};

export default function Searchbar({
  placeholder,
  searchDefault,
  addKeyword,
  searchCourse,
  handleClick,
  searchword,
  setSearchword,
}: SearchbarProps) {
  return (
    <HStack>
      {searchDefault && <CaretLeft />}
      <InputGroup>
        {searchCourse && (
          <InputLeftElement pointerEvents="none">
            <Search />
          </InputLeftElement>
        )}
        <Input
          placeholder={placeholder}
          bg="gray.50"
          border="none"
          value={searchword}
          onChange={e => setSearchword(e.target.value)}
        />
        {searchword && (
          <InputRightElement>
            <Close />
          </InputRightElement>
        )}
      </InputGroup>
      {addKeyword && (
        <Button
          bg="none"
          onClick={handleClick}
          color={searchword ? "#3F52E4" : "grey"}
        >
          등록
        </Button>
      )}
    </HStack>
  );
}
