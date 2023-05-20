import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { MYCOURSES } from "../../data";

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
          {hours.map((hour, idx) => (
            <Tr key={hour}>
              <Td>
                <Text fontSize="xs">{hour}</Text>
              </Td>
              {days.map((day) => {
                const event = MYCOURSES.find(
                  (e) => e.day === day && e.time === hour
                );
                if (!event) {
                  return <Td key={`${day}-${hour}`}></Td>;
                }
                const rowSpan = event.duration || 1;
                return (
                  <Td
                    key={`${day}-${hour}`}
                    rowSpan={rowSpan}
                    bg="gray.300"
                    p="0"
                  >
                    <Text fontSize="xs">{event.title}</Text>
                    <Text fontSize="xs">{event.location}</Text>
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
