import { useEffect, useState } from "react";

import { Box, Container, Stack, StackDivider, Text } from "@chakra-ui/react";

import { AppContainer, Header, ToggleTab } from "@/components/common";
import MyComment from "@/pages/components/MyComment";
import MyPost from "@/pages/components/MyPost";
import postApis from "@/api/post";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import commentApis from "@/api/comment";
import { useRouter } from "next/router";

const ManagePosts = () => {
  const [selectedTabNumber, setSelectedTabNumber] = useState<number>(0);
  const [myPost, setMyPost] = useState<any>([]);
  const [myComment, setMyComment] = useState<any>([]);
  const router = useRouter();
  const { data: myPosts, loader: loader2 } = useInfiniteScroll(
    postApis.getMyPosts,
    "posts",
  );
  const { data: myComments, loader } = useInfiniteScroll(
    commentApis.getMyComment,
    "comments",
  );

  useEffect(() => {
    setMyPost(myPosts);
    setMyComment(myComments);
    console.log("cctt", myComments);
  }, [myPosts, myComments]);
  return (
    <AppContainer>
      <Header back leftTitle title="게시글 관리" />
      <Container p={0} mt={"16px"}>
        <ToggleTab
          activatedTab={selectedTabNumber}
          setActivatedTab={setSelectedTabNumber}
          firstContent="내 게시글"
          secondContent="내 댓글"
        />
        <Text textStyle={"caption1"} my={4}>
          최신순
        </Text>
        {selectedTabNumber === 1 && (
          <Box px={0}>
            <Stack divider={<StackDivider borderColor="gray.200" />}>
              {myPost.length &&
                myPost.map((el: any) => {
                  const boardId =
                    el.boardName === "익명"
                      ? 4
                      : el.boardName === "채용"
                      ? 1
                      : el.boardName === "대외활동"
                      ? 2
                      : el.boardName === "학교생활"
                      ? 5
                      : "";
                  return (
                    <Box
                      onClick={() =>
                        router.push(`/posting/${boardId}/${el.postId}`)
                      }
                      key={el}
                    >
                      <MyPost info={el} />
                    </Box>
                  );
                })}
            </Stack>
          </Box>
        )}
        {selectedTabNumber === 0 && (
          <Box px={0}>
            <Stack divider={<StackDivider borderColor="gray.200" />}>
              {myComment.length &&
                myComment.map((el: any) => {
                  const boardId =
                    el.boardName === "익명"
                      ? 4
                      : el.boardName === "채용"
                      ? 1
                      : el.boardName === "대외활동"
                      ? 2
                      : el.boardName === "학교생활"
                      ? 5
                      : "";
                  return (
                    <Box key={el}>
                      <MyComment info={el} />
                    </Box>
                  );
                })}
            </Stack>
          </Box>
        )}
        <Box ref={loader}></Box>
        <Box ref={loader2}></Box>
      </Container>
    </AppContainer>
  );
};

export default ManagePosts;
