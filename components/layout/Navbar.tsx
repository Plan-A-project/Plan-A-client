import { Flex } from "@chakra-ui/react";

import HomeIcon from "@/components/icons/HomeIcon";
import InfoBoardIcon from "@/components/icons/InfoBoardIcon";
import MainBoardIcon from "@/components/icons/MainBoardIcon";
import MyProfileIcon from "@/components/icons/MyProfileIcon";
import TimeTableIcon from "@/components/icons/TimeTableIcon";

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
