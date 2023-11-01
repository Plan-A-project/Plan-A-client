import { Box, Flex, Text } from "@chakra-ui/react";

import { substractDate } from "@/utils/date";
import HeartEmpty from "../icons/HeartEmpty";
import Comment from "../icons/Comment";
import HeartIcon from "../icons/HeartIcon";
import likesApis from "@/api/like";
import { useState } from "react";

type BoardViewProps = {
  boardName: string;
  commentCount: number;
  endDate: string;
  enterprise: string;
  likeCount: number;
  content: string;
  nickname: string;
  startDate: string;
  title: string;
  viewCount: number;
  pressedLike: boolean;
  postId: number;
};

const BoardView: React.FC<BoardViewProps> = ({
  boardName,
  commentCount,
  endDate,
  enterprise,
  likeCount,
  content,
  nickname,
  startDate,
  title,
  viewCount,
  pressedLike,
  postId,
}) => {
  const author = boardName == "익명" ? "익명" : enterprise || nickname;
  const timeline = `${startDate} ~ ${endDate}`; // 모집글이 아닌 경우
  const dday = substractDate(startDate, endDate);
  const [likes, setLikes] = useState<number>(likeCount);
  const [isPressedLike, setIsPressedLike] = useState<boolean>(pressedLike);
  async function handleLike() {
    if (!isPressedLike) {
      await likesApis.postLike(postId);
      setLikes(p => p + 1);
      setIsPressedLike(true);
    }
    if (isPressedLike) {
      await likesApis.cancelPostLike(postId);
      setLikes(p => p - 1);
      setIsPressedLike(false);
    }
  }
  return (
    <>
      <Text color={"gray.900"} fontWeight={"semibold"} lineHeight={5} p={2}>
        {title}
      </Text>
      <Flex
        justify={"space-between"}
        p={2}
        borderY={"1px solid"}
        borderColor={"gray.100"}
        align={"center"}
        minH={30}
      >
        <Text fontSize={"xs"} lineHeight={0.75} color={"gray.600"}>
          {author}
        </Text>
        <Text fontSize={"xs"} lineHeight={0.75} color={"gray.600"}>
          {/* D-{dday} {timeline} */}
        </Text>
      </Flex>
      <Box px={2} py={4} dangerouslySetInnerHTML={{ __html: content }}></Box>

      <Flex
        p={2}
        borderY={"1px solid"}
        borderColor={"gray.100"}
        gap={3}
        align={"center"}
        minH={30}
      >
        <Flex align={"center"}>
          <Box onClick={handleLike}>
            {isPressedLike ? <HeartIcon /> : <HeartEmpty />}
          </Box>
          <Text pl={1} fontSize={"xs"} lineHeight={0.75} color={"gray.600"}>
            {likes}
          </Text>
        </Flex>
        <Flex align={"center"}>
          <Comment />
          <Text pl={1} fontSize={"xs"} lineHeight={0.75} color={"gray.600"}>
            {commentCount}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default BoardView;
