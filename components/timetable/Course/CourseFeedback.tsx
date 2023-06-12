import { useState } from "react";

import { Flex, Box, HStack, Text } from "@chakra-ui/react";

import CaretDown from "@/components/icons/CaretDown";

import WriteComment from "../Feedback/WriteFeedback";

type ICourseComment = {
  title: string;
  time: string;
  location: string;
  professor: string;
};

export default function CourseComment({
  title,
  time,
  location,
  professor,
}: ICourseComment) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <Flex
        w="100%"
        gap={3}
        p={4}
        bg="#F8F8F8"
        borderRadius="md"
        onClick={() => setIsClicked(isClicked => !isClicked)}
      >
        <Box flex="1">
          <HStack>
            <Text>{title}</Text>
          </HStack>
          <div>{time}</div>
          <div>
            {location} / {professor}
          </div>
        </Box>
        <CaretDown />
      </Flex>
      {isClicked && (
        <Box borderRadius="md" border="0.5px" borderColor="gray.200" w="100%">
          <WriteComment />
        </Box>
      )}
    </>
  );
}
