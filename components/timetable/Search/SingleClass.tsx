import { Button, Box, Flex, VStack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import { FEEDBACK } from "@/components/data";
import useDrawer from "@/hooks/useDrawer";
import useSnackbar from "@/hooks/useSnackbar";
import { myCoursesAtom } from "@/state/atoms/timetable/myCoursesAtom";
import { ICourse } from "@/state/atoms/timetable/myCoursesAtom";

import CourseBox from "../Course/CourseBox";
import FeedbackBox from "../Feedback/FeedbackBox";

export default function SingleClass(course: ICourse) {
  const [myCourse, setMyCourses] = useRecoilState(myCoursesAtom);
  const [isActivated, activateSnackbar, Snackbar] =
    useSnackbar("시간표에 추가되었습니다.");

  function addCourseOnCLick(newCourse: ICourse) {
    setMyCourses(myCourses => [...myCourses, newCourse]);
    activateSnackbar();
  }

  function checkIfCourseAdded(courseCode: number) {
    return myCourse.find(c => c.courseCode === courseCode);
  }

  const children = (
    <>
      <CourseBox course={course} />
      <VStack>
        {FEEDBACK.map((props, idx) => (
          <FeedbackBox {...props} key={idx} />
        ))}
      </VStack>
    </>
  );

  const props = {
    header: "강의후기",
    btnContent: "내 시간표에 추가",
    btnHandler: () => addCourseOnCLick(course),
    children: children,
  };

  const [onOpen, BottomDrawer] = useDrawer(props);

  return (
    <>
      {isActivated && <Snackbar />}
      <Flex w="100%" gap={2} mb={2} mt={2}>
        <CourseBox course={course} onOpen={onOpen} />
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
      <BottomDrawer />
    </>
  );
}
