import { Box, Text, Flex, Divider } from "@chakra-ui/react";

import IconNotice from "../icons/IconNotice";

type MainBannerItemProps = {
  currentIndex: number;
  totalIndex: number;
};

const MainBannerItem: React.FC<MainBannerItemProps> = ({
  currentIndex,
  totalIndex,
}) => {
  return (
    <Box h="40" bg="white" flexDir="column" gap="2" p="3" borderRadius="24px">
      <Flex flexDir="row" gap="2" alignItems="center">
        <IconNotice />
        <Text textStyle={"headline2"} color="#3f52e4" mr="1" w="56">
          학교 공지
        </Text>
        <Text
          textAlign="center"
          whiteSpace="nowrap"
          fontSize="xs"
          lineHeight="12px"
          color="#c8c9d0"
        >
          {`${currentIndex} / ${totalIndex}`}
        </Text>
      </Flex>
      <Divider bg="#ececef" marginY="2" h="1px" />
      <Text textStyle={"headline1"} textAlign="center" mt={6} color="#303136">
        중간고사 끝! 5월 일정 안내
      </Text>
    </Box>
  );
};

export default MainBannerItem;
