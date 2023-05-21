import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { myCoursesAtom } from "@/state/atoms/timetable/myCoursesAtom";
import { useRecoilState } from "recoil";
import { useState, useRef, MouseEvent } from "react";
import DeleteTimetableDrawer from "../Drawer/DeleteTimetableDrawer";
import { usePopup } from "@/hooks/usePopup";
import PopupTop from "../Popup/PopupTop";

export default function TimeTableContent() {
  const days = ["월", "화", "수", "목", "금"];
  const hours = [
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
  ];
  const [myCourses, setMyCourses] = useRecoilState(myCoursesAtom);
  const [isLongPressed, setIsLongPressed] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [clickedCourseCode, setClickedCourseCode] = useState<number>(-1);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isActivated, activatePopup } = usePopup();

  function deleteCourseOnClick(courseCode: number) {
    setMyCourses((myCourses) =>
      myCourses.filter((c) => c.courseCode !== courseCode)
    );
  }

  function handleMouseDown() {
    timer.current = setTimeout(() => {
      setIsLongPressed(true);
    }, 1000);
  }

  function handleMouseUp(e: MouseEvent<HTMLElement>, courseCode: number) {
    if (timer.current && isLongPressed) {
      clearTimeout(timer.current);
      setClickedCourseCode(courseCode);
      onOpen();
    }
    setIsLongPressed(false);
  }

  const timerProps = {
    isOpen,
    onOpen,
    onClose,
    deleteCourseOnClick,
    isActivated,
    activatePopup,
  };

  return (
    <>
      {isActivated && <PopupTop content="삭제되었습니다." />}
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th></Th>
              {days.map((day) => (
                <Th key={day}>{day}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {hours.map((hour) => (
              <Tr key={hour}>
                <Td>
                  <Text fontSize="xs">{hour}</Text>
                </Td>
                {days.map((day) => {
                  const event = myCourses.find(
                    (e) => e.day === day && e.time === hour
                  );
                  if (!event) {
                    return <Td key={`${day}-${hour}`}></Td>;
                  }
                  const rowSpan = event.duration || 1;
                  return (
                    <>
                      <Td
                        key={`${day}-${hour}`}
                        rowSpan={rowSpan}
                        bg="gray.300"
                        p="0"
                        onMouseDown={handleMouseDown}
                        onMouseUp={(e) => handleMouseUp(e, event.courseCode)}
                      >
                        <Text fontSize="xs">{event.title}</Text>
                        <Text fontSize="xs">{event.location}</Text>
                      </Td>
                      {isOpen && clickedCourseCode === event.courseCode && (
                        <DeleteTimetableDrawer {...timerProps} course={event} />
                      )}
                    </>
                  );
                })}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
