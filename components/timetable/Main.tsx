import { Box } from "@chakra-ui/react";

import "rmc-picker/assets/index.css";
import WriteFeedbackDrawer from "./Drawer/WriteFeedbackDrawer";
import SearchResult from "./Search/SearchResult";
import SemesterTab from "./Timetable/SemesterTab";
import Timetable from "./Timetable/Timetable";

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
