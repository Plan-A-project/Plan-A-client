import { Box, Text, Flex, Divider } from "@chakra-ui/react";

import IconNotice from "../icons/IconNotice";

type MainBannerItemProps = {
  currentIndex: number;
  totalIndex: number;
  content: string;
};

const MainBannerItem: React.FC<MainBannerItemProps> = ({
  currentIndex,
  totalIndex,
  content,
}) => {
  return (
    <Box
      h="40"
      bg="white"
      flexDir="column"
      gap="2"
      p="3"
      borderRadius="24px"
      w={"308px"}
    >
      <Flex flexDir="row" gap="2" alignItems="center" justify={"space-between"}>
        <Flex align={"center"}>
          <IconNotice />
          <Text textStyle={"headline2"} color="#00AB9A" ml="2">
            인플리 공지
          </Text>
        </Flex>
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
        {content}
      </Text>
    </Box>
  );
};

export default MainBannerItem;
