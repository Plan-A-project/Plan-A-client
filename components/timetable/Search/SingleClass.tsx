import { useDisclosure, Button, Box, Flex } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { myCoursesAtom } from "@/state/atoms/timetable/myCoursesAtom";
import { usePopup } from "@/hooks/usePopup";
import PopupTop from "../Popup/PopupTop";
import ViewFeedbackDrawer from "../Drawer/ViewFeedbackDrawer";
import { ICourse } from "@/state/atoms/timetable/myCoursesAtom";
import CourseBox from "../Course/CourseBox";

export default function SingleClass(course: ICourse) {
  const [myCourse, setMyCourses] = useRecoilState(myCoursesAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isActivated, activatePopup } = usePopup();

  function addCourseOnCLick(newCourse: ICourse) {
    setMyCourses((myCourses) => [...myCourses, newCourse]);
    activatePopup();
  }

  function checkIfCourseAdded(courseCode: number) {
    return myCourse.find((c) => c.courseCode === courseCode);
  }

  const drawerProps = {
    isOpen,
    onOpen,
    onClose,
    addCourseOnCLick,
  };

  return (
    <>
      {isActivated && <PopupTop content="시간표에 추가되었습니다." />}
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
      {isOpen && <ViewFeedbackDrawer {...drawerProps} course={course} />}
    </>
  );
}
