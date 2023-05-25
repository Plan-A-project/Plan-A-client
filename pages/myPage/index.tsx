import {
  Text,
  Flex,
  Stack,
  Button,
  Container,
  Icon,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

import CustomTag from "../components/CustomTag";
import DarkModeButton from "../components/DarkModeButton";
import PageLayout from "../components/Layout";

const index = () => {
  return (
    <PageLayout footer>
      <Container>
        <Text textStyle="headline1">내 정보</Text>
        <Stack spacing={47} width={343} mt={"14.5px"} mb={"24px"}>
          <Stack spacing={10.5}>
            <Flex justify={"space-between"}>
              <Text textStyle="headline2">계정</Text>
              <Link href={"/myPage/changeAccount/confirmPassword"}>
                <Text textStyle={"body2"}>변경</Text>
              </Link>
            </Flex>
            <Container bgColor="#F7F8FA" borderRadius={8}>
              <Center paddingY={"20px"}>
                <Flex gap={"10px"} width={"100%"}>
                  <Icon
                    as={FaUserCircle}
                    boxSize={12}
                    color={"grey"}
                    alignSelf={"center"}
                  />
                  <Stack spacing={0}>
                    <Flex gap={2} align={"center"}>
                      <Text textStyle="body1">닉네임</Text>
                      <CustomTag title="학생" color="blue" />
                    </Flex>
                    <Text textStyle={"body1"}>email@email.com</Text>
                  </Stack>
                </Flex>
              </Center>
            </Container>
            <Stack spacing={25}>
              <Link href="">
                <Text
                  textStyle={"body1"}
                  width={"fit-content"}
                  paddingX={"5px"}
                >
                  인증하기
                </Text>
              </Link>
              <Link href="">
                <Text
                  textStyle={"body1"}
                  width={"fit-content"}
                  paddingX={"5px"}
                >
                  게시글 관리
                </Text>
              </Link>
            </Stack>
          </Stack>
          <Stack spacing={23}>
            <Text textStyle={"headline2"} paddingTop={"10px"}>
              이용약관
            </Text>
            <Stack spacing={25}>
              <Link href="">
                <Text
                  textStyle={"body1"}
                  width={"fit-content"}
                  paddingX={"5px"}
                >
                  이용 제한 규칙
                </Text>
              </Link>
              <Link href="">
                <Text
                  textStyle={"body1"}
                  width={"fit-content"}
                  paddingX={"5px"}
                >
                  커뮤니티 이용 규칙
                </Text>
              </Link>
              <Link href="">
                <Text
                  textStyle={"body1"}
                  width={"fit-content"}
                  paddingX={"5px"}
                >
                  서비스 이용약관
                </Text>
              </Link>
              <Link href="">
                <Text
                  textStyle={"body1"}
                  width={"fit-content"}
                  paddingX={"5px"}
                >
                  개인정보 처리방침
                </Text>
              </Link>
              <Link href="">
                <Text
                  textStyle={"body1"}
                  width={"fit-content"}
                  paddingX={"5px"}
                >
                  청소년 보호 정책
                </Text>
              </Link>
              <Link href="">
                <Text
                  textStyle={"body1"}
                  width={"fit-content"}
                  paddingX={"5px"}
                >
                  오픈소스 라이선스
                </Text>
              </Link>
            </Stack>
          </Stack>
          <Stack spacing={23}>
            <Text textStyle={"headline2"} paddingTop={"10px"}>
              앱설정
            </Text>
            <Stack spacing={25}>
              <DarkModeButton />
              <Link href="">
                <Text
                  textStyle={"body1"}
                  width={"fit-content"}
                  paddingX={"5px"}
                >
                  알림
                </Text>
              </Link>
            </Stack>
          </Stack>
          <Stack spacing={23}>
            <Text textStyle={"headline2"} paddingTop={"10px"}>
              이용 안내
            </Text>
            <Stack spacing={25}>
              <Link href="">
                <Text
                  textStyle={"body1"}
                  width={"fit-content"}
                  paddingX={"5px"}
                >
                  앱 버전
                </Text>
              </Link>
              <Link href="">
                <Text
                  textStyle={"body1"}
                  width={"fit-content"}
                  paddingX={"5px"}
                >
                  문의하기
                </Text>
              </Link>
            </Stack>
          </Stack>
          <Button textStyle={"body1"} width={"100%"}>
            로그아웃
          </Button>
        </Stack>
      </Container>
    </PageLayout>
  );
};

export default index;
