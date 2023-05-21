import { ICourse } from "@/state/atoms/timetable/myCoursesAtom";
import { Flex, Box, HStack, Text, Image } from "@chakra-ui/react";
import { Icons } from "@/assets/icons";

type ICourseBox = {
  course: ICourse;
  onOpen?: () => void;
};

export default function CourseBox({ course, onOpen }: ICourseBox) {
  return (
    <Box bg="#F8F8F8" p={4} flex="1">
      <HStack onClick={onOpen}>
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
  );
}
