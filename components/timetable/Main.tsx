import { Box } from "@chakra-ui/react";

import "rmc-picker/assets/index.css";
import useSearchbar from "@/hooks/useSearchbar";

import WriteFeedbackDrawer from "./Drawer/WriteFeedbackDrawer";
import SearchResult from "./Search/SearchResult";
import SemesterTab from "./Timetable/SemesterTab";
import Timetable from "./Timetable/Timetable";

export default function Main() {
  const props = {
    placeholder: "최소 2글자 이상 입력해 주세요.",
    searchDefault: true,
    addKeyword: true,
    searchCourse: true,
    handleClick: () => console.log("clicked"),
  };

  const [searchword, Searchbar] = useSearchbar(props);

  return (
    <Box p="16px">
      <Searchbar />
      <SemesterTab />
      <Timetable />
      <WriteFeedbackDrawer />
      <SearchResult />
    </Box>
  );
}
