import BottomDrawer from "./BottomDrawer";
import { RadioGroup, Radio, Stack, Box, Button } from "@chakra-ui/react";
import { ICourse } from "@/state/atoms/timetableAtom";

type IDeleteTimetableDrawer = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  course: ICourse;
  deleteCourseOnClick: (courseCode: number) => void;
};

export default function DeleteTimetableDrawer({
  isOpen,
  onOpen,
  onClose,
  course,
  deleteCourseOnClick,
}: IDeleteTimetableDrawer) {
  const props = {
    btnContent: "시간표 편집",
    drawerHeader: "시간표 편집",
    drawerText: "중복된 과목 중 하나만 선택해주세요.",
    isOpen,
    onOpen,
    onClose,
  };

  return (
    <BottomDrawer {...props}>
      <RadioGroup defaultValue="1">
        <Stack>
          <Radio size="md" name="1">
            <Box p={4} flex="1">
              <div>{course.title}</div>
              <div>
                {course.day} / {course.time}
              </div>
              <div>
                {course.location} / {course.professor}
              </div>
            </Box>
          </Radio>
          <Button
            bg="gray.300"
            onClick={() => deleteCourseOnClick(course.courseCode)}
          >
            삭제하기
          </Button>
        </Stack>
      </RadioGroup>
    </BottomDrawer>
  );
}
