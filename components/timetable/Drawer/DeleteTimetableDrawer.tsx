import { RadioGroup, Radio, Stack, Box } from "@chakra-ui/react";

import BottomDrawer from "@/components/common/BottomDrawer";
import { ICourse } from "@/state/atoms/timetable/myCoursesAtom";

type IDeleteTimetableDrawer = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  course: ICourse;
  deleteCourseOnClick: (courseCode: number) => void;
  isActivated: boolean;
  activateSnackbar: () => void;
};

export default function DeleteTimetableDrawer({
  isOpen,
  onOpen,
  onClose,
  course,
  deleteCourseOnClick,
  activateSnackbar,
}: IDeleteTimetableDrawer) {
  const props = {
    btnContent: "시간표 편집",
    btnHandler: () => handleDeleteOnClick(course.courseCode),
    drawerHeader: "시간표 편집",
    drawerText: "",
    isOpen,
    onOpen,
    onClose,
  };

  function handleDeleteOnClick(courseCode: number) {
    deleteCourseOnClick(courseCode);
    activateSnackbar();
  }

  return (
    <>
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
          </Stack>
        </RadioGroup>
      </BottomDrawer>
    </>
  );
}
