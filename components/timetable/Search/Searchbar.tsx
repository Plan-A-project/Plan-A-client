import { Icons } from "@/assets/icons";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import SearchSlidePage from "./SearchSlide";
import { useContext } from "react";
import { SearchContext } from "./SearchResult";

export default function Searchbar() {
  const { isOpen, onToggle, searchword } = useContext(SearchContext);

  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Image src={Icons.Search.src} alt="시간표 검색바" color="gray.300" />
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
