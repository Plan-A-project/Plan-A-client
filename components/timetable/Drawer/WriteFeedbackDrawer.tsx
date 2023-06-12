import { VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import { DrawerButton } from "@/components/common/BottomDrawer";
import useDrawer from "@/hooks/useDrawer";
import { myCoursesAtom } from "@/state/atoms/timetable/myCoursesAtom";

import CourseFeedback from "../Course/CourseFeedback";

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
