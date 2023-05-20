import {
  VStack,
  Flex,
  Box,
  HStack,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { Icons } from "@/assets/icons";

type IClassCard = {
  day: string;
  time: string;
  duration: number;
  title: string;
  location: string;
  professor: string;
  rating: number;
};

export default function SingleClass(course: IClassCard) {
  return (
    <Flex w="100%" gap={2} mb={2} mt={2}>
      <Box bg="#F8F8F8" p={4} flex="1">
        <HStack>
          <Text>{course.title}</Text>
          <Flex>
            <Image src={Icons.Star.src} alt="rating" />
            {course.rating} / 5.0
          </Flex>
        </HStack>
        <div>
          {course.day} {course.time}
        </div>
        <div>
          {course.location} / {course.professor}
        </div>
      </Box>
      <Box>
        <Button h="100%" bg="gray.300">
          추가
        </Button>
      </Box>
    </Flex>
  );
}
