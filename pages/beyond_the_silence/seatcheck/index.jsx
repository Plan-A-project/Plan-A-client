import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  VStack,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Logo } from "@/components/icons";

const mockData = {
  김철수: "A",
  박영희: "B",
  이민수: "C",
  최진영: "D",
};

function SeatChecker() {
  const [name, setName] = useState("");
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckSeat = () => {
    if (mockData[name]) {
      setSelectedSeat(mockData[name]);
      setErrorMessage(""); // 오류 메시지 초기화
    } else {
      setSelectedSeat(null);
      setErrorMessage("정보가 없습니다. 가까운 진행요원에게 문의해주세요."); // 오류 메시지 설정
    }
  };

  const handleInput = e => {
    setName(e.target.value);
  };

  const seatColors = {
    A: "#1E90FF", // 파란색
    B: "#32CD32", // 초록색
    C: "#FFA500", // 주황색
    D: "#9370DB", // 보라색
  };

  return (
    <Flex direction="column" bg="black" fontWeight={700} align="center">
      {/* 배경 이미지와 오버레이 */}
      <Box
        position="relative"
        width="100%"
        height="300px"
        bgImage="url('/assets/concert_seat.jpeg')"
        bgSize="cover"
        bgPosition="center"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(20, 0, 27, 0.5)"
        />
        <Box
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Text fontWeight={900} fontSize={48} color="white">
            TICKET
          </Text>
        </Box>
      </Box>

      {/* 이름 입력 부분 */}
      <Box mt={10} width="80%" textColor="white" textAlign="left">
        <Box display="flex" alignItems="center">
          <Text mr={1}>성함</Text>
          <Box as="span" color="red" fontSize="xl">
            •
          </Box>
        </Box>
        <Input
          type="text"
          placeholder=""
          value={name}
          onChange={handleInput}
          bg="black"
          color="white"
          borderColor="gray.600"
          _placeholder={{ color: "gray.500" }}
          borderRadius="md"
          mt={2}
        />
      </Box>

      {/* 좌석 확인 버튼 */}
      <Button
        onClick={handleCheckSeat}
        colorScheme="teal"
        mt={4}
        px={8}
        fontSize="lg"
      >
        좌석 확인
      </Button>

      {/* 오류 메시지 표시 */}
      {errorMessage && (
        <Text mt={4} color="red.500" fontSize="14px">
          {errorMessage}
        </Text>
      )}

      {/* 스테이지 */}
      <Box
        mt={20}
        backgroundColor="#444"
        padding="10px 50px"
        borderRadius="md"
        color="white"
        fontSize="lg"
        fontWeight="bold"
        textAlign="center"
      >
        스테이지
      </Box>

      {/* 좌석 배치도 */}
      <VStack spacing={4} mt={8} width="80%" mb={10}>
        <Flex justifyContent="space-around" width="100%">
          {["A", "B"].map(seat => (
            <Box
              key={seat}
              padding="20px"
              width="140px"
              height="90px"
              backgroundColor="#333"
              borderRadius="16px"
              boxShadow="lg"
              border={
                selectedSeat === seat
                  ? `3px solid ${seatColors[seat]}`
                  : "3px solid transparent"
              }
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              fontSize="2xl"
              fontWeight="bold"
              _hover={{ backgroundColor: "#555" }}
              transition="background-color 0.3s ease"
            >
              {seat}
            </Box>
          ))}
        </Flex>
        <Flex justifyContent="space-around" width="100%">
          {["C", "D"].map(seat => (
            <Box
              key={seat}
              padding="20px"
              width="140px"
              height="90px"
              backgroundColor="#333"
              borderRadius="16px"
              boxShadow="lg"
              border={
                selectedSeat === seat
                  ? `3px solid ${seatColors[seat]}`
                  : "3px solid transparent"
              }
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              fontSize="2xl"
              fontWeight="bold"
              _hover={{ backgroundColor: "#555" }}
              transition="background-color 0.3s ease"
            >
              {seat}
            </Box>
          ))}
        </Flex>
      </VStack>

      {/* 로고 */}
      <Center bg="black" py={4} mb={2}>
        <Logo />
      </Center>
    </Flex>
  );
}

export default SeatChecker;
