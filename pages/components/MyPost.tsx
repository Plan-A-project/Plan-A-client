import { Stack, Flex, Text, Image } from "@chakra-ui/react";

import PostBottomInfo from "@/components/common/PostBottomInfo";

import CustomTag from "./CustomTag";

const MyPost = () => {
  return (
    <Stack spacing={0}>
      <CustomTag
        title="취업 게시판"
        background="primary.50"
        color="primary.800"
      />
      <Flex justify={"space-between"} pt={"8px"}>
        <Stack spacing={"4px"}>
          <Text textStyle={"body1"}>3월 대기업 공채 리스트</Text>
          <Text
            textStyle={"body2"}
            color={"grey.600"}
            width={"263px"}
            maxH={"40px"}
            noOfLines={[2]}
          >
            본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다. 본문이 들어갈
            자리입니다. 본문이 들어갈 자리입니다.
          </Text>
        </Stack>
        <Image
          borderRadius={"12px"}
          boxSize="64px"
          alt="게시글 이미지"
          src="https://images.unsplash.com/photo-1683223585296-a993e814bdcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3695&q=80"
        />
      </Flex>
      <PostBottomInfo
        createDate="2023.05.01"
        likeCount={43}
        commentCount={15}
      />
    </Stack>
  );
};

export default MyPost;
