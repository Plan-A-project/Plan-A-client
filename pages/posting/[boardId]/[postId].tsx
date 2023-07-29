import React, { useEffect, useRef, useState } from "react";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

import commentApis from "@/api/comment";
import postApis from "@/api/post";
import BoardComment from "@/components/board/BoardComment";
import BoardCommentList from "@/components/board/BoardCommentList";
import BoardView from "@/components/board/BoardView";
import { AppContainer, CommentBar, Header } from "@/components/common";
import ThreeDotsIcon from "@/components/icons/ThreeDotsIcon";
import useDrawer from "@/hooks/useDrawer";
import { useDropdown } from "@/hooks/useDropdown";
import useSnackbar from "@/hooks/useSnackbar";

function BoardDetail() {
  const [data, setData] = useState<any>();
  const [commentList, setCommentList] = useState<any>([]);
  const [isSentComment, setIsSentComment] = useState(false);
  const router = useRouter();
  const {
    query: { boardId, postId },
  } = router;

  const [isActivated, activateSnackbar, Snackbar] =
    useSnackbar("해당 게시글이 삭제되었습니다");

  const ref = useRef<HTMLButtonElement>(null);
  const [dropdown, toggle] = useDropdown({
    menus: ["수정하기", "삭제하기"],
    xGap: -15,
    yGap: 0,
    hAlign: "right",
    vAlign: "bottom",
    onMenuClick: menu => {
      if (menu === 0) {
        // 수정하기페이지 이동
        router.push(`/form?boardId=${boardId}?postId=${postId}`);
      } else if (menu === 1) {
        onOpen();
      }
    },
    ref,
  });
  const [onOpen, ButtonDrawer] = useDrawer({
    header: "정말 삭제하시겠어요?",
    subtitle: "",
    children: <></>,
    btnContent: "삭제하기",
    btnHandler: deletePost,
  });

  // 예시글: http://localhost:3000/posting/4/18
  async function readPost() {
    const res = await postApis.readPost({ postId });
    console.log(1212, res);
    if (res.ok) {
      setData(res.data!.data);
    }
  }
  async function deletePost() {
    const res = await postApis.deletePost({ postId });
    if (res.ok) {
      //   navigate(-1);
      activateSnackbar();
    }
  }
  useEffect(() => {
    async function fetchComment() {
      const comments = await commentApis.getComment({ id: postId, page: "1" });
      console.log(comments.data?.data.comments);

      setCommentList(comments.data?.data.comments);
    }
    fetchComment();
  }, [postId, isSentComment]);
  useEffect(() => {
    boardId && postId && readPost();
  }, [boardId, postId]);

  return (
    <AppContainer>
      {data ? (
        <>
          {dropdown}
          {isActivated && <Snackbar />}
          <ButtonDrawer />
          <Header
            back
            rightNode={
              <Button
                ref={ref}
                onClick={() => toggle(true)}
                bg={"none"}
                _focus={{ bg: "none" }}
              >
                <ThreeDotsIcon />
              </Button>
            }
          />
          {/* 권한체크 */}
          <BoardView {...data} />
          <BoardCommentList>
            {commentList?.map((el: { id: any; content: string }) => {
              return (
                <>
                  <BoardComment
                    username={`익명${el.id}`}
                    depth={0}
                    content={el.content}
                  />
                </>
              );
            })}
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
          <CommentBar
            postId={postId}
            handleComment={setIsSentComment}
            commentState={isSentComment}
          />
          {/* <BoardCommentInput postId={postId} /> */}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </AppContainer>
  );
}

export default BoardDetail;
