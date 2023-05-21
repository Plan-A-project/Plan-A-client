import BottomDrawer from "./BottomDrawer";
import { VStack, useDisclosure } from "@chakra-ui/react";
import CourseComment from "../Course/CourseComment";
import { myCoursesAtom } from "@/state/atoms/timetableAtom";
import { useRecoilValue } from "recoil";
import { DrawerButton } from "./BottomDrawer";

export default function WriteCommentDrawer() {
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
            <CourseComment {...props} key={idx} />
          ))}
        </VStack>
      </BottomDrawer>
    </>
  );
}
