import React from "react";
import { Stack, Tag, Flex, Heading, Text, Image, Icon } from "@chakra-ui/react";
import { SlHeart } from "react-icons/sl";
import { BsChatRightText } from "react-icons/bs";

const MyPost = () => {
  return (
    <Stack>
      <Tag w={"fit-content"} colorScheme="linkedin">
        취업 게시판
      </Tag>
      <Flex justify={"space-between"}>
        <Stack spacing={"4px"}>
          <Heading fontSize={"16px"}>3월 대기업 공채 리스트</Heading>
          <Text
            fontSize={"14px"}
            lineHeight={"17px"}
            // isTruncated={true}
            maxW={"239px"}
            noOfLines={[1, 2]}
          >
            본문이 들어갈 자리입니다. 본문이 들어갈 자리입니다. 본문이 들어갈
            자리입니다. 본문이 들어갈 자리입니다.
          </Text>
        </Stack>
        <Image
          borderRadius={"8px"}
          boxSize="56px"
          alt="게시글 이미지"
          src="https://images.unsplash.com/photo-1683223585296-a993e814bdcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3695&q=80"
        />
      </Flex>
      <Flex justify={"space-between"}>
        <Text fontSize={"10px"}>2023.03.11</Text>
        <Flex gap={"8px"}>
          <Flex align={"center"} justify={"center"} gap={"5px"}>
            <Icon as={BsChatRightText} w={"14px"} h={"12px"} />
            <Text fontSize={"10px"}>24</Text>
          </Flex>
          <Flex gap={"8px"}>
            <Flex align={"center"} justify={"center"} gap={"5px"}>
              <Icon as={SlHeart} w={"14px"} h={"12px"} />
              <Text fontSize={"10px"}>486</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default MyPost;
