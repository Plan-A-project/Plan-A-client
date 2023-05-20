import { Icons } from "@/assets/icons";
import {
  InputGroup,
  InputRightElement,
  Input,
  Image,
  Box,
  Center,
  Slide,
} from "@chakra-ui/react";
import { useContext } from "react";
import { SearchContext } from "./SearchResult";

export default function SearchSlidePage() {
  const { isOpen, onToggle, searchword, updateSearchword, resetSearchword } =
    useContext(SearchContext);

  return (
    <>
      <Slide direction="right" in={isOpen} style={{ zIndex: 50 }}>
        <Box bg="white" h="100%" p={4}>
          <InputGroup>
            <Center onClick={onToggle}>
              <Image src={Icons.CaretLeft.src} alt="뒤로 돌아가기" mr={3} />
            </Center>
            <Input
              type="text"
              placeholder={searchword || "강의명 혹은 강의번호를 검색해주세요."}
              bg="gray.100"
              border="none"
              value={searchword}
              onChange={updateSearchword}
            />
            <InputRightElement onClick={resetSearchword}>
              <Image
                src={Icons.SbClose.src}
                alt="검색어 취소"
                color="gray.300"
              />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Slide>
    </>
  );
}
