import React from "react";
import {
  Text,
  Box,
  Flex,
  Stack,
  Button,
  Switch,
  Container,
  Icon,
  Tag,
  Center,
} from "@chakra-ui/react";
import PageLayout from "../components/Layout";
import { FaUserCircle } from "react-icons/fa";
import DarkModeButton from "../components/DarkModeButton";

const index = () => {
  return (
    <PageLayout footer>
      <Container>
        <Text fontSize={20} fontWeight={600}>
          내 정보
        </Text>
        <Stack width={343}>
          <Flex justify={"space-between"} paddingTop={"10px"}>
            <Text fontSize={18} fontWeight={600}>
              계정
            </Text>
            <Text fontSize={14} fontWeight={400}>
              변경
            </Text>
          </Flex>
          <Container bgColor="gray.100" borderRadius={8}>
            <Center paddingY={"20px"}>
              <Flex gap={"10px"} width={"100%"}>
                <Icon
                  as={FaUserCircle}
                  boxSize={12}
                  color={"grey"}
                  alignSelf={"center"}
                />
                <Stack>
                  <Flex gap={2}>
                    <Text>닉네임</Text>
                    <Tag colorScheme="linkedin">학생</Tag>
                  </Flex>
                  <Text>email@email.com</Text>
                </Stack>
              </Flex>
            </Center>
          </Container>
          <Button
            fontSize={16}
            fontWeight={400}
            width={"fit-content"}
            paddingX={"5px"}
            _hover={{ bg: "transparent" }}
            backgroundColor={"transparent"}
          >
            인증하기
          </Button>
          <Button
            fontSize={16}
            fontWeight={400}
            width={"fit-content"}
            _hover={{ bg: "transparent" }}
            paddingX={"5px"}
            backgroundColor={"transparent"}
          >
            게시글 관리
          </Button>
        </Stack>
        <Stack>
          <Text fontSize={18} fontWeight={600} paddingTop={"10px"}>
            이용약관
          </Text>
          <Button
            fontSize={16}
            fontWeight={400}
            width={"fit-content"}
            _hover={{ bg: "transparent" }}
            backgroundColor={"transparent"}
            paddingX={"5px"}
          >
            이용 제한 규칙
          </Button>
          <Button
            fontSize={16}
            fontWeight={400}
            width={"fit-content"}
            _hover={{ bg: "transparent" }}
            backgroundColor={"transparent"}
            paddingX={"5px"}
          >
            커뮤니티 이용 규칙
          </Button>
          <Button
            fontSize={16}
            fontWeight={400}
            width={"fit-content"}
            _hover={{ bg: "transparent" }}
            backgroundColor={"transparent"}
            paddingX={"5px"}
          >
            서비스 이용약관
          </Button>
          <Button
            fontSize={16}
            fontWeight={400}
            width={"fit-content"}
            _hover={{ bg: "transparent" }}
            backgroundColor={"transparent"}
            paddingX={"5px"}
          >
            개인정보 처리방침
          </Button>
          <Button
            fontSize={16}
            fontWeight={400}
            width={"fit-content"}
            _hover={{ bg: "transparent" }}
            backgroundColor={"transparent"}
            paddingX={"5px"}
          >
            청소년 보호 정책
          </Button>
          <Button
            fontSize={16}
            fontWeight={400}
            width={"fit-content"}
            _hover={{ bg: "transparent" }}
            backgroundColor={"transparent"}
            paddingX={"5px"}
          >
            오픈소스 라이선스
          </Button>
        </Stack>
        <Stack>
          <Text fontSize={18} fontWeight={600} paddingTop={"10px"}>
            앱설정
          </Text>
          <DarkModeButton />
          <Button
            fontSize={16}
            fontWeight={400}
            width={"fit-content"}
            _hover={{ bg: "transparent" }}
            backgroundColor={"transparent"}
            paddingX={"5px"}
            textAlign={"start"}
          >
            알림
          </Button>
        </Stack>
        <Stack>
          <Text fontSize={18} fontWeight={600} paddingTop={"10px"}>
            이용 안내
          </Text>
          <Button
            fontSize={16}
            fontWeight={400}
            width={"fit-content"}
            _hover={{ bg: "transparent" }}
            backgroundColor={"transparent"}
            paddingX={"5px"}
          >
            앱 버전
          </Button>
          <Button
            fontSize={16}
            fontWeight={400}
            width={"fit-content"}
            _hover={{ bg: "transparent" }}
            backgroundColor={"transparent"}
            paddingX={"5px"}
          >
            문의하기
          </Button>
        </Stack>
        <Button fontSize={16} fontWeight={400} width={"100%"} marginY={"24px"}>
          로그아웃
        </Button>
      </Container>
    </PageLayout>
  );
};

export default index;
