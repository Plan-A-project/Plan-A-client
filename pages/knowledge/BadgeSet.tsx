import { Badge, Flex, Box, Icon } from "@chakra-ui/react";
import {
  FaLaptopCode,
  FaHeartbeat,
  FaMusic,
  FaBook,
  FaLightbulb,
  FaDollarSign,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa";

function BadgeSet() {
  return (
    <Box>
      <Flex justifyContent="center" my={5}>
        <Badge
          mx={2}
          my={1}
          colorScheme="blue"
          p={2}
          fontSize="md"
          borderRadius={"14px"}
          alignItems={"center"}
        >
          <Icon as={FaLaptopCode} mr={1} pt={1} />
          IT/테크
        </Badge>
        <Badge
          mx={2}
          my={1}
          colorScheme="red"
          p={2}
          fontSize="md"
          borderRadius={"14px"}
        >
          <Icon as={FaHeartbeat} mr={1} pt={1} />
          건강/운동
        </Badge>
        <Badge
          mx={2}
          my={1}
          colorScheme="cyan"
          p={2}
          fontSize="md"
          borderRadius={"14px"}
        >
          <Icon as={FaGraduationCap} mr={1} pt={1} />
          졸업생 인터뷰
        </Badge>
        <Badge
          mx={2}
          my={1}
          colorScheme="orange"
          p={2}
          fontSize="md"
          borderRadius={"14px"}
        >
          <Icon as={FaDollarSign} pt={1} />
          경제/경영
        </Badge>
      </Flex>
      <Flex justifyContent="center" mb={4}>
        <Badge
          mx={2}
          my={1}
          colorScheme="purple"
          p={2}
          fontSize="md"
          borderRadius={"14px"}
        >
          <Icon as={FaBook} mr={1} pt={1} />
          문화/생활
        </Badge>
        <Badge
          mx={2}
          my={1}
          colorScheme="yellow"
          p={2}
          fontSize="md"
          borderRadius={"14px"}
        >
          <Icon as={FaLightbulb} mr={1} pt={1} />
          인문/철학
        </Badge>
        <Badge
          mx={2}
          my={1}
          colorScheme="green"
          p={2}
          fontSize="md"
          borderRadius={"14px"}
        >
          <Icon as={FaMusic} pt={1} mr={1} />
          음악/미술
        </Badge>
        <Badge
          mx={2}
          my={1}
          colorScheme="teal"
          p={2}
          fontSize="md"
          borderRadius={"14px"}
        >
          <Icon as={FaChartLine} mr={"2px"} pt={1} />
          주식/제태크
        </Badge>
      </Flex>
    </Box>
  );
}

export default BadgeSet;
