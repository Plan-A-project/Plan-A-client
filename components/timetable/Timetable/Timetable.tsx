import { Box, Center, Text } from "@chakra-ui/react";
import TimeTableContent from "./TimetableContent";
import { MYCOURSES } from "../../data";

export default function Timetable() {
  return (
    <Box>
      {MYCOURSES ? (
        <Center bg="#F8F8F8" p={4}>
          <TimeTableContent />
        </Center>
      ) : (
        <Center bg="#F8F8F8" p={4} h="80vh">
          <Text>
            시간표가 비어있어요. <br />
            아래에서 강의를 검색하고 <br />
            추가해보세요!
          </Text>
        </Center>
      )}
    </Box>
  );
}
