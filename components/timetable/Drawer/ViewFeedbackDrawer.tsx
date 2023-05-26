import BottomDrawer from "./BottomDrawer";
import { VStack, Button } from "@chakra-ui/react";
import { myCoursesAtom } from "@/state/atoms/timetable/myCoursesAtom";
import { useRecoilValue } from "recoil";
import { ICourse } from "@/state/atoms/timetable/myCoursesAtom";
import CourseBox from "../Course/CourseBox";
import { FEEDBACK } from "@/components/data";
import FeedbackBox from "../Feedback/FeedbackBox";

type IViewFeedbackDrawer = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  course: ICourse;
  addCourseOnCLick: (course: ICourse) => void;
};

export default function ViewFeedbackDrawer({
  isOpen,
  onOpen,
  onClose,
  course,
  addCourseOnCLick,
}: IViewFeedbackDrawer) {
  const props = {
    btnContent: "",
    drawerHeader: "강의후기",
    drawerText: "",
    isOpen,
    onOpen,
    onClose,
  };

  const myCourses = useRecoilValue(myCoursesAtom);

  return (
    <>
      <BottomDrawer {...props}>
        <CourseBox course={course} />
        <VStack h="60vh">
          {FEEDBACK.map((props, idx) => (
            <FeedbackBox {...props} key={idx} />
          ))}
        </VStack>
        <Button w="100%" onClick={() => addCourseOnCLick(course)}>
          내 시간표에 추가
        </Button>
      </BottomDrawer>
    </>
  );
}
