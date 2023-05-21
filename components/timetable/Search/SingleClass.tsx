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
import { useRecoilState } from "recoil";
import { myCoursesAtom } from "@/state/atoms/timetableAtom";
import { usePopup } from "@/hooks/usePopup";
import PopupTop from "../Popup/PopupTop";

type IClassCard = {
  day: string;
  time: string;
  duration: number;
  title: string;
  location: string;
  professor: string;
  rating: number;
  courseCode: number;
};

export default function SingleClass(course: IClassCard) {
  const [myCourse, setMyCourses] = useRecoilState(myCoursesAtom);
  const {isActivated, activatePopup} = usePopup();

  function addCourseOnCLick(newCourse: IClassCard) {
    setMyCourses((myCourses) => [...myCourses, newCourse]);
    activatePopup();
  }

  function checkIfCourseAdded(courseCode: number) {
    return myCourse.find((c) => c.courseCode === courseCode);
  }

  return (
    <>
      {isActivated && <PopupTop content="시간표에 추가되었습니다." />}
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
          <Button
            h="100%"
            bg={checkIfCourseAdded(course.courseCode) ? "gray.100" : "gray.300"}
            color={
              checkIfCourseAdded(course.courseCode) ? "gray.400" : "gray.500"
            }
            isDisabled={checkIfCourseAdded(course.courseCode) ? true : false}
            onClick={() => addCourseOnCLick(course)}
          >
            추가
          </Button>
        </Box>
      </Flex>
    </>
  );
}
