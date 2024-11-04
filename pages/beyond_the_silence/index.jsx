import { Box, Center, Flex, Text, VStack } from "@chakra-ui/layout";
import { Collapse, Fade } from "@chakra-ui/react";
import { useState } from "react";
import { Logo } from "@/components/icons";

export default function Concert() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const handleToggleGroup = group => {
    setSelectedGroup(prevGroup => (prevGroup === group ? null : group));
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
    // MUTE 그룹은 30명, 이름을 구분하기 위해 숫자 추가
  };

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
      <Box bg="black" textColor="white" textAlign="center" py={4}>
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
            onClick={() => {
              handleToggleGroup("신과 함께");
            }}
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
        <VStack bg="black" textColor="white" p={6} spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" w="100%">
            공연 순서
          </Text>
          <Box>
            <Text fontSize="xl" fontWeight="bold" mt={4}>
              1부 MUTE
            </Text>
            <Text mt={2}>
              <Text as="span" fontWeight="bold">
                1. Sucker
              </Text>{" "}
              – Jonas Brothers
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                2. All I Wanna Do
              </Text>{" "}
              – Jay Park (박재범)
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                3. Drama
              </Text>{" "}
              – 9와 숫자들
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                4. Reflection
              </Text>{" "}
              – Mulan OST (뮤지컬)
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                5. Easy
              </Text>{" "}
              – KISS OF LIFE
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                6. Midas Touch
              </Text>{" "}
              – KISS OF LIFE
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                7. Power
              </Text>{" "}
              – EXO
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                8. Friday
              </Text>{" "}
              – IU (아이유) feat. Jang Yi-jeong (장이정)
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                9. Siren
              </Text>{" "}
              – Sunmi (선미)
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                10. Love Shot
              </Text>{" "}
              – EXO
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                11. 예쁘다 (Pretty U)
              </Text>{" "}
              – SEVENTEEN (세븐틴)
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                12. DM
              </Text>{" "}
              – fromis_9
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                13. Shape of You
              </Text>{" "}
              – Ed Sheeran
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                14. Shut Down
              </Text>{" "}
              – BLACKPINK
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                15. 마지막 인사 (Last Farewell)
              </Text>{" "}
              – BIGBANG
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                16. Rush Hour
              </Text>{" "}
              – Crush feat. j-hope of BTS
            </Text>
          </Box>
          <Text fontSize="lg" fontWeight="bold" textAlign="center" mt={6}>
            쉬는 시간
          </Text>
          <Box>
            <Text fontSize="xl" fontWeight="bold" mt={4}>
              2부 신과 함께
            </Text>
            <Text mt={2}>
              <Text as="span" fontWeight="bold">
                1. 그대에게
              </Text>{" "}
              – 무한궤도
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                2. 우리의 꿈
              </Text>{" "}
              – 부활
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                3. 불장난 (Playing with Fire)
              </Text>{" "}
              – BLACKPINK
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                4. Welcome to the Show
              </Text>{" "}
              – DAY6
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                5. Happy
              </Text>{" "}
              – Pharrell Williams
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                6. 사건의 지평선
              </Text>{" "}
              – Younha (윤하)
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                7. Tomboy
              </Text>{" "}
              – (G)I-DLE
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                8. 고민중독
              </Text>{" "}
              – 검정치마
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                9. 자니
              </Text>{" "}
              – 프라이머리 (Primary) feat. Dynamic Duo
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                10. 박하사탕
              </Text>{" "}
              – YB (윤도현 밴드)
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                11. 낭만고양이
              </Text>{" "}
              – 체리필터
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                12. 뜨거운 안녕
              </Text>{" "}
              – 싸이 (PSY) feat. 성시경
            </Text>
          </Box>
        </VStack>
      </VStack>
      <Box bg="black" textColor="white" p={6} textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          STAFF
        </Text>
        <Text fontSize="lg" mt={4}>
          <Text as="span" fontWeight="bold">
            공연 기획 총괄:
          </Text>{" "}
          이범규
        </Text>
        <Text fontSize="lg" mt={2}>
          <Text as="span" fontWeight="bold">
            음향 감독:
          </Text>{" "}
          김상훈
        </Text>
        <Text fontSize="lg" mt={2}>
          <Text as="span" fontWeight="bold">
            조명 감독:
          </Text>{" "}
          이정민
        </Text>
        <Text fontSize="lg" mt={2}>
          <Text as="span" fontWeight="bold">
            무대 디자이너:
          </Text>{" "}
          박지은
        </Text>
        <Text fontSize="lg" mt={2}>
          <Text as="span" fontWeight="bold">
            프로모션 팀:
          </Text>{" "}
          최영수, 김미나
        </Text>
      </Box>
      <Center bg="black" py={4}>
        <Logo />
      </Center>
    </Flex>
  );
}
