import { useEffect, useState } from "react";

import axios from "axios";

import { BoardItemType } from "@/types";

type Props = {
  boardId: number;
  type?: "NORMAL" | "ANNOUNCEMENT" | "RECRUITMENT";
  order?: "recent" | "popular";
  page: number;
};

function useBoardList({
  boardId,
  order = "popular",
  type = "NORMAL",
  page,
}: Props) {
  const [boardList, setBoardList] = useState<BoardItemType[] | null>(null);
  useEffect(() => {
    const AccessToken = window.localStorage.getItem("accessToken");
    const headers = {
      "Access-Token": AccessToken,
      "Content-Type": "application/json",
    };
    (async function () {
      const { data } = await axios.get(
        `http://dukcode.iptime.org/api/posts/boards/${boardId}`,
        {
          params: {
            order,
            type,
            page,
          },
          headers,
        },
      );
      console.log("DATA", data);
      const newBoardList: BoardItemType[] = data?.posts?.map((el: any) => ({
        id: el.postId,
        title: el?.title ?? "제목 없음",
        description: el?.main ?? "본문 없음",
        views: el?.viewCount ?? 0,
        image: el?.thumbnailUrl ?? "",
        imageAlt: el?.thumbnailUrl ? "thumbnail" : null,
        likes: el?.likeCount,
        comments: el?.commentCount,
      }));
      setBoardList(newBoardList);
    })();
  }, [type, order, boardId, page]);

  return boardList;
}

export default useBoardList;
