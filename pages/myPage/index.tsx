import React, { useEffect, useState } from "react";

import {
  Text,
  Box,
  Flex,
  Stack,
  Button,
  Container,
  Circle,
  Center,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import profileApis from "@/api/profile";
import Navbar from "@/components/layout/Navbar";
import { BeforeLogin } from "@/components/myPage";
import InfoContent from "@/components/common/InfoContent";

import ProfileBasic from "@/components/icons/ProfileBasic";
import CustomTag from "../components/CustomTag";
import authApis from "@/api/authentication";
import useSnackbar from "@/hooks/useSnackbar";
import { AppContainer } from "@/components/common";
import useCustomModal from "@/hooks/useModal";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [isLoggedIn, setIsLoggedIn] = useState<any>(false);
  const router = useRouter();
  const [isActivated, activateSnackbar, Snackbar] =
    useSnackbar("안녕히 가세요!");
  const { ModalComponent, onOpen } = useCustomModal();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<any>();
  const handleLogout = async () => {
    const response = await authApis.logout();
    router.push("/login");

    activateSnackbar();
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await profileApis.getProfile();
      if (response.data && response.ok) {
        setUserInfo(response.data.data);
        setIsLoggedIn(true);
      }
    };
    fetch();
  }, []);
  const principle = [
    {
      title: "이용 제한 규칙",
    },
    {
      title: "커뮤니티 이용 규칙",
    },
    {
      title: "서비스 이용 약관",
    },
    {
      title: "개인 정보 처리방침",
    },
    {
      title: "청소년 보호 정책",
    },
    {
      title: "오픈소스 라이선스",
    },
  ];
  return (
    <>
      {isActivated && <Snackbar />}
      <AppContainer margin>
        <Navbar currentTab="myProfile" />
        <Text mt={4} textStyle={"headline1"}>
          내 정보
        </Text>
        <Stack spacing={47} mt={"14.5px"} mb={"24px"}>
          <Stack spacing={10.5}>
            <Flex justify={"space-between"}>
              <Text textStyle={"headline2"}>프로필</Text>
              <Text
                onClick={() => {
                  setTitle("닉네임 & 프로필 사진 변경");
                  setContent(<InfoContent content="업데이트 중입니다." />);
                  onOpen();
                  // router.push("/myPage/changeProfile");
                }}
                textStyle={"body3"}
              >
                {isLoggedIn ? "변경" : ""}
              </Text>
            </Flex>
            {isLoggedIn ? (
              <Container bgColor="#F7F8FA" borderRadius={8}>
                <Center
                  p={"20px 12px"}
                  // onClick={() => router.push("/myPage/changeProfile")}
                >
                  <Flex gap={"10px"} width={"100%"}>
                    <Circle size={"56px"} overflow={"hidden"}>
                      {userInfo.thumbnailUrl ? (
                        <img
                          src={userInfo.thumbnailUrl}
                          alt="Uploaded Preview"
                          width="100"
                        />
                      ) : (
                        <ProfileBasic />
                      )}
                    </Circle>
                    <Stack spacing={2} justify={"center"}>
                      <Flex gap={2} align={"center"}>
                        <Text textStyle={"subtitle2"}>{userInfo.nickname}</Text>
                        <CustomTag
                          title={
                            userInfo.role === "STUDENT"
                              ? "학생"
                              : userInfo.role === "COMPANY"
                              ? "기업"
                              : ""
                          }
                          color="twitter"
                        />
                      </Flex>
                      <Text textStyle={"body2"}>{userInfo.username}</Text>
                    </Stack>
                  </Flex>
                </Center>
              </Container>
            ) : (
              <BeforeLogin />
            )}
            {isLoggedIn && (
              <Stack spacing={25}>
                {/* <Link
                as={NextLink}
                href="/myPage/managePosts"
                textStyle={"body1"}
                width={"fit-content"}
                paddingX={"5px"}
                >
                스크랩 보기
              </Link> */}
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
            )}
          </Stack>
          <Stack spacing={23}>
            <Text textStyle={"headline2"} paddingTop={"10px"}>
              이용약관
            </Text>
            <Stack spacing={25}>
              {principle.map(el => {
                return (
                  <Text
                    onClick={() => {
                      setTitle(el.title);
                      setContent(<InfoContent content="업데이트 중입니다." />);
                      onOpen();
                    }}
                    key={el.title}
                    textStyle={"body1"}
                    width={"fit-content"}
                    paddingX={"5px"}
                  >
                    {el.title}
                  </Text>
                );
              })}
            </Stack>
          </Stack>
          {/* <Stack spacing={23}>
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
          </Stack> */}
          <Stack spacing={23}>
            <Text textStyle={"headline2"} paddingTop={"10px"}>
              이용 안내
            </Text>
            <Stack spacing={25}>
              <Text
                textStyle={"body1"}
                width={"fit-content"}
                paddingX={"5px"}
                onClick={() => {
                  setTitle("앱 버전");
                  setContent(<InfoContent content="v1.1.5" />);
                  onOpen();
                }}
              >
                앱 버전
              </Text>

              <Text
                onClick={() => {
                  setTitle("문의하기");
                  setContent(
                    <InfoContent content="dlwnstjr37@gmail.com으로 문의주세요." />,
                  );
                  onOpen();
                }}
                textStyle={"body1"}
                width={"fit-content"}
                paddingX={"5px"}
              >
                문의하기
              </Text>
            </Stack>
          </Stack>
          {isLoggedIn && (
            <Button
              onClick={handleLogout}
              textStyle={"body1"}
              width={"100%"}
              borderRadius={"16px"}
            >
              로그아웃
            </Button>
          )}
        </Stack>
        <ModalComponent title={title} content={content} />

        <Box mb={20} />
      </AppContainer>
    </>
  );
};

export default MyPage;
