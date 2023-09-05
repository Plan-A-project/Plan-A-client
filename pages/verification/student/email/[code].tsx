import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isCertificatedState } from "@/state/atoms/auth/loginAtom";

import { useRouter } from "next/router";

import certificationApis from "@/api/certification";

import { Box, Stack } from "@chakra-ui/layout";
import { Button, Text } from "@chakra-ui/react";

import { AppContainer, Header } from "@/components/common";

const VerifyCode = () => {
  const {
    query: { code },
  } = useRouter();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(isCertificatedState);

  const handleConfirm = async () => {
    const response = await certificationApis.verifyEmailCode(code);
    console.log("certif", response);
    if (response.ok) {
      setIsAuthenticated(true);
      alert("원래 창으로 돌아가주세요!");
    }
  };

  return (
    <AppContainer>
      <Header back leftTitle title="인증센터" />
      <Stack gap={12} h={"85vh"} justify={"center"}>
        <Box textAlign={"center"}>
          <Text textStyle={"headline2"}>인증 확인 버튼을 눌러주세요!</Text>
          <Text mt={4} textStyle={"body1"} fontSize={"18px"}>
            이 창은 닫아도 됩니다.
            <br /> 원래 페이지로 돌아가주세요.
          </Text>
        </Box>
        <Button
          mt={4}
          textStyle={"subtitle1"}
          h={"52px"}
          w={"full"}
          borderRadius={"16px"}
          bg={1 ? "primary.500" : "grey.200"}
          color={1 ? "background1" : "grey.500"}
          onClick={handleConfirm}
        >
          확인
        </Button>
      </Stack>
    </AppContainer>
  );
};

export default VerifyCode;
