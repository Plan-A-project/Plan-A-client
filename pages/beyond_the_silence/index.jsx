import { Box, Center, Flex, Text, VStack } from "@chakra-ui/layout";
import { Collapse, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Logo } from "@/components/icons";
// import SeatChecker from "./SeatChecker";
import { useRouter } from "next/router";

export default function Concert() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const router = useRouter();
  const handleToggleGroup = group => {
    setSelectedGroup(prevGroup => (prevGroup === group ? null : group));
  };
  const handleRouter = () => {
    router.push("/beyond_the_silence/seatcheck");
  };
  const members = {
    "신과 함께": ["김철수", "박영희", "이민수", "최진영", "정현우", "문지호"],
    MUTE: [
      "주혜진",
      "정승우",
      "조민경",
      "김채연",
      "류지안",
      "김민희",
      "유성민",
      "정승현",
      "이혜인",
      "이정현",
      "최수연",
      "김은채",
      "경승예",
      "박미담",
      "김동환",
      "박세은",
      "이희서",
      "신도현",
      "문수연",
      "이채은",
      "정고은",
      "김두호",
      "이정",
    ],
  };

  const sets = {
    "1부 MUTE": [
      { title: "Sucker", artist: "Jonas Brothers" },
      { title: "All I Wanna Do", artist: "Jay Park (박재범)" },
      { title: "Drama", artist: "9와 숫자들" },
      { title: "Reflection", artist: "Mulan OST (뮤지컬)" },
      { title: "Easy", artist: "KISS OF LIFE" },
      { title: "Midas Touch", artist: "KISS OF LIFE" },
      { title: "Power", artist: "EXO" },
      { title: "Friday", artist: "IU (아이유) feat. Jang Yi-jeong (장이정)" },
      { title: "Siren", artist: "Sunmi (선미)" },
      { title: "Love Shot", artist: "EXO" },
      { title: "예쁘다 (Pretty U)", artist: "SEVENTEEN (세븐틴)" },
      { title: "DM", artist: "fromis_9" },
      { title: "Shape of You", artist: "Ed Sheeran" },
      { title: "Shut Down", artist: "BLACKPINK" },
      { title: "마지막 인사 (Last Farewell)", artist: "BIGBANG" },
      { title: "Rush Hour", artist: "Crush feat. j-hope of BTS" },
    ],
    "2부 신과 함께": [
      { title: "그대에게", artist: "무한궤도" },
      { title: "우리의 꿈", artist: "부활" },
      { title: "불장난 (Playing with Fire)", artist: "BLACKPINK" },
      { title: "Welcome to the Show", artist: "DAY6" },
      { title: "Happy", artist: "Pharrell Williams" },
      { title: "사건의 지평선", artist: "Younha (윤하)" },
      { title: "Tomboy", artist: "(G)I-DLE" },
      { title: "고민중독", artist: "검정치마" },
      { title: "자니", artist: "프라이머리 (Primary) feat. Dynamic Duo" },
      { title: "박하사탕", artist: "YB (윤도현 밴드)" },
      { title: "낭만고양이", artist: "체리필터" },
      { title: "뜨거운 안녕", artist: "싸이 (PSY) feat. 성시경" },
    ],
  };

  const staffList = [
    { role: "공연 기획 총괄", name: "이범규" },
    { role: "음향 감독", name: "김상훈" },
    { role: "조명 감독", name: "이정민" },
    { role: "무대 디자이너", name: "박지은" },
    { role: "프로모션 팀", name: "최영수, 김미나" },
  ];

  return (
    <Flex direction="column" bg="black" overflowY="scroll">
      <Box flex="1" overflow="hidden">
        <video
          src="/assets/concert2.mp4"
          alt="concert"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box bg="black" textColor="white" textAlign="center" py={4} mb={6}>
        <Text fontWeight={900} fontSize={40}>
          TICKET
        </Text>
        <Center mt={4}>
          <Button
            colorScheme="teal"
            onClick={handleRouter}
            fontWeight={800}
            fontSize={25}
            p={8}
            borderRadius={16}
          >
            좌석 확인하러 가기
          </Button>
        </Center>
      </Box>
      <Box bg="black" textColor="white" textAlign="center" py={4} mb={6}>
        <Text fontWeight={900} fontSize={40}>
          LINE UP
        </Text>
        <Text fontSize="lg" color="gray.400" mt={2}>
          글자를 눌러 멤버를 확인하세요
        </Text>
        <Flex justifyContent="center" mt={2} gap={4}>
          <Text
            cursor="pointer"
            fontSize="2xl"
            fontWeight="bold"
            onClick={() => handleToggleGroup("신과 함께")}
            _hover={{ color: "gray.400" }}
          >
            신과 함께
          </Text>
          <Text
            cursor="pointer"
            fontSize="2xl"
            fontWeight="bold"
            onClick={() => handleToggleGroup("MUTE")}
            _hover={{ color: "gray.400" }}
          >
            MUTE
          </Text>
        </Flex>
        <Collapse in={selectedGroup !== null} animateOpacity>
          <Box mt={4} textColor="gray.300">
            <VStack spacing={1} mt={2}>
              {members[selectedGroup]?.map((member, index) => (
                <Text key={index}>{member}</Text>
              ))}
            </VStack>
          </Box>
        </Collapse>
      </Box>
      <VStack bg="black" textColor="white" p={6} spacing={4} align="start">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" w="100%">
          공연 순서
        </Text>
        {Object.entries(sets).map(([setTitle, songs], index) => (
          <Box key={index} mt={6}>
            <Text fontSize="xl" fontWeight="bold">
              {setTitle}
            </Text>
            {songs.map((song, i) => (
              <Text key={i}>
                <Text as="span" fontWeight="bold">
                  {i + 1}. {song.title}
                </Text>{" "}
                – {song.artist}
              </Text>
            ))}
          </Box>
        ))}
      </VStack>
      <Box bg="black" textColor="white" p={6} textAlign="center" mt={6}>
        <Text fontSize="2xl" fontWeight="bold">
          STAFF
        </Text>
        {staffList.map((staff, index) => (
          <Text fontSize="lg" mt={2} key={index}>
            <Text as="span" fontWeight="bold">
              {staff.role}:
            </Text>{" "}
            {staff.name}
          </Text>
        ))}
      </Box>
      {/* <SeatChecker /> */}
      <Center bg="black" py={4}>
        <Logo />
      </Center>
    </Flex>
  );
}
