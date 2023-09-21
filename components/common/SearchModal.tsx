import { useEffect, useRef, useState } from "react";

import { SearchIcon } from "@chakra-ui/icons";
import { Center, Flex, List, ListIcon, ListItem } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import BoardStack from "@/components/board/BoardStack";
import FreeBoardItem from "@/components/board/FreeBoardItem";
import CaretLeftIcon from "@/components/icons/CaretLeftIcon";
import Close from "@/components/icons/Close";
import IconSearch from "@/components/icons/IconSearch";
import formatDate from "@/utils/formatDate";
type Props = {
  autocompleteFunction: any;
  searchFunction: any;
};

function SearchModal({ autocompleteFunction, searchFunction }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [searchData, setSearchData] = useState<any[]>([]);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);

  const handleClickKeyword = async (keyword: string) => {
    if (loading) {
      return;
    }
    setIsSearchOpen(false);
    setInputValue(keyword);
    setLoading(true);
    const data = await searchFunction(keyword, page);
    setSearchData(data);
    setLoading(false);
  };

  const handleClose = () => {
    onClose();
    setKeywords([]);
    setSearchData([]);
  };
  const handleReset = () => {
    setInputValue("");
    setKeywords([]);
    setIsSearchOpen(false);
  };

  useEffect(() => {
    if (inputValue.length < 2) {
      setKeywords([]);
      return;
    }
    autocompleteFunction(inputValue).then((data: string[]) => {
      setKeywords(data);
    });
  }, [inputValue, autocompleteFunction]);

  return (
    <>
      <Drawer placement="top" isOpen={isOpen} onClose={handleClose}>
        <DrawerOverlay />
        <DrawerContent minHeight={"100vh"}>
          <DrawerHeader pl={4}>
            <Flex gap={4}>
              <button onClick={handleClose}>
                <CaretLeftIcon />
              </button>
              <InputGroup gap={4}>
                <Input
                  placeholder="최소 2글자 이상 입력해 주세요"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onFocus={() => setIsSearchOpen(true)}
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
              loading ? (
                <Center>
                  <Spinner color="primary.normal" />
                </Center>
              ) : (
                <BoardStack>
                  {searchData.map(el => (
                    <FreeBoardItem
                      key={el.postId}
                      comments={el.commentCount}
                      likes={el.likeCount}
                      views={el.viewCount}
                      description={""}
                      date={formatDate(el.createdAt)}
                      title={el.title}
                      onClick={() =>
                        router.push(`/posting/${el.boardId}/${el.postId}`)
                      }
                      leftTag={el.leftTag}
                      tagType={el.tagType}
                    />
                  ))}
                </BoardStack>
              )
            ) : null}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <IconSearch onClick={onOpen} />
    </>
  );
}
export default SearchModal;
