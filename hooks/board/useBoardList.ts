import { useEffect, useState } from "react";
import axios from "axios";
import { BoardItemType } from "@/types";
import boardApis from "@/api/board";

type Props = {
  boardId: number;
  type?: "NORMAL" | "ANNOUNCEMENT" | "RECRUITMENT";
  order?: "recent" | "popular";
  page: number;
};

function useBoardList({
  boardId,
  type = "NORMAL",
  page,
  order = "popular",
}: Props) {
  const [boardList, setBoardList] = useState<BoardItemType[] | null>(null);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `https://api.infli.co/boards/${boardId}/posts`,
        {
          params: {
            type,
            page,
            order,
            size: 20,
          },
        },
      );
      // const { data } = await boardApis.getBoardList(
      //   boardId,
      //   type,
      //   page,
      //   order,
      //   5,
      // );
      // setBoardList(data.data.posts);
      const newBoardList: BoardItemType[] = data?.posts?.map((el: any) => ({
        id: el.postId,
        title: el?.title ?? "제목 없음",
        description: el?.main ?? "본문 없음",
        views: el?.viewCount ?? 0,
        image: el?.thumbnailUrl ?? "",
        imageAlt: el?.thumbnailUrl ? "thumbnail" : null,
        likes: el?.likeCount,
        comments: el?.commentCount,
        createdAt: el.createdAt,
      }));
      setBoardList(newBoardList);
    })();
  }, [type, order, boardId, page]);
  console.log("121212", boardList);
  return boardList;
}

export default useBoardList;
