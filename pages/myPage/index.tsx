import {
  Text,
  Flex,
  Stack,
  Button,
  Container,
  Icon,
  Center,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

import DeviderWave from "@/components/icons/DeviderWave";
import UserAvatar from "@/components/icons/UserAvatar";

import CustomTag from "../components/CustomTag";
import DarkModeButton from "../components/DarkModeButton";
import PageLayout from "../components/Layout";

const index = () => {
  return (
    <PageLayout footer>
      <Text textStyle="headline1" px={"16px"}>
        내 정보
      </Text>
      <Stack spacing={"27px"}>
        <Stack mt={"14.5px"} spacing={"10.5px"}>
          <Flex justify={"space-between"} px={"24px"}>
            <Text textStyle="headline2">계정</Text>
            <Link href={"/myPage/changeAccount/confirmPassword"}>
              <Text textStyle={"body2"}>변경</Text>
            </Link>
          </Flex>
          <Box px={"16px"} mb={"14px"}>
            <Container bgColor="#F7F8FA" borderRadius={"12px"}>
              <Center paddingY={"20px"}>
                <Flex gap={"10px"} width={"100%"}>
                  <UserAvatar />
                  <Stack spacing={"4px"}>
                    <Flex gap={2} align={"center"}>
                      <Text textStyle="body1">닉네임</Text>
                      <CustomTag
                        title="학생"
                        color="primary.500"
                        background="primary.100"
                      />
                    </Flex>
                    <Text textStyle={"body1"}>email@email.com</Text>
                  </Stack>
                </Flex>
              </Center>
            </Container>
          </Box>
          <Stack spacing={25} px={"24px"} pt={"3.5px"}>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"}>
                인증센터
              </Text>
            </Link>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"}>
                게시글 관리
              </Text>
            </Link>
          </Stack>
        </Stack>
        <DeviderWave />
        <Stack spacing={23} px={"24px"}>
          <Text textStyle={"headline2"} paddingTop={"10px"}>
            이용약관
          </Text>
          <Stack spacing={25}>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"}>
                이용 제한 규칙
              </Text>
            </Link>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"}>
                커뮤니티 이용 규칙
              </Text>
            </Link>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"}>
                서비스 이용약관
              </Text>
            </Link>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"}>
                개인정보 처리방침
              </Text>
            </Link>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"}>
                청소년 보호 정책
              </Text>
            </Link>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"}>
                오픈소스 라이선스
              </Text>
            </Link>
          </Stack>
        </Stack>
        <DeviderWave />
        <Stack spacing={23} px={"24px"}>
          <Text textStyle={"headline2"} paddingTop={"10px"}>
            앱설정
          </Text>
          <Stack spacing={25}>
            <DarkModeButton />
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"}>
                알림
              </Text>
            </Link>
          </Stack>
        </Stack>
        <DeviderWave />
        <Stack spacing={23} px={"24px"}>
          <Text textStyle={"headline2"} paddingTop={"10px"}>
            이용 안내
          </Text>
          <Stack spacing={25}>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"}>
                앱 버전
              </Text>
            </Link>
            <Link href="">
              <Text textStyle={"body1"} width={"fit-content"}>
                문의하기
              </Text>
            </Link>
          </Stack>
        </Stack>
        <Box p={"0 16px 32px 16px"}>
          <Button
            textStyle={"body1"}
            w={"100%"}
            h={"43px"}
            borderRadius={"8px"}
            background={"grey.200"}
          >
            로그아웃
          </Button>
        </Box>
      </Stack>
    </PageLayout>
  );
};

export default index;
