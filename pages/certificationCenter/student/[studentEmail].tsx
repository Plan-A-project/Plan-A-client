import { Box, Stack } from "@chakra-ui/layout";
import { Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { isCertificatedState } from "@/state/atoms/auth/loginAtom";

import { AppContainer, Header } from "@/components/common";
import { useEffect } from "react";
import certificationApis from "@/api/certification";

const CheckEmail = () => {
  const router = useRouter();
  const {
    query: { studentEmail },
  } = useRouter();
  const isCertificate = useRecoilValue(isCertificatedState);
  useEffect(() => {
    async function fetchCertification() {
      const response = await certificationApis.getVerificationInfo();
      console.log("verifs", response.data.status);

      if (response.data.status === "SUCCESS") {
        localStorage.setItem("isFirstCertif", "true");
        router.push("/");
      }
    }
    fetchCertification();
    console.log(323232, isCertificate);
    const intervalId = setInterval(fetchCertification, 2000); // 2초마다 checkCertificate 함수 호출

    return () => {
      clearInterval(intervalId); // 컴포넌트가 언마운트될 때 타이머 정리
    };
  }, [isCertificate]);
  useEffect(() => {
    if (isCertificate) {
      router.push("/");
    }
  }, [isCertificate]);

  return (
    <AppContainer>
      <Header back leftTitle title="인증센터" />
      <Stack gap={12} h={"85vh"} justify={"center"}>
        <Box textAlign={"center"}>
          <Text textStyle={"headline2"}>{studentEmail}</Text>
          <Text mt={4} textStyle={"body1"} fontSize={"18px"}>
            으로 인증 안내 메일을 보냈어요.
            <br /> 해당 메일로 이동해
            <br /> 인증을 완료해주세요.
          </Text>
          <Text mt={4} textStyle={"body1"} color={"red"}>
            메일 확인이 안될 경우 스팸 메일함을 확인해 주세요. <br />
            수신까지 최대 5분이 소요될 수 있습니다.
          </Text>
        </Box>
      </Stack>
    </AppContainer>
  );
};

export default CheckEmail;
