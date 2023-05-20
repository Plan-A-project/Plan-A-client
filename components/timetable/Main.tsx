import { Box } from "@chakra-ui/react";
import "rmc-picker/assets/index.css";
import SemesterTab from "./Timetable/SemesterTab";
import Timetable from "./Timetable/Timetable";
import WriteCommentDrawer from "./Drawer/WriteCommentDrawer";
import SearchResult from "./Search/SearchResult";

export default function Main() {
  return (
    <Box p="16px">
      <SemesterTab />
      <Timetable />
      <WriteCommentDrawer />
      <SearchResult />
    </Box>
  );
}
