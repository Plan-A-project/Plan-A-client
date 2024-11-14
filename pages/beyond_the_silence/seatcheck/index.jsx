import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  VStack,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Logo } from "@/components/icons";

function SeatChecker() {
  const [name, setName] = useState("");
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [noticeMessage, setNoticeMessage] = useState("");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const mockData = {
    김현범: "A",
    최애스더: "A",
    손형주: "A",
    김신: "A",
    이가현: "A",
    황선호: "A",
    유시영: "A",
    고현정: "A",
    이지성: "A",
    김세은: "A",
    김경아: "A",
    김영인: "A",
    이승현: "A",
    박규건: "A",
    이현수: "A",
    김소현: "A",
    김민석: "A",
    美月: "A",
    南宫明子: "A",
    김수연: "A",
    변서윤: "A",
    공승유: "A",
    徐小文: "A",
    서동준: "A",
    아이린: "A",
    배경모: "A",
    김경훈: "A",
    우경빈: "A",
    노병호: "B",
    임동하: "B",
    이동후: "B",
    오수현: "B",
    백승민: "B",
    장성아: "B",
    서지민: "B",
    홍예진: "B",
    김민서: "B",
    남궁준서: "B",
    박준하: "B",
    이근영: "B",
    김세현: "B",
    유현창: "B",
    오수빈A: "B",
    최현조: "B",
    주지환: "B",
    이준혁: "B",
    강성준: "B",
    김채연: "B",
    강유: "B",
    정태연: "B",
    채윤서: "B",
    노영교: "B",
    김영민: "B",
    은민기: "B",
    하준영: "B",
    릴리: "B",
    장예원: "B",
    이세움: "B",
    이혜민: "B",
    이예솔: "B",
    김현균: "B",
    최지나: "B",
    최지원: "B",
    박건우: "B",
    오수빈B: "B",
    백혜림: "B",
    박인아: "C",
    김소희: "C",
    김병재: "C",
    박가영: "C",
    김재연: "C",
    전동현: "C",
    김이도영: "C",
    이석우: "C",
    윤준서: "C",
    김하윤: "C",
    정규연: "C",
    김서현: "C",
    송준우: "C",
    윤현빈: "C",
    공채빈: "C",
    이수경: "C",
    조현준: "C",
    이가은: "D",
    이지원: "D",
    정찬희: "D",
    김병재: "D",
    이정우: "D",
    윤지원: "D",
    김예은: "D",
    이안: "D",
    김도훈: "D",
    김미나: "D",
    이태찬: "D",
    손지우: "D",
    김나현: "D",
    박해영: "D",
    김동완: "D",
    김고은: "2층",
    이승진: "2층",
    정구현: "2층",
    이주현: "2층",
    이승원: "2층",
    배유선: "2층",
    이소연: "2층",
    김상윤: "2층",
    김주영: "2층",
    한승희: "2층",
    박소연: "2층",
    문성은: "2층",
    구유진: "2층",
    조은채: "2층",
    이나눔: "2층",
  };
  const seatColors = {
    A: "#1E90FF", // 파란색
    B: "#32CD32", // 초록색
    C: "#FFA500", // 주황색
    D: "#9370DB", // 보라색
    2: "#FFD700",
  };
  const handleCheckSeat = () => {
    const seat = mockData[name];
    if (seat) {
      setSelectedSeat(seat);
      setErrorMessage("");
      let message = "";
      if (seat == "A") {
        message =
          "환영합니다, VIP 중의 VIP! 미국이 오열하고 일본이 손 내민 그 자리! 🎉";
      }
      if (seat == "B") {
        message =
          "B 구역에 오신 걸 환영해요! 출연자의 호흡이 느껴지는 자리! 깊게 호흡해보세요!👏";
      }
      if (seat == "C") {
        message =
          "환영합니다! 사운드 찢었다! 🔊C 구역에서 정신이 나갈듯한 사운드를 느껴보세요! 💃🕺";
      }
      if (seat == "D") {
        message =
          "환영합니다! D 구역 스피커가 터지나 내 귀가 터지나 겨뤄보자! 좀 놀아보셨군요!";
      }
      if (seat == "2층") {
        message =
          "환영합니다! 프라이빗석이어도 다 보이는거 아시죠? 응큼이 안돼요!";
      }
      setNoticeMessage(`${name}님!\n ${message}`);
      if (seat === "2층") {
        // onOpen();
        setSelectedSeat(2);
      } // 2층일 때만 애니메이션 트리거
      else onClose();
    } else {
      setSelectedSeat(null);
      setErrorMessage("정보가 없습니다. 가까운 진행요원에게 문의해주세요.");
    }
  };

  const handleInput = e => {
    setName(e.target.value);
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
      {noticeMessage && (
        <Text
          w={"80%"}
          mt={4}
          textAlign={"center"}
          color="white"
          whiteSpace={"pre-line"}
        >
          {noticeMessage}
        </Text>
      )}
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
      <Flex justify={"space-between"} w={"100vw"}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={"#555"}
          width="50px"
          height="300px"
          boxShadow="lg"
          color="white"
          fontSize="lg"
          fontWeight="bold"
          textAlign="center"
          borderTopRightRadius="20px"
          borderBottomRightRadius="20px"
          border={
            selectedSeat == 2
              ? `3px solid ${seatColors[2]}`
              : "3px solid transparent"
          }
          padding={4}
        ></Box>
        <VStack spacing={4} mt={8} width="100%" mb={10}>
          <Flex justifyContent="space-around" width="90%">
            {["A", "B"].map(seat => (
              <Box
                key={seat}
                padding="20px"
                width="115px"
                height="80px"
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
          <Flex justifyContent="space-around" width="90%">
            {["C", "D"].map(seat => (
              <Box
                key={seat}
                padding="20px"
                width="115px"
                height="80px"
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

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={"#555"}
          width="50px"
          height="300px"
          boxShadow="lg"
          color="white"
          fontSize="lg"
          fontWeight="bold"
          textAlign="center"
          borderTopLeftRadius="20px"
          borderBottomLeftRadius="20px"
          border={
            selectedSeat == 2
              ? `3px solid ${seatColors[2]}`
              : "3px solid transparent"
          }
          padding={4}
        ></Box>
      </Flex>
      {/* 로고 */}
      <Center bg="black" py={4} mb={2}>
        <Logo />
      </Center>
    </Flex>
  );
}

export default SeatChecker;
