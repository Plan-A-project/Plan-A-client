import { Stack } from "@chakra-ui/layout";
import React from "react";
import { Text } from "@chakra-ui/react";

const MyComment = () => {
  return (
    <Stack>
      <Stack spacing={"8px"}>
        <Text fontSize={"14px"}>
          내가 작성한 댓글 내가 작성한 댓글 내가 작성한 댓글
        </Text>
        <Text fontSize={"10px"}>2023.04.01</Text>
      </Stack>
    </Stack>
  );
};

export default MyComment;
