import React from "react";
import {
  Stack,
  HStack,
  VStack,
  Box,
  IconButton,
  Icon,
  Button,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { MdHomeFilled } from "react-icons/md";
import { BsCalendarEventFill } from "react-icons/bs";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaUserCircle, FaClipboardList } from "react-icons/fa";
import { Container } from "@chakra-ui/react";
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
        <Button colorScheme="transparent" size="md" color={"black"}>
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
