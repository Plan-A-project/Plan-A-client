import { Flex, Text } from "@chakra-ui/layout";

import CommentIcon from "../icons/CommentIcon";
import HeartIcon from "../icons/HeartIcon";

interface PostBottomInfoType {
  createDate: string; // FIXME: 데이터 연동 후 타입 수정
  likeCount: number;
  commentCount: number;
}

const PostBottomInfo = ({
  createDate,
  likeCount,
  commentCount,
}: PostBottomInfoType) => {
  return (
    <Flex
      justify={"space-between"}
      pt={"14px"}
      textStyle={"overline"}
      color={"grey.600"}
    >
      <Text>{createDate}</Text>
      <Flex gap={"8px"}>
        <Flex gap={"8px"}>
          <Flex align={"center"} justify={"center"} gap={"5px"}>
            <HeartIcon />
            <Text>{likeCount}</Text>
          </Flex>
        </Flex>
        <Flex align={"center"} justify={"center"} gap={"5px"}>
          <CommentIcon />
          <Text>{commentCount}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PostBottomInfo;
