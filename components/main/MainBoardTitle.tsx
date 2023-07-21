import { Box, Flex, Text, Link } from "@chakra-ui/react";

type MainBoardTitleProps = {
  title: string;
};
const MainBoardTitle: React.FC<MainBoardTitleProps> = ({ title }) => {
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
        <Link>더보기</Link>
      </Box>
    </Flex>
  );
};
export default MainBoardTitle;
