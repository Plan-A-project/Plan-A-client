import { Box } from "@chakra-ui/react";
import { ALLCOURSES } from "@/components/data";
import SingleClass from "./SingleClass";
import { useContext } from "react";
import { SearchContext } from "./SearchResult";

export default function MultiClasses() {
  const { searchword } = useContext(SearchContext);

  return (
    <Box>
      {ALLCOURSES.map((course) => {
        if (
          course.title.includes(searchword) ||
          course.courseCode.toString().includes(searchword)
        )
          return <SingleClass key={course.courseCode} {...course} />;
      })}
    </Box>
  );
}
