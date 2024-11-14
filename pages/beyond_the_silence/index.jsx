import { Box, Center, Flex, Text, VStack } from "@chakra-ui/layout";
import { Collapse, Button, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import { Logo } from "@/components/icons";
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
    "신과 함께": {
      보컬: ["송유신", "박서화"],
      음향: ["이범규"],
      "1팀": {
        "일렉 기타": ["김예건", "이찬형"],
        베이스: ["옥선우"],
        드럼: ["공대원"],
        키보드: ["임성현"],
      },
      "2팀": {
        기타: ["오우빈", "공도훈"],
        베이스: ["여진성"],
        드럼: ["윤정현"],
        키보드: ["최현정"],
      },
    },
    MUTE: [
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
      { title: "Drama", artist: "Aespa (에스파)" },
      { title: "Reflection", artist: "Fifth Hormony" },
      { title: "Easy", artist: "LE SSERAFIM (르세라핌)" },
      { title: "Midas Touch", artist: "KISS OF LIFE" },
      { title: "Power", artist: "Queendom" },
      { title: "Friday", artist: "Perri$" },
      { title: "Siren", artist: "RIIZE" },
      { title: "Love Shot", artist: "EXO" },
      { title: "예쁘다 (Pretty U)", artist: "SEVENTEEN (세븐틴)" },
      { title: "DM", artist: "fromis_9" },
      { title: "Shape of You", artist: "Ed Sheeran" },
      { title: "Shut Down", artist: "BLACKPINK" },
      { title: "Rush Hour", artist: "Crush feat. j-hope of BTS" },
    ],
    "2부 신과 함께": [
      { title: "그대에게", artist: "신해철" },
      { title: "우리의 꿈", artist: "코요태" },
      { title: "불장난 (Playing with Fire)", artist: "BLACKPINK" },
      { title: "Welcome to the Show", artist: "DAY6" },
      { title: "Happy", artist: "DAY6" },
      { title: "사건의 지평선", artist: "Younha (윤하)" },
      { title: "Tomboy", artist: "(G)I-DLE" },
      { title: "박하사탕", artist: "YB (윤도현 밴드)" },
      { title: "낭만고양이", artist: "체리필터" },
      { title: "고민중독", artist: "QWER" },
      { title: "자니", artist: "프라이머리 (Primary) feat. Dynamic Duo" },
      { title: "예술이야", artist: "싸이 (PSY) feat. 성시경" },
    ],
  };

  const staffList = [
    { role: "공연 기획 총괄", name: "이범규" },
    { role: "음향 감독", name: "전유진" },
    { role: "조명 감독", name: "유병현" },
    { role: "MC", name: "이준석" },
    { role: "프로덕션 팀", name: "조윤빈, 김령은, 김창범, 김민서" },
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
            {selectedGroup === "신과 함께" && (
              <VStack spacing={3} align="center">
                {Object.entries(members["신과 함께"]).map(
                  ([role, teamMembers], index) =>
                    typeof teamMembers === "object" &&
                    !Array.isArray(teamMembers) ? (
                      <Box key={index}>
                        <Text fontWeight="bold" fontSize="lg">
                          {role}
                        </Text>
                        {Object.entries(teamMembers).map(
                          ([subRole, names], subIndex) => (
                            <Text key={subIndex} pl={4}>
                              <Text as="span" fontWeight="bold">
                                {subRole}:
                              </Text>{" "}
                              {Array.isArray(names) ? names.join(", ") : names}
                            </Text>
                          ),
                        )}
                      </Box>
                    ) : (
                      <Text key={index}>
                        <Text fontSize="lg" as="span" fontWeight="bold">
                          {role}
                        </Text>
                        <Text>
                          {Array.isArray(teamMembers)
                            ? teamMembers.join(`  `)
                            : teamMembers}
                        </Text>
                      </Text>
                    ),
                )}
              </VStack>
            )}
            {selectedGroup === "MUTE" && (
              <>
                <Text fontSize="lg" as="span" fontWeight="bold">
                  회장
                </Text>
                <Text>{"정승우 주혜진"}</Text>
                <VStack spacing={2} mt={4}>
                  <Text fontSize="lg" as="span" fontWeight="bold">
                    팀원
                  </Text>
                  {members["MUTE"].reduce((result, member, index, array) => {
                    if (index % 2 === 0) {
                      result.push(
                        <Flex key={index} justify="center" gap={4}>
                          <Text>{member}</Text>
                          {array[index + 1] && <Text>{array[index + 1]}</Text>}
                        </Flex>,
                      );
                    }
                    return result;
                  }, [])}
                </VStack>
              </>
            )}
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
      <Center bg="black" py={4}>
        <Logo />
      </Center>
    </Flex>
  );
}
