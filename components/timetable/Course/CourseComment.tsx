import { Flex, Box, HStack, Text, Image } from "@chakra-ui/react";
import { Icons } from "@/assets/icons";
import WriteComment from "../Comment/WriteComment";
import { useState } from "react";

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
        onClick={() => setIsClicked((isClicked) => !isClicked)}
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
        <Image src={Icons.CaretDown.src} alt="icon" />
      </Flex>
      {isClicked && (
        <Box borderRadius="md" border="0.5px" borderColor="gray.200" w="100%">
          <WriteComment />
        </Box>
      )}
    </>
  );
}
