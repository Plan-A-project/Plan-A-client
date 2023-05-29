import { VStack } from "@chakra-ui/react";
import CourseFeedback from "../Course/CourseFeedback";
import { myCoursesAtom } from "@/state/atoms/timetable/myCoursesAtom";
import { useRecoilValue } from "recoil";
import { DrawerButton } from "./BottomDrawer";
import useDrawer from "@/hooks/useDrawer";

export default function WriteFeedbackDrawer() {
  const myCourses = useRecoilValue(myCoursesAtom);
  const children = (
    <VStack>
      {myCourses.map((props, idx) => (
        <CourseFeedback {...props} key={idx} />
      ))}
    </VStack>
  );

  const props = {
    header: "후기작성",
    children: children,
  };

  const [onOpen, Toastbar] = useDrawer(props);

  return (
    <>
      <DrawerButton btnContent={"후기 작성"} onOpen={onOpen} />
      <Toastbar />
    </>
  );
}
