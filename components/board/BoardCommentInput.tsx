import { Box, HStack, Input } from "@chakra-ui/react";
import IconComment from "../icons/IconComment";

const BoardCommentInput = () => {
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
        <Input placeholder="댓글을 작성해주세요." />
      </HStack>
    </>
  );
};

export default BoardCommentInput;
