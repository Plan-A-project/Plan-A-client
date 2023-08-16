import { Box, Flex, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

type MainBoardTitleProps = {
  title: string;
};
const MainBoardTitle: React.FC<MainBoardTitleProps> = ({ title }) => {
  let link;
  if (title === "채용") {
    link = "/recruit";
  }
  if (title === "익명") {
    link = "/anonymous";
  }
  if (title === "대외활동") {
    link = "/activity";
  }
  if (title === "학교생활") {
    link = "/free";
  }
  return (
    <Flex
      flexDirection="row"
      gap="6"
      width="full"
      height="12"
      alignItems="center"
      paddingX="2"
      justifyContent={"space-between"}
    >
      <Box color="#3f52e4">
        <Text display="flex" fontSize="xl" fontWeight="semibold">
          {title}
          <Text color="#303136">&nbsp;게시판</Text>
        </Text>
      </Box>
      <Box textStyle="body3" textAlign="right" fontSize="sm" color="#303136">
        <Link as={NextLink} href={`/board/${link}`}>
          더보기
        </Link>
      </Box>
    </Flex>
  );
};
export default MainBoardTitle;
