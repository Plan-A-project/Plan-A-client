import { Box, Center, Divider, Flex, Stack, Text } from "@chakra-ui/layout";
import BoardCommentList from "../board/BoardCommentList";
import BoardComment from "../board/BoardComment";
import { CommentBar } from "../common";
import { useEffect, useState } from "react";
import commentApis from "@/api/comment";
import { Spinner } from "@chakra-ui/react";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

type CommentBarProps = {
  postId: any;
};
const ReviewCommentBar: React.FC<CommentBarProps> = ({ postId }) => {
  const [commentList, setCommentList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [parentCommentId, setParentCommentId] = useState<number>(0);
  const [isSentComment, setIsSentComment] = useState<boolean>(true);

  const { data: myComments, loader } = useInfiniteScroll(
    commentApis.getComment,
    "comments",
    postId,
  );

  useEffect(() => {
    setCommentList(myComments);
  }, [myComments]);

  useEffect(() => {
    async function fetchComment() {
      const comments = await commentApis.getComment(postId, 1);
      if (comments.data) {
        if (!isSentComment) {
          setCommentList((prevComments: any) => [
            ...comments.data?.data.comments,
          ]);
        } else {
          setCommentList((prevComments: any) => [
            ...prevComments,
            ...comments.data?.data.comments,
          ]);
        }
        setIsLoading(false);
      }

      // Stop fetching comments if less than 20
      // if (comments.data?.data.comments.length < 20) {
      //   setIsLoading(false);
      // } else {
      //   setLoading(false);
      // }
    }

    // If isSentComment has changed, reset the page count to 1 and empty the comment list
    // if (isSentComment) {
    //   setPage(1);
    //   setCommentList([]);
    //   setIsSentComment(false); // reset the isSentComment back to its initial state
    // } else {
    fetchComment();
    // }
  }, [postId, isSentComment]);
  const handleReply = (id: number) => {
    setParentCommentId(id);
  };
  return (
    <Stack justifyContent={"center"}>
      <Text align={"center"} textStyle={"headline2"}>
        댓글
      </Text>
      <Divider variant={"solid"} />
      <BoardCommentList>
        {isLoading ? (
          <Center>
            <Spinner color="primary.normal" />
          </Center>
        ) : commentList.length ? (
          commentList?.map(
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
                <Box key={el.id} overflowY={"auto"} maxH={"600px"}>
                  <BoardComment
                    handleReply={() => handleReply(el.id)}
                    username={
                      el.postWriter
                        ? "작성자"
                        : el.nickname
                        ? el.nickname
                        : `익명${el.identifier}`
                    }
                    myComment={el.myComment}
                    content={el.content}
                    createdAt={el.createdAt}
                    likesCount={el.likesCount}
                    isReply={el.parentComment}
                    commentId={el.id}
                    isDeleted={el.deleted}
                    pressedLikeOnThisComment={el.pressedLikeOnThisComment}
                    withProfile
                  />
                </Box>
              );
            },
          )
        ) : (
          <Center paddingTop={12}>
            <Text textStyle={"subtitle2"} fontWeight={500}>
              현재 작성된 댓글이 없습니다. <br />
              여러분의 생생한 이야기를 들려주세요!
            </Text>
          </Center>
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
      <Box ref={loader}></Box>
      <CommentBar
        handleCommentList={setCommentList}
        handleParentId={setParentCommentId}
        postId={postId}
        parentCommentId={parentCommentId}
        handleComment={setIsSentComment}
        commentState={isSentComment}
      />
    </Stack>
  );
};

export default ReviewCommentBar;
