import { useContext } from "react";

import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

import Search from "@/components/icons/Search";

import { SearchContext } from "./SearchResult";
import SearchSlidePage from "./SearchSlide";

export default function Searchbar() {
  const { isOpen, onToggle, searchword } = useContext(SearchContext);

  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="강의명 혹은 강의번호를 검색해주세요."
          onClick={onToggle}
          value={searchword}
        />
        <SearchSlidePage />
      </InputGroup>
    </>
  );
}
