import React from "react";

import { Stack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import formatCommentDate from "@/utils/formatCommentDate";

const MyComment = ({ info }: any) => {
  return (
    <Stack>
      <Stack spacing={"8px"}>
        <Text textStyle={"body1"}>{info.content}</Text>
        <Text textStyle={"overline"} color={"#75788A"}>
          {formatCommentDate(info.createdAt)}
        </Text>
      </Stack>
    </Stack>
  );
};

export default MyComment;
