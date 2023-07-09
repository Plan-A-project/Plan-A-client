import { useContext, useEffect, useRef } from "react";

import {
  InputGroup,
  InputRightElement,
  Input,
  Image,
  Box,
  Center,
  Slide,
} from "@chakra-ui/react";

import CaretLeft from "@/components/icons/CaretLeft";
import Close from "@/components/icons/Close";

import { SearchContext } from "./SearchResult";

export default function SearchSlidePage() {
  const { isOpen, onToggle, searchword, updateSearchword, resetSearchword } =
    useContext(SearchContext);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      <Slide direction="right" in={isOpen} style={{ zIndex: 50 }}>
        <Box bg="white" h="100%" p={4}>
          <InputGroup>
            <Center onClick={onToggle}>
              <CaretLeft />
            </Center>
            <Input
              type="text"
              placeholder={searchword || "강의명 혹은 강의번호를 검색해주세요."}
              bg="gray.100"
              border="none"
              value={searchword}
              onChange={updateSearchword}
              ref={searchInputRef}
            />
            <InputRightElement onClick={resetSearchword}>
              <Close />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Slide>
    </>
  );
}
