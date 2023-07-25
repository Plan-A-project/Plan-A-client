import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import postApis from "@/api/post";
import BoardComment from "@/components/board/BoardComment";
import BoardCommentInput from "@/components/board/BoardCommentInput";
import BoardCommentList from "@/components/board/BoardCommentList";
import BoardView from "@/components/board/BoardView";
import { AppContainer, Header } from "@/components/common";

function BoardDetail() {
  const [data, setData] = useState<any>();

  const {
    query: { boardId, postId },
  } = useRouter();

  // http://localhost:3000/posting/4/18

  async function updatePost() {
    const res = await postApis.readPost({ boardId, postId });
    if (res.ok) {
      setData(res.data!.data);
    }
  }

  useEffect(() => {
    boardId && postId && updatePost();
  }, [boardId, postId]);

  console.log("data", data);
  return (
    <AppContainer>
      {data ? (
        <>
          <Header back />
          <BoardView {...data} />
          <BoardCommentList>
            <BoardComment
              profileImage={"https://via.placeholder.com/150"}
              username="하이"
              depth={0}
              content="댓글입니다."
              withProfile
            />
            <BoardComment
              username="하이"
              depth={0}
              content="댓글입니다."
              withProfile
            />
            <BoardComment username="하이" depth={0} content="댓글입니다." />
          </BoardCommentList>
          <BoardCommentInput />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </AppContainer>
  );
}

export default BoardDetail;
