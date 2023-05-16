import { Grid } from "@chakra-ui/react";
import "rmc-picker/assets/index.css";
import SemesterTab from "./Timetable/SemesterTab";
import Timetable from "./Timetable/Timetable";
import Searchbar from "./Search/Searchbar";
import SearchResult from "./Course/SearchResult";
import WriteCommentDrawer from "./Drawer/WriteCommentDrawer";

export default function Main() {
  return (
    <Grid p="16px">
      <SemesterTab />
      <Timetable />
      <Searchbar />
      <WriteCommentDrawer />
      {/* <SearchResult /> */}
    </Grid>
  );
}
