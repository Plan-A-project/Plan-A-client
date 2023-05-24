import { HStack, Icon, Button, Flex } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { BsCalendarEventFill } from "react-icons/bs";
import { FaUserCircle, FaClipboardList } from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { MdHomeFilled } from "react-icons/md";
import { isTemplateExpression } from "typescript";

const Footer = () => {
  const menuItem = [
    { id: 1, title: "홈", icon: MdHomeFilled },
    { id: 2, title: "시간표", icon: BsCalendarEventFill },
    { id: 3, title: "익명게시판", icon: HiChatBubbleLeftRight },
    { id: 4, title: "정보공유", icon: FaClipboardList },
    { id: 5, title: "내 정보", icon: FaUserCircle },
  ];
  return (
    <HStack
      justify="space-between"
      paddingY={5}
      border={"1px solid #ECECEF"}
      borderTopRadius={24}
    >
      {menuItem.map(item => (
        <Button
          key={item.id}
          colorScheme="transparent"
          size="md"
          color={"black"}
        >
          <Flex direction="column" align="center" gap={1.5}>
            <Icon as={item.icon} boxSize={6} color={"grey"} />
            <span style={{ fontWeight: 400 }}>{item.title}</span>
          </Flex>
        </Button>
      ))}
    </HStack>
  );
};

export default Footer;
