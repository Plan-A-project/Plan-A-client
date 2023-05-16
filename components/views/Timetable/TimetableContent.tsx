import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { COURSES } from "../../data";

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

  return (
    <TableContainer w="100%">
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
              <Td>{hour}</Td>
              {days.map((day) => {
                const event = COURSES.find(
                  (e) => e.day === day && e.time === hour
                );
                if (!event) {
                  return <Td key={`${day}-${hour}`}></Td>;
                }
                const rowSpan = event.duration || 1;
                return (
                  <Td key={`${day}-${hour}`} rowSpan={rowSpan} bg="gray.300">
                    {event.title}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
