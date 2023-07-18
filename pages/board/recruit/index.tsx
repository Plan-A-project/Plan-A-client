/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from "react";

import { Badge } from "@chakra-ui/layout";
import { useRouter } from "next/router";

import BoardFAB from "@/components/board/BoardFAB";
import BoardStack from "@/components/board/BoardStack";
import FreeBoardItem from "@/components/board/FreeBoardItem";
import FreeBoardTab from "@/components/board/FreeBoardTabs";
import { Carousel, Header } from "@/components/common";
import IconSearch from "@/components/icons/IconSearch";

import { AllPosts } from "../free";

function RecruitMain() {
  return (
    <div>
      <Header p={4} back title="채용" rightNode={<IconSearch />} />
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
      <FreeBoardTab
        px={4}
        leftLabel="전체"
        rightLabel="모집"
        leftTab={<AllPosts />}
        rightTab={<RecruitPosts />}
      ></FreeBoardTab>
      <BoardFAB />
    </div>
  );
}

export default RecruitMain;

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
          title: `기업명 ${type}`,
          description: "5월 채용연계형 인턴 모집",
          views: 24,
          date: "5.1~5.7",
        },
        {
          id: 2,
          title: `기업명 ${type}`,
          description: "5월 채용연계형 인턴 모집",
          views: 24,
          date: "5.1~5.7",
        },
        {
          id: 3,
          title: `기업명 ${type}`,
          description: "5월 채용연계형 인턴 모집",
          views: 24,
          date: "5.1~5.7",
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
          onClick={() => handleChangeSort("popular")}
        >
          인기순
        </Badge>
      </div>
      {loading ? (
        "loading..."
      ) : (
        <BoardStack>
          {boardList.map((el, i) => (
            <FreeBoardItem
              key={i}
              comments={el.comments}
              likes={el.likes}
              date={el.date}
              views={el.views}
              title={el.title}
              description={el.description}
              leftTag="기업"
              tagType="secondary"
              bookmark={true}
              dday={1}
              onClick={() => router.push(`/board/${el.id}`)}
            />
          ))}
        </BoardStack>
      )}
    </div>
  );
};
