import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import {
  TimeTableIcon,
  InfoBoardIcon,
  HomeIcon,
  MainBoardIcon,
  MyProfileIcon,
} from "@/components/icons";

export default function Navbar() {
  const router = useRouter();
  return (
    <Flex
      bg="#FFFFFF"
      border={"1px solid #ECECEF"}
      backdropFilter={"blur(20px)"}
      borderRadius={"24px 24px 0px 0px"}
      justify="space-around"
      alignItems="flex-start"
      p="8px 0px 18px 0px"
      position="fixed"
      mt={8}
      bottom={0}
      left={0}
      right={0}
    >
      <Box onClick={() => router.push("/main")}>
        <HomeIcon />
        <Text textStyle={"overline"} textAlign={"center"}>
          홈
        </Text>
      </Box>
      <Box onClick={() => router.push("/timetable")}>
        <TimeTableIcon />
        <Text textStyle={"overline"} textAlign={"center"}>
          시간표
        </Text>
      </Box>
      <Flex
        onClick={() => router.push("/board/anonymous")}
        direction={"column"}
        align={"center"}
      >
        <MainBoardIcon />
        <Text textStyle={"overline"} textAlign={"center"}>
          익명게시판
        </Text>
      </Flex>
      <Flex
        onClick={() => router.push("/board")}
        direction={"column"}
        align={"center"}
      >
        <InfoBoardIcon />
        <Text textStyle={"overline"} textAlign={"center"}>
          정보공유
        </Text>
      </Flex>
      <Flex
        onClick={() => router.push("/myPage")}
        direction={"column"}
        align={"center"}
      >
        <MyProfileIcon />
        <Text textStyle={"overline"} textAlign={"center"}>
          내 정보
        </Text>
      </Flex>
    </Flex>
  );
}
