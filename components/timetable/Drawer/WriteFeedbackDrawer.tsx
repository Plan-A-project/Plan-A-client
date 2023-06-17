import { VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import { DrawerButton } from "@/components/common/BottomDrawer";
import useDrawer from "@/hooks/useDrawer";
import { myCoursesAtom } from "@/state/atoms/timetable/myCoursesAtom";

import CourseFeedback from "../Course/CourseFeedback";

export default function WriteFeedbackDrawer() {
  const myCourses = useRecoilValue(myCoursesAtom);
  const children = (
    <VStack p={0}>
      {myCourses.map((props, idx) => (
        <CourseFeedback {...props} key={idx} />
      ))}
    </VStack>
  );

  const props = {
    header: "후기작성",
    subtitle: "후기를 작성해주세요",
    children: children,
    btnContent: "삭제하기",
  };

  const [onOpen, ButtonDrawer] = useDrawer(props);

  return (
    <>
      <DrawerButton btnContent={"후기 작성"} onOpen={onOpen} />
      <ButtonDrawer />
    </>
  );
}
