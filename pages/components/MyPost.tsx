import React from "react";

import { Stack, Tag, Flex, Heading, Text, Image, Icon } from "@chakra-ui/react";
import { BsChatRightText } from "react-icons/bs";
import { SlHeart } from "react-icons/sl";
import formatDate from "@/utils/formatDate";
const MyPost = ({ info }: any) => {
  console.log("iinn", info);
  return (
    <Stack spacing={0}>
      <Tag w={"fit-content"} colorScheme="linkedin" textStyle={"caption2"}>
        {info?.boardName || ""}
      </Tag>
      <Flex justify={"space-between"} pt={"8px"}>
        <Stack spacing={"4px"}>
          <Text textStyle={"subtitle1"}>{info?.title}</Text>
          <Text
            textStyle={"body1"}
            color={"#75788A"}
            maxW={"239px"}
            noOfLines={[1, 2]}
          >
            {info?.content}
          </Text>
        </Stack>
        {/* <Image
          borderRadius={"8px"}
          boxSize="56px"
          alt="게시글 이미지"
          src={info.thumbnailUrl}
        /> */}
      </Flex>
      <Flex justify={"space-between"} pt={"14px"}>
        <Text textStyle={"overline"}>{formatDate(info?.createdAt)}</Text>
        <Flex gap={"8px"}>
          <Flex align={"center"} justify={"center"} gap={"5px"}>
            <Icon as={BsChatRightText} w={"14px"} h={"12px"} />
            <Text textStyle={"overline"}>{info?.commentCount}</Text>
          </Flex>
          <Flex gap={"8px"}>
            <Flex align={"center"} justify={"center"} gap={"5px"}>
              <Icon as={SlHeart} w={"14px"} h={"12px"} />
              <Text textStyle={"overline"}>{info?.likeCount}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default MyPost;
