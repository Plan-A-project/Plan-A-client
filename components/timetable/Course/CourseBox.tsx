import { Flex, Box, HStack, Text } from "@chakra-ui/react";

import StarFilled from "@/components/icons/StarFilled";
import { ICourse } from "@/state/atoms/timetable/myCoursesAtom";

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
          <StarFilled />
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
