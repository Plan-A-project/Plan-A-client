/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import { Badge } from "@chakra-ui/layout";
import { useRouter } from "next/router";

import useBoardList from "@/hooks/board/useBoardList";
import { BOARD_ID_MAP } from "@/utils/boardIdMap";
import formatDate from "@/utils/formatDate";

import BoardStack from "./BoardStack";
import FreeBoardItem from "./FreeBoardItem";

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
  const [order, setOrder] = useState<OrderType>("recent");
  const [page, setPage] = useState(1);
  const [isFinish, setIsFinish] = useState(false);
  const [boardList, setBoardList] = useState<any[]>([]);
  const boardListResponse = useBoardList({ boardId, order, page, type });

  const handleChangeOrder = (type: OrderType) => {
    if (boardList === null) return;
    setPage(1);
    setIsFinish(false);
    setOrder(type);
    setBoardList([]);
  };

  useEffect(() => {
    if (boardListResponse === null) return;
    if (boardListResponse?.length === 0) {
      setIsFinish(true);
      return;
    }
    setBoardList(p => [...p, ...boardListResponse]);
  }, [boardListResponse]);

  const getMorePosts = () => {
    if (isFinish) return;
    setPage(p => p + 1);
  };

  return (
    <div>
      <div>
        <Badge
          bg={order === "recent" ? "primary.100" : "gray.100"}
          color={order === "recent" ? "primary.500" : "gray.400"}
          borderColor={order === "recent" ? "primary.500" : "gray.400"}
          border={order === "recent" ? "1px solid" : "none"}
          borderRadius={"md"}
          paddingY={"1px"}
          mr={"8px"}
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
          onClick={() => handleChangeOrder("popular")}
        >
          인기순
        </Badge>
      </div>
      {boardList === null ? (
        "loading..."
      ) : (
        <BoardStack>
          {boardList.map(el => {
            console.log("elel", el);
            const date = formatDate(el.createdAt);
            return (
              <FreeBoardItem
                key={el.comments}
                comments={el.comments}
                likes={el.likes}
                date={date}
                views={el.views}
                title={el.title}
                onClick={() => router.push(`/posting/${boardId}/${el.id}`)}
              />
            );
          })}
        </BoardStack>
      )}
      {!isFinish ? <button onClick={getMorePosts}>더보기</button> : null}
    </div>
  );
};
export default PostsList;
