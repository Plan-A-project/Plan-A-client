import { Flex } from "@chakra-ui/react";

import {
  TimeTableIcon,
  InfoBoardIcon,
  HomeIcon,
  MainBoardIcon,
  MyProfileIcon,
} from "@/components/icons";

export default function Navbar() {
  return (
    <Flex
      bg="#FFFFFF"
      border={"1px solid #ECECEF"}
      backdropFilter={"blur(20px)"}
      borderRadius={"24px 24px 0px 0px"}
      justify="space-between"
      alignItems="flex-start"
      p="8px 12px"
      gap="8px"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
    >
      <HomeIcon />
      <TimeTableIcon />
      <MainBoardIcon />
      <InfoBoardIcon />
      <MyProfileIcon />
    </Flex>
  );
}
