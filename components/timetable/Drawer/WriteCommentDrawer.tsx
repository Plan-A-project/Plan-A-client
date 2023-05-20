import BottomDrawer from "./BottomDrawer";
import { VStack } from "@chakra-ui/react";
import CourseComment from "../Course/CourseComment";
import { MYCOURSES } from "@/components/data";

export default function WriteCommentDrawer() {
  const props = {
    btnContent: "후기작성",
    drawerHeader: "후기작성",
    drawerText: "",
  };

  return (
    <BottomDrawer {...props}>
      <VStack h="80vh">
        {MYCOURSES.map((props, idx) => (
          <CourseComment {...props} key={idx} />
        ))}
      </VStack>
    </BottomDrawer>
  );
}
