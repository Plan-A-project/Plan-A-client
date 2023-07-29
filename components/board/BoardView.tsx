import { Box, Flex, Text } from "@chakra-ui/react";

// import dateDifference from "@/utils/dateDifference";

type BoardViewProps = {
  boardName: string;
  commentMemberCount: number;
  endDate: string;
  enterprise: string;
  likeCount: number;
  main: string;
  nickname: string;
  startDate: string;
  title: string;
  viewCount: number;
};

const BoardView: React.FC<BoardViewProps> = ({
  boardName,
  commentMemberCount,
  endDate,
  enterprise,
  likeCount,
  main,
  nickname,
  startDate,
  title,
  viewCount,
}) => {
  const author = boardName == "익명" ? "익명" : enterprise || nickname;
  const timeline = `${startDate} ~ ${endDate}`; // 모집글이 아닌 경우
  // const dday = dateDifference(startDate, endDate);

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
      <Box px={2} py={4} dangerouslySetInnerHTML={{ __html: main }}></Box>

      <Flex
        p={2}
        borderY={"1px solid"}
        borderColor={"gray.100"}
        gap={3}
        align={"center"}
        minH={30}
      >
        <Text fontSize={"xs"} lineHeight={0.75} color={"gray.600"}>
          Likes {likeCount}
        </Text>
        <Text fontSize={"xs"} lineHeight={0.75} color={"gray.600"}>
          Comments {commentMemberCount}
        </Text>
      </Flex>
    </>
  );
};

export default BoardView;
