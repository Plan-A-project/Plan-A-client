import { HStack, Icon, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsCalendarEventFill } from "react-icons/bs";
import { FaUserCircle, FaClipboardList } from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { MdHomeFilled } from "react-icons/md";

const Footer = () => {
  const menuItem = [
    { id: 1, title: "홈", icon: MdHomeFilled, path: "/home" },
    { id: 2, title: "시간표", icon: BsCalendarEventFill, path: "/timetable" },
    {
      id: 3,
      title: "익명게시판",
      icon: HiChatBubbleLeftRight,
      path: "/board",
    },
    { id: 4, title: "정보공유", icon: FaClipboardList, path: "/information" },
    { id: 5, title: "내 정보", icon: FaUserCircle, path: "/myPage" },
  ];

  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <HStack
      justify="space-between"
      paddingY={5}
      border={"1px solid #ECECEF"}
      borderTopRadius={24}
      bg={"background1"}
      position={"fixed"}
      left={0}
      right={0}
      bottom={0}
      zIndex={10}
    >
      {menuItem.map(item => (
        <Button
          key={item.id}
          colorScheme="transparent"
          size="md"
          color={"black"}
          onClick={() => router.push(item.path)}
        >
          <Flex
            direction="column"
            align="center"
            gap={1.5}
            textStyle="overline"
            color="#75788A"
          >
            <Icon
              as={item.icon}
              boxSize={6}
              color={currentPath === item.path ? "primary.500" : "grey"}
            />
            <span>{item.title}</span>
          </Flex>
        </Button>
      ))}
    </HStack>
  );
};

export default Footer;
