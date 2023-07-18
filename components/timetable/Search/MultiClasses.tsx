import { useContext } from "react";

import { Box } from "@chakra-ui/react";

import { ALLCOURSES } from "@/components/timetable/data";

import { SearchContext } from "./SearchResult";
import SingleClass from "./SingleClass";

export default function MultiClasses() {
  const { searchword } = useContext(SearchContext);

  return (
    <Box>
      {ALLCOURSES.map(course => {
        if (
          course.title.includes(searchword) ||
          course.courseCode.toString().includes(searchword)
        )
          return <SingleClass key={course.courseCode} {...course} />;
      })}
    </Box>
  );
}
