import { Stack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";

const MyComment = () => {
  return (
    <Stack>
      <Stack spacing={"8px"}>
        <Text textStyle={"body2"} color={"grey.900"}>
          내가 작성한 댓글 내가 작성한 댓글 내가 작성한 댓글
        </Text>
        <Text textStyle={"overline"} color={"grey.600"}>
          2023.04.01
        </Text>
      </Stack>
    </Stack>
  );
};

export default MyComment;
