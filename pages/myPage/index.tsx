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
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FaUserCircle } from "react-icons/fa";
import { useRecoilState } from "recoil";

import Navbar from "@/components/layout/Navbar";
import { BeforeLogin } from "@/components/myPage";
import { isLoggedInState } from "@/state/atoms/auth/loginAtom";

import CustomTag from "../components/CustomTag";
import DarkModeButton from "../components/DarkModeButton";

const MyPage = () => {
  let isLoggedIn;
  if (typeof window !== "undefined") {
    isLoggedIn = localStorage?.getItem("accessToken");
  }
  const router = useRouter();
  return (
    <Container>
      <Navbar currentTab="myProfile" />
      <Text textStyle={"headline1"}>내 정보</Text>
      <Stack spacing={47} width={343} mt={"14.5px"} mb={"24px"}>
        <Stack spacing={10.5}>
          <Flex justify={"space-between"}>
            <Text textStyle={"headline2"}>계정</Text>
            <Text textStyle={"body2"}>변경</Text>
          </Flex>
          {isLoggedIn ? (
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
                      <Text textStyle={"body1"}>닉네임</Text>
                      <CustomTag title="학생" color="blue" />
                    </Flex>
                    <Text textStyle={"body1"}>email@email.com</Text>
                  </Stack>
                </Flex>
              </Center>
            </Container>
          ) : (
            <BeforeLogin />
          )}
          <Stack spacing={25}>
            <Link
              as={NextLink}
              href="/myPage/managePosts"
              textStyle={"body1"}
              width={"fit-content"}
              paddingX={"5px"}
            >
              스크랩 보기
            </Link>
            <Link
              as={NextLink}
              href="/myPage/managePosts"
              textStyle={"body1"}
              width={"fit-content"}
              paddingX={"5px"}
            >
              게시글 관리
            </Link>
            <Text
              onClick={() => router.push("/certificationCenter")}
              textStyle={"body1"}
              width={"fit-content"}
              paddingX={"5px"}
            >
              인증센터
            </Text>
          </Stack>
        </Stack>
        <Stack spacing={23}>
          <Text textStyle={"headline2"} paddingTop={"10px"}>
            이용약관
          </Text>
          <Stack spacing={25}>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"} paddingX={"5px"}>
                이용 제한 규칙
              </Text>
            </Link>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"} paddingX={"5px"}>
                커뮤니티 이용 규칙
              </Text>
            </Link>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"} paddingX={"5px"}>
                서비스 이용약관
              </Text>
            </Link>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"} paddingX={"5px"}>
                개인정보 처리방침
              </Text>
            </Link>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"} paddingX={"5px"}>
                청소년 보호 정책
              </Text>
            </Link>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"} paddingX={"5px"}>
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
              <Text textStyle={"body1"} width={"fit-content"} paddingX={"5px"}>
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
              <Text textStyle={"body1"} width={"fit-content"} paddingX={"5px"}>
                앱 버전
              </Text>
            </Link>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"} paddingX={"5px"}>
                문의하기
              </Text>
            </Link>
          </Stack>
        </Stack>
        {isLoggedIn && (
          <Button
            onClick={() => {
              console.log("hi1");

              localStorage.removeItem("accessToken");
              alert("로그아웃 되었습니다!");
              router.push("/");
            }}
            textStyle={"body1"}
            width={"100%"}
          >
            로그아웃
          </Button>
        )}
      </Stack>
      <Box mb={20} />
    </Container>
  );
};

export default MyPage;
