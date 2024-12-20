import React, { useEffect, useRef, useState } from "react";

import { Button, Center, Spinner } from "@chakra-ui/react";
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

import { useSetRecoilState } from "recoil";
import { updatePostingAtom } from "@/state/atoms/posting/postingAtom";

function BoardDetail() {
  const [data, setData] = useState<any>();
  const [commentList, setCommentList] = useState<any>([]);
  const [isSentComment, setIsSentComment] = useState(false);
  const router = useRouter();
  const {
    query: { boardId, postId },
  } = router;
  const [parentCommentId, setParentCommentId] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setUpdatePosting = useSetRecoilState(updatePostingAtom);
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
        setUpdatePosting(true);
        router.push(`/board/form?postId=${postId}`);
      } else if (menu === 1) {
        onOpen();
      }
    },
    ref,
  });
  const [onOpen, ButtonDrawer, onClose] = useDrawer({
    header: "정말 삭제하시겠어요?",
    subtitle: "",
    children: <></>,
    btnContent: "삭제하기",
    btnHandler: deletePost,
  });
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 500 &&
        !loading
      ) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);
  useEffect(() => {
    async function fetchComment() {
      setLoading(true);

      const comments = await commentApis.getComment(postId, page);
      if (comments.data) {
        setCommentList((prevComments: any) => [
          ...prevComments,
          ...comments.data?.data.comments,
        ]);
      }

      // Stop fetching comments if less than 20
      if (comments.data?.data.comments.length < 20) {
        setIsLoading(false);
      } else {
        setLoading(false);
      }
    }

    // If isSentComment has changed, reset the page count to 1 and empty the comment list
    if (isSentComment) {
      setPage(1);
      setCommentList([]);
      setIsSentComment(false); // reset the isSentComment back to its initial state
    } else {
      fetchComment();
    }
  }, [postId, page, isSentComment]);

  // 예시글: http://localhost:3000/posting/4/18
  async function readPost() {
    setIsLoading(true);
    const res = await postApis.readPost({ postId });
    if (res.ok) {
      setData(res.data!.data);
      setIsLoading(false);
    } else if (res.code === 401) {
      alert("로그인을 진행해주세요.");
      router.push("/myPage");
      setIsLoading(false);
    }
  }

  async function deletePost() {
    const res = await postApis.deletePost({ postId });
    if (res.ok) {
      //   navigate(-1);
      activateSnackbar();
      onClose();
      router.back();
    }
  }

  useEffect(() => {
    boardId && postId && readPost();
  }, [boardId, postId]);

  const handleReply = (id: number) => {
    setParentCommentId(id);
  };
  console.log(1324, data);
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
              data.myPost || data.admin ? (
                // data.myPost ? (
                <Button
                  ref={ref}
                  onClick={() => toggle(true)}
                  bg={"none"}
                  _focus={{ bg: "none" }}
                >
                  <ThreeDotsIcon />
                </Button>
              ) : (
                <></>
              )
            }
          />
          <BoardView {...data} />
          <BoardCommentList>
            {commentList?.map(
              (el: {
                id: any;
                content: string;
                identifier: number;
                postWriter: boolean;
                createdAt: string;
                likesCount: number;
                parentComment: boolean;
                myComment: boolean;
                pressedLikeOnThisComment: boolean;
                deleted: boolean;
                nickname: string;
              }) => {
                return (
                  <>
                    <BoardComment
                      handleReply={() => handleReply(el.id)}
                      username={
                        el.postWriter
                          ? "작성자"
                          : el.nickname
                          ? el.nickname
                          : `익명${el.identifier}`
                      }
                      // myComment={el.myComment}
                      myComment={el.myComment || data?.admin}
                      content={el.content}
                      createdAt={el.createdAt}
                      likesCount={el.likesCount}
                      isReply={el.parentComment}
                      commentId={el.id}
                      isDeleted={el.deleted}
                      pressedLikeOnThisComment={el.pressedLikeOnThisComment}
                    />
                  </>
                );
              },
            )}
            {/* <BoardComment
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
            <BoardComment username="하이" depth={0} content="댓글입니다." /> */}
          </BoardCommentList>
          <CommentBar
            handleCommentList={setCommentList}
            handleParentId={setParentCommentId}
            postId={postId}
            parentCommentId={parentCommentId}
            handleComment={setIsSentComment}
            commentState={isSentComment}
          />
          {/* <BoardCommentInput postId={postId} /> */}
        </>
      ) : (
        ""
      )}

      {isLoading && (
        <Center>
          <Spinner color="primary.normal" />
        </Center>
      )}
    </AppContainer>
  );
}

export default BoardDetail;
