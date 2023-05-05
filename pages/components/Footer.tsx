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

const Footer = () => {
  return (
    <>
      <Divider orientation="horizontal" colorScheme="gray" width={"100%"} />
      <HStack justify="space-between" paddingY={5}>
        <Button colorScheme="transparent" size="md" color={"black"}>
          <Flex direction="column" align="center" gap={1.5}>
            <Icon as={MdHomeFilled} boxSize={6} color={"grey"} />
            <span style={{ fontWeight: 400 }}>홈</span>
          </Flex>
        </Button>
        <Button colorScheme="transparent" size="md" color={"black"}>
          <Flex direction="column" align="center" gap={1.5}>
            <Icon as={BsCalendarEventFill} boxSize={6} color={"grey"} />
            <span style={{ fontWeight: 400 }}>시간표</span>
          </Flex>
        </Button>
        <Button colorScheme="transparent" size="md" color={"black"}>
          <Flex direction="column" align="center" gap={1.5}>
            <Icon as={HiChatBubbleLeftRight} boxSize={6} color={"grey"} />
            <span style={{ fontWeight: 400 }}>익명게시판</span>
          </Flex>
        </Button>
        <Button colorScheme="transparent" size="md" color={"black"}>
          <Flex direction="column" align="center" gap={1.5}>
            <Icon as={FaClipboardList} boxSize={6} color={"grey"} />
            <span style={{ fontWeight: 400 }}>정보공유</span>
          </Flex>
        </Button>
        <Button colorScheme="transparent" size="md" color={"black"}>
          <Flex direction="column" align="center" gap={1.5}>
            <Icon as={FaUserCircle} boxSize={6} color={"grey"} />
            <span style={{ fontWeight: 400 }}>내 정보</span>
          </Flex>
        </Button>
      </HStack>
    </>
  );
};

export default Footer;
