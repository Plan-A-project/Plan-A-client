/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";

import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import BoardStack from "@/components/board/BoardStack";
import FreeBoardItem from "@/components/board/FreeBoardItem";
import NewBoardBanner from "@/components/board/NewBoardBanner";
import { Carousel, Header as MyHeader } from "@/components/common";
import CaretLeft from "@/components/icons/CaretLeft";
import Close from "@/components/icons/Close";
import IconForward from "@/components/icons/IconForward";
import IconNotice from "@/components/icons/IconNotice";
import IconSearch from "@/components/icons/IconSearch";

const SearchModal = () => {
  const router = useRouter();
  const inputRef = useRef<any>();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [searchData, setSearchData] = useState<any[]>([]);
  const [keywords, setKeywords] = useState<string[]>([]);

  const handleClickKeyword = (keyword: string) => {
    setIsSearchOpen(false);
    inputRef.current.value = keyword;
    setSearchData([
      {
        id: 1,
        title: `제목 ${keyword}`,
        description: "본문",
        comments: 24,
        likes: 3,
        date: "2022-12-12",
      },
      {
        id: 2,
        title: `제목 ${keyword}`,
        description: "본문",
        comments: 24,
        likes: 3,
        date: "2022-12-12",
      },
      {
        id: 3,
        title: `제목 ${keyword}`,
        description: "본문",
        comments: 24,
        likes: 3,
        date: "2022-12-12",
      },
    ]);
  };
  const handleChange = () => {
    if (inputRef.current.value.length < 2) {
      setKeywords([]);
      return;
    }
    setIsSearchOpen(true);
    setKeywords([
      inputRef.current.value,
      inputRef.current.value + "자",
      inputRef.current.value + "자동",
      inputRef.current.value + "자동완",
      inputRef.current.value + "자동완성",
    ]);
  };
  const handleClose = () => {
    onClose();
    setKeywords([]);
    setSearchData([]);
  };
  const handleReset = () => {
    inputRef.current.value = "";
    handleChange();
    setIsSearchOpen(false);
  };
  return (
    <>
      <Drawer placement="top" isOpen={isOpen} onClose={handleClose}>
        <DrawerOverlay />
        <DrawerContent minHeight={"100vh"}>
          <DrawerHeader pl={4}>
            <Flex gap={4}>
              <button onClick={handleClose}>
                <CaretLeft />
              </button>
              <InputGroup gap={4}>
                <Input
                  placeholder="최소 2글자 이상 입력해 주세요"
                  ref={inputRef}
                  onChange={handleChange}
                  onFocus={handleChange}

                  // onBlur={() => setIsSearchOpen(false)}
                />
                <InputRightElement>
                  <button onClick={handleReset}>
                    <Close />
                  </button>
                </InputRightElement>
              </InputGroup>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            {isSearchOpen ? (
              <List spacing={2}>
                {keywords.map((keyword, i) => (
                  <ListItem key={i} onClick={() => handleClickKeyword(keyword)}>
                    <ListIcon as={SearchIcon} />
                    {keyword}
                  </ListItem>
                ))}
              </List>
            ) : null}
            {!isSearchOpen ? (
              <BoardStack>
                {searchData.map(el => (
                  <FreeBoardItem
                    key={el.id}
                    comments={el.comments}
                    likes={el.likes}
                    views={el.views ?? 123}
                    description="본문이 들어갈 자리입니다"
                    date="2022-12-12"
                    title={el.title}
                    onClick={() => router.push(`/board/${el.id}`)}
                    leftTag="채용"
                    tagType="primary"
                  />
                ))}
              </BoardStack>
            ) : null}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <IconSearch onClick={onOpen} />
    </>
  );
};

function BoardMain() {
  const router = useRouter();
  return (
    <div>
      <MyHeader p={4} leftTitle title="정보공유" rightNode={<SearchModal />} />
      <Flex p={4} align={"center"}>
        <NewBoardBanner
          justify={"space-between"}
          onClick={() => alert("게시판 이용 수칙안내")}
        >
          <Flex>
            <IconNotice />
            <Heading color={"black"} fontSize={"18px"} ml={2}>
              게시판 이용 규칙 안내
            </Heading>
          </Flex>
          <IconForward />
        </NewBoardBanner>
      </Flex>

      <Carousel>
        <img
          style={{ padding: "0 8px" }}
          alt="banner"
          src="/assets/banner.png"
        />
        <img
          style={{ padding: "0 8px" }}
          alt="banner"
          src="/assets/banner.png"
        />
        <img
          style={{ padding: "0 8px" }}
          alt="banner"
          src="/assets/banner.png"
        />
      </Carousel>
      <SimpleGrid columns={2} spacing={4} p={4}>
        {["recruit", "activity", "club", "free"].map(name => (
          <img
            key={name}
            style={{ objectFit: "cover", aspectRatio: 1, width: "100%" }}
            alt="banner"
            src={`/assets/boards/${name}.png`}
            onClick={() => router.push(`/board/${name}`)}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default BoardMain;
