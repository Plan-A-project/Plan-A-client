import BottomDrawer from "./BottomDrawer";
import { VStack } from "@chakra-ui/react";
import CourseComment from "../Course/CourseComment";
import { myCoursesAtom } from "@/state/atoms/timetableAtom";
import { useRecoilValue } from "recoil";

export default function WriteCommentDrawer() {
  const props = {
    btnContent: "후기작성",
    drawerHeader: "후기작성",
    drawerText: "",
  };

  const myCourses = useRecoilValue(myCoursesAtom);

  return (
    <BottomDrawer {...props}>
      <VStack h="80vh">
        {myCourses.map((props, idx) => (
          <CourseComment {...props} key={idx} />
        ))}
      </VStack>
    </BottomDrawer>
  );
}
