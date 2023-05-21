import BottomDrawer from "./BottomDrawer";
import { RadioGroup, Radio, Stack, Box, Button } from "@chakra-ui/react";
import { ICourse } from "@/state/atoms/timetableAtom";
import { usePopup } from "@/hooks/usePopup";
import PopupTop from "../Popup/PopupTop";

type IDeleteTimetableDrawer = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  course: ICourse;
  deleteCourseOnClick: (courseCode: number) => void;
  isActivated: boolean;
  activatePopup: () => void;
};

export default function DeleteTimetableDrawer({
  isOpen,
  onOpen,
  onClose,
  course,
  deleteCourseOnClick,
  isActivated,
  activatePopup,
}: IDeleteTimetableDrawer) {
  const props = {
    btnContent: "시간표 편집",
    drawerHeader: "시간표 편집",
    drawerText: "",
    isOpen,
    onOpen,
    onClose,
  };

  function handleDeleteOnClick(courseCode: number) {
    deleteCourseOnClick(courseCode);
    activatePopup();
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
            <Button
              bg="gray.300"
              onClick={() => handleDeleteOnClick(course.courseCode)}
            >
              삭제하기
            </Button>
          </Stack>
        </RadioGroup>
      </BottomDrawer>
    </>
  );
}
