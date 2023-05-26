import { Box } from "@chakra-ui/react";
import "rmc-picker/assets/index.css";
import SemesterTab from "./Timetable/SemesterTab";
import Timetable from "./Timetable/Timetable";
import WriteFeedbackDrawer from "./Drawer/WriteFeedbackDrawer";
import SearchResult from "./Search/SearchResult";

export default function Main() {
  return (
    <Box p="16px">
      <SemesterTab />
      <Timetable />
      <WriteFeedbackDrawer />
      <SearchResult />
    </Box>
  );
}
