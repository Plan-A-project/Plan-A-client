import { Icons } from "@/assets/icons";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Image,
  useDisclosure,
  Slide,
  Box,
  Center,
} from "@chakra-ui/react";
import {
  MouseEventHandler,
  ChangeEventHandler,
  useState,
  SetStateAction,
} from "react";
import { COURSES } from "@/components/data";

export default function Searchbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [searchword, setSearchword] = useState<string>("");

  const props = {
    isOpen,
    onToggle,
    searchword,
    setSearchword,
  };
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
        <SearchSlidePage {...props} />
      </InputGroup>
    </>
  );
}

type ISearchSlidePage = {
  isOpen: boolean;
  onToggle: MouseEventHandler<HTMLDivElement>;
  searchword: string;
  setSearchword: React.Dispatch<SetStateAction<string>>;
};

function SearchSlidePage(props: ISearchSlidePage) {
  const { isOpen, onToggle, searchword, setSearchword } = props;

  const updateSearchword: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.target.value;
    setSearchword(newValue);
  };

  const resetSearchword = () => {
    setSearchword("");
  };

  return (
    <>
      <Slide direction="right" in={isOpen} style={{ zIndex: 20 }}>
        <Box bg="white" h="100%" p={4}>
          <InputGroup>
            <Center onClick={onToggle}>
              <Image src={Icons.CaretLeft.src} alt="뒤로 돌아가기" mr={3} />
            </Center>
            <Input
              type="text"
              placeholder="강의명 혹은 강의번호를 검색해주세요."
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
