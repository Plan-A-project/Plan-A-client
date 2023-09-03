import { useEffect, useState } from "react";

import { Box, Container, Stack, StackDivider, Text } from "@chakra-ui/react";

import { AppContainer, Header, ToggleTab } from "@/components/common";
import MyComment from "@/pages/components/MyComment";
import MyPost from "@/pages/components/MyPost";
import postApis from "@/api/post";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import commentApis from "@/api/comment";

const ManagePosts = () => {
  const [selectedTabNumber, setSelectedTabNumber] = useState<number>(1);
  const [myPost, setMyPost] = useState<any>([]);
  const [myComment, setMyComment] = useState<any>([]);
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
                  console.log(1131, el);
                  return <MyPost key={el} info={el} />;
                })}
              <Box ref={loader2}></Box>
            </Stack>
          </Box>
        )}
        {selectedTabNumber === 0 && (
          <Box px={0}>
            <Stack divider={<StackDivider borderColor="gray.200" />}>
              {myComment.length &&
                myComment.map((el: any) => {
                  return <MyComment key={el} info={el} />;
                })}
              <Box ref={loader}></Box>
            </Stack>
          </Box>
        )}
      </Container>
    </AppContainer>
  );
};

export default ManagePosts;
