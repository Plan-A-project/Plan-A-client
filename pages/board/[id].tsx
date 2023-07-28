import React, { useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from "next/router";

import BoardComment from "@/components/board/BoardComment";
import BoardCommentInput from "@/components/board/BoardCommentInput";
import BoardCommentList from "@/components/board/BoardCommentList";
import BoardView from "@/components/board/BoardView";
import { AppContainer, Header } from "@/components/common";

function BoardDetail() {
  const [data, setData] = useState<any>();

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    const AccessToken = window.localStorage.getItem("accessToken");
    const headers = {
      "Access-Token": AccessToken,
      "Content-Type": "application/json",
    };

    if (!id) return;
    (async function () {
      const { data } = await axios.get(
        `http://dukcode.iptime.org/board/${4}/posts`,
        {
          headers,
        },
      );
      console.log(data);
      await setTimeout(() => {
        setData({
          title: "HELLO",
          date: "2022.04.04",
          content:
            "본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다.",
          images: [
            "https://via.placeholder.com/300x120",
            "https://via.placeholder.com/300x120",
            "https://via.placeholder.com/300x120",
          ],
        });
      }, 1000);
    })();
  }, [id]);

  return (
    <AppContainer>
      {data !== undefined ? (
        <>
          <Header back title="테스트" />
          <BoardView
            title={data?.title}
            date={data?.date}
            content={data?.content}
            images={data?.images}
          />
          <BoardCommentList>
            <BoardComment
              profileImage="https://via.placeholder.com/150"
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
        <h1>Loading...</h1>
      )}
    </AppContainer>
  );
}

export default BoardDetail;
