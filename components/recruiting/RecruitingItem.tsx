import { PropsWithChildren } from "react";

import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

import ScrapEmptyIcon from "../icons/ScrapEmptyIcon";
import ScrapIcon from "../icons/ScrapIcon";
import WatchedIcon from "../icons/WatchedIcon";

type RecruitingItem = {
  dday?: number;
  watched?: number;
  date?: string;
  isScrapped?: boolean;
};

const RecruitingItem: React.FC<PropsWithChildren<RecruitingItem>> = ({
  children,
  dday,
  watched,
  date,
  isScrapped,
}) => {
  return (
    <Flex px={3} py={4} gap={3}>
      <Box>
        {children}
        <Flex alignItems={"center"} pt={3}>
          <Text fontSize={"sm"} color={"blue"} fontWeight={500} mr={4}>
            D-{dday}
          </Text>
          <Text fontSize={"xs"}> {date}</Text>
        </Flex>
      </Box>
      <Spacer />
      <Box>
        {isScrapped ? <ScrapIcon /> : <ScrapEmptyIcon />}
        <Flex alignItems={"center"}>
          <WatchedIcon />
          <Text fontSize={"xs"}> {watched}</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default RecruitingItem;
