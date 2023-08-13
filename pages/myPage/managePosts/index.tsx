import { useState } from "react";

import { Box, Container, Stack, StackDivider, Text } from "@chakra-ui/react";

import { AppContainer, Header, ToggleTab } from "@/components/common";
import MyComment from "@/pages/components/MyComment";
import MyPost from "@/pages/components/MyPost";

const ManagePosts = () => {
  const [selectedTabNumber, setSelectedTabNumber] = useState<number>(1);

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
        {!selectedTabNumber || (
          <Box px={0}>
            <Stack divider={<StackDivider borderColor="gray.200" />}>
              <MyPost />
              <MyPost />
            </Stack>
          </Box>
        )}
        {!selectedTabNumber ? (
          <Box px={0}>
            <Stack divider={<StackDivider borderColor="gray.200" />}>
              <MyComment />
              <MyComment />
            </Stack>
          </Box>
        ) : (
          ""
        )}
      </Container>
    </AppContainer>
  );
};

export default ManagePosts;
