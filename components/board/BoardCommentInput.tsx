import { useState } from "react";

import { Box, HStack, Input } from "@chakra-ui/react";

import commentApis from "@/api/comment";

import IconComment from "../icons/IconComment";
import IconSend from "../icons/IconSend";

const BoardCommentInput = ({ postId }: any) => {
  const [userInput, setUserInput] = useState("");
  const handleComment = async () => {
    const response = await commentApis.postComment({
      postId: postId,
      content: userInput,
    });
  };
  return (
    <>
      <Box h={"72px"}></Box>
      <HStack
        spacing={2}
        h={"72px"}
        position={"fixed"}
        bottom={0}
        left={0}
        right={0}
        bg={"white"}
        borderTop={"1px solid #ECECEF"}
        px={4}
        py={3}
      >
        <IconComment />
        <Input
          onChange={e => setUserInput(e.target.value)}
          placeholder="댓글을 작성해주세요."
        />
        <IconSend />
      </HStack>
    </>
  );
};

export default BoardCommentInput;
