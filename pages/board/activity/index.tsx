import React, { useCallback, useEffect, useState, useRef } from "react";

import { AddIcon } from "@chakra-ui/icons";
import { Badge, Center } from "@chakra-ui/layout";
import { useRouter } from "next/router";

import BoardStack from "@/components/board/BoardStack";
import FreeBoardItem from "@/components/board/FreeBoardItem";
import FreeBoardTab from "@/components/board/FreeBoardTabs";
import PostsList from "@/components/board/PostsList";
import { AppContainer, Header, FAB } from "@/components/common";
import SearchModal from "@/components/common/SearchModal";
import Navbar from "@/components/layout/Navbar";
import { useDropdown } from "@/hooks/useDropdown";
import { searchFunctionFactory, testAutocompleteFunction } from "@/utils/utils";
import { Spinner } from "@chakra-ui/react";

function ActivityMain() {
  const router = useRouter();
  const testSearchFunction = searchFunctionFactory("대외활동");
  const ref = useRef<HTMLButtonElement>(null);
  const [dropdown, toggle] = useDropdown({
    menus: ["일반글 쓰기", "모집글 쓰기"],
    xGap: -60, // 정렬 위치로 부터 x 거리
    yGap: 10, // 정렬 위치로 부터 y 거리
    hAlign: "left", // ref의 왼쪽에 정렬
    vAlign: "top", // ref 보다 위에 정렬
    onMenuClick: menu => {
      // menu = 인덱스 값 0 ~ 2
      menu
        ? router.push("/board/form?boardId=2&postType=RECRUITMENT")
        : router.push("/board/form?boardId=2&postType=NORMAL");
      // 클릭시 닫기도 가능
      // toggle(false);});
    },
    ref,
  });
  return (
    <AppContainer margin>
      <Navbar currentTab="infoBoard" />
      <Header
        py={4}
        back
        title="대외활동"
        rightNode={
          <SearchModal
            autocompleteFunction={testAutocompleteFunction}
            searchFunction={testSearchFunction}
          />
        }
      />
      <FreeBoardTab
        leftLabel="전체"
        rightLabel="모집"
        leftTab={<PostsList boardName={"대외활동"} />}
        rightTab={<PostsList boardName={"대외활동"} type="RECRUITMENT" />}
      ></FreeBoardTab>

      <FAB
        icon={<AddIcon boxSize={18} />}
        ref={ref}
        r={3}
        b={"80px"}
        onClick={() => toggle(true)}
      ></FAB>
      {dropdown}
    </AppContainer>
  );
}

export default ActivityMain;

type SortType = "recent" | "popular";
export const RecruitPosts = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState<SortType>("recent");
  const [boardList, setBoardList] = useState<any[]>([]);
  const getBoardList = useCallback((type: SortType) => {
    setLoading(true);
    setTimeout(() => {
      setBoardList([
        {
          id: 1,
          title: `제목 ${type}`,
          description: "본문",
          comments: 24,
          likes: 3,
          date: "2022-12-12",
        },
        {
          id: 2,
          title: `제목 ${type}`,
          description: "본문",
          comments: 24,
          likes: 3,
          date: "2022-12-12",
        },
        {
          id: 3,
          title: `제목 ${type}`,
          description: "본문",
          comments: 24,
          likes: 3,
          date: "2022-12-12",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    getBoardList(sort);
  }, [sort, getBoardList]);

  const handleChangeSort = (type: SortType) => {
    if (loading) return;
    setSort(type);
    getBoardList(type);
  };
  return (
    <div>
      <div>
        <Badge
          bg={sort === "recent" ? "primary.100" : "gray.100"}
          color={sort === "recent" ? "primary.500" : "gray.400"}
          borderColor={sort === "recent" ? "primary.500" : "gray.400"}
          border={sort === "recent" ? "1px solid" : "none"}
          borderRadius={"md"}
          paddingY={"1px"}
          mr={"8px"}
          onClick={() => handleChangeSort("recent")}
        >
          최신순
        </Badge>
        <Badge
          bg={sort === "popular" ? "primary.100" : "gray.100"}
          color={sort === "popular" ? "primary.500" : "gray.400"}
          borderColor={sort === "popular" ? "primary.500" : "gray.400"}
          border={sort === "popular" ? "1px solid" : "none"}
          borderRadius={"md"}
          paddingY={"1px"}
          fontSize="1rem"
          onClick={() => handleChangeSort("popular")}
        >
          인기순
        </Badge>
      </div>
      {loading ? (
        <Center>
          <Spinner color="primary.normal" />
        </Center>
      ) : (
        <BoardStack>
          {boardList.map(el => (
            <FreeBoardItem
              key={el.id}
              comments={el.comments}
              likes={el.likes}
              date="2022-12-12"
              views={el.views}
              title={el.title}
              leftTag="기업"
              tagType="primary"
              onClick={() => router.push(`/board/${el.id}`)}
            />
          ))}
        </BoardStack>
      )}
    </div>
  );
};
