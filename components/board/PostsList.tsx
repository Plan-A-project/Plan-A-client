/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key, useEffect, useState } from "react";

import { Badge, Box, Center, Text, Flex } from "@chakra-ui/layout";
import { useRouter } from "next/router";

import useBoardList from "@/hooks/board/useBoardList";
import { BOARD_ID_MAP } from "@/utils/boardIdMap";
import formatDate from "@/utils/formatDate";

import BoardStack from "./BoardStack";
import FreeBoardItem from "./FreeBoardItem";
import checkDday from "@/utils/checkDday";
import formatDateRange from "@/utils/formatDateRange";
import { Spinner } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { boardListState } from "@/state/atoms/board/boardState";
import { scrollPositionState } from "@/state/atoms/board/boardState";
import { RepeatIcon } from "@chakra-ui/icons";
import axios from "axios";

type OrderType = "recent" | "popular";

const PostsList = ({
  boardName,
  type = "NORMAL",
}: {
  boardName: "채용" | "대외활동" | "동아리" | "익명게시판" | "학교생활";
  type?: "NORMAL" | "ANNOUNCEMENT" | "RECRUITMENT";
}) => {
  const boardId = BOARD_ID_MAP[boardName];
  const router = useRouter();
  const [boardInfo, setBoardInfo] = useRecoilState<any>(boardListState);
  const [order, setOrder] = useState<OrderType>(boardInfo[boardId].type);
  const [page, setPage] = useState<number>(1);
  const [isFinish, setIsFinish] = useState(false);
  const [scrollPosition, setScrollPosition] =
    useRecoilState(scrollPositionState);
  const boardListResponse = useBoardList({ boardId, order, page, type });
  const firstPageList: any = useBoardList({ boardId, order, page: 1, type });
  const [rotate, setRotate] = useState(false);

  // const [loading, setLoading] = useState<boolean>(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + window.scrollY >=
  //         document.documentElement.scrollHeight - 500 &&
  //       !loading
  //     ) {
  //       setPage(prevPage => prevPage + 1);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [loading]);
  const handleReload = async () => {
    setRotate(true); // 애니메이션 시작
    location.reload();
  };
  const handleChangeOrder = (orderType: OrderType) => {
    if (boardInfo[boardId] === null) return;
    setPage(1);
    setIsFinish(false);
    setOrder(orderType);
    if (boardListResponse) {
      setBoardInfo((p: any) => {
        return {
          ...p,
          [boardId]: { ...p[boardId], [type]: [], type: orderType },
        };
      });
    }
  };
  useEffect(() => {
    if (rotate) {
      const timer = setTimeout(() => setRotate(false), 2000); // 애니메이션이 끝난 후에 상태를 초기화합니다.
      return () => clearTimeout(timer);
    }
  }, [rotate]);
  useEffect(() => {
    if (boardListResponse && boardInfo[boardId][type] && firstPageList) {
      // 만약 새로운 글이 올라오면 전역상태 첫글과 서버에서 받아온 첫글을 비교하여 다시 렌더해줌
      if (boardInfo[boardId][type][0]?.postId !== firstPageList[0]?.postId) {
        // location.reload();
        setBoardInfo((p: any) => {
          return {
            ...p,
            [boardId]: {
              ...p[boardId],
              [type]: firstPageList,
            },
          };
        });
      }
    }
  }, [firstPageList]);

  useEffect(() => {
    // 게시글 리스트가 Recoil 상태에 없을 경우에만 API 호출로 데이터를 가져옵니다.
    if (boardListResponse === null) return;
    if (boardListResponse?.length < 20) {
      setIsFinish(true);
    }
    if (boardListResponse && boardInfo[boardId][type] && firstPageList) {
      // 만약 새로운 글이 올라오면 전역상태 첫글과 서버에서 받아온 첫글을 비교하여 다시 렌더해줌
      // 전역상태와 방금 받아온 글 리스트가 다를 때(즉 새로운 페이지를 불러왔을 때) 및 마지막 페이지가 아닐때(20으로 나눠질 때)
      if (
        boardInfo[boardId][type][0]?.postId !== boardListResponse[0]?.postId &&
        boardInfo[boardId][type].length % 20 === 0
      ) {
        setBoardInfo((p: any) => {
          return {
            ...p,
            [boardId]: {
              ...p[boardId],
              [type]: [...boardInfo[boardId][type], ...boardListResponse],
            },
          };
        });
      }
    }
  }, [boardListResponse]);

  // 게시글 진입 후 다시 리스트로 돌아올 시 페이지를 설정해줘야함(매번 1이면 안됨)
  useEffect(() => {
    // setBoardInfo((p: any) => {
    //   return {
    //     ...p,
    //     [boardId]: { ...p[boardId], type: "recent" },
    //   };
    // });
    setPage(Math.floor(boardInfo[boardId][type].length / 20) + 1);
  }, []);

  useEffect(() => {
    if (!boardInfo[boardId][type]?.length && boardListResponse) {
      setBoardInfo((p: any) => {
        return {
          ...p,
          [boardId]: {
            ...p[boardId],
            [type]: [...boardInfo[boardId][type], ...boardListResponse],
          },
        };
      });
    }
  }, [boardListResponse]);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 스크롤 위치를 복원
    window.scrollTo(0, scrollPosition);

    const handleBeforeHistoryChange = () => {
      setScrollPosition(window.scrollY);
    };

    router.events.on("beforeHistoryChange", handleBeforeHistoryChange);

    return () => {
      // 페이지 이동 전 스크롤 위치 저장을 위한 이벤트 리스너 제거
      router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
    };
  }, []);

  // useEffect(() => {
  //   if (boardListResponse === null) return;
  //   if (boardListResponse?.length === 0) {
  //     setIsFinish(true);
  //     return;
  //   }

  //   setBoardList(p => [...p, ...boardListResponse]);
  // }, [boardListResponse]);

  const getMorePosts = () => {
    if (isFinish) return;
    setPage(p => p + 1);
  };
  return (
    <div>
      <Flex justify={"space-between"} align={"center"}>
        <Box>
          <Badge
            bg={order === "recent" ? "primary.100" : "gray.100"}
            color={order === "recent" ? "primary.500" : "gray.400"}
            borderColor={order === "recent" ? "primary.500" : "gray.400"}
            border={order === "recent" ? "1px solid" : "none"}
            borderRadius={"md"}
            paddingY={"1px"}
            mr={"8px"}
            fontSize="0.8rem"
            onClick={() => handleChangeOrder("recent")}
          >
            최신순
          </Badge>
          <Badge
            bg={order === "popular" ? "primary.100" : "gray.100"}
            color={order === "popular" ? "primary.500" : "gray.400"}
            borderColor={order === "popular" ? "primary.500" : "gray.400"}
            border={order === "popular" ? "1px solid" : "none"}
            borderRadius={"md"}
            paddingY={"1px"}
            fontSize="0.8rem"
            onClick={() => handleChangeOrder("popular")}
          >
            인기순
          </Badge>
        </Box>
        <RepeatIcon
          boxSize={"22px"}
          onClick={handleReload}
          color={"primary.normal"}
          style={rotate ? { animation: "rotateIcon 2s linear" } : {}}
        />
      </Flex>
      {!boardInfo[boardId][type]?.length &&
      boardListResponse &&
      boardListResponse.length ? (
        <Center>
          <Spinner color="primary.normal" />
        </Center>
      ) : (
        <BoardStack>
          {boardInfo[boardId][type]?.map(
            (el: {
              recruitmentStartDate: any;
              recruitmentEndDate: any;
              createdAt: string;
              commentCount: number;
              likeCount: number | undefined;
              viewCount: number;
              title: string;
              postId: any;
              hasImage: boolean;
            }) => {
              const date = el.recruitmentStartDate
                ? formatDateRange(
                    el.recruitmentStartDate,
                    el.recruitmentEndDate,
                  )
                : formatDate(el.createdAt);
              return (
                <FreeBoardItem
                  key={el.commentCount}
                  comments={el.commentCount}
                  likes={el.likeCount}
                  date={date}
                  views={el.viewCount}
                  title={el.title}
                  hasImage={el.hasImage}
                  dday={
                    !el.recruitmentStartDate
                      ? null
                      : checkDday(
                          el.recruitmentStartDate,
                          el.recruitmentEndDate,
                        )
                  }
                  onClick={() =>
                    router.push(`/posting/${boardId}/${el.postId}`)
                  }
                />
              );
            },
          )}
        </BoardStack>
      )}
      {boardInfo[boardId][type]?.length % 20 === 0 &&
      boardInfo[boardId][type]?.length ? (
        <Box w={"full"} textAlign={"center"} my={4}>
          <Text textStyle={"subtitle2"} onClick={getMorePosts}>
            더보기
          </Text>
        </Box>
      ) : null}
    </div>
  );
};
export default PostsList;
