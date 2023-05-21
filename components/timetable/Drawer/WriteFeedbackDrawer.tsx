import BottomDrawer from "./BottomDrawer";
import { VStack, useDisclosure } from "@chakra-ui/react";
import CourseFeedback from "../Course/CourseFeedback";
import { myCoursesAtom } from "@/state/atoms/timetable/myCoursesAtom";
import { useRecoilValue } from "recoil";
import { DrawerButton } from "./BottomDrawer";

export default function WriteFeedbackDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const props = {
    btnContent: "후기작성",
    drawerHeader: "후기작성",
    drawerText: "",
    isOpen,
    onOpen,
    onClose,
  };

  const myCourses = useRecoilValue(myCoursesAtom);

  return (
    <>
      <DrawerButton btnContent={"후기 작성"} onOpen={onOpen} />
      <BottomDrawer {...props}>
        <VStack h="80vh">
          {myCourses.map((props, idx) => (
            <CourseFeedback {...props} key={idx} />
          ))}
        </VStack>
      </BottomDrawer>
    </>
  );
}
