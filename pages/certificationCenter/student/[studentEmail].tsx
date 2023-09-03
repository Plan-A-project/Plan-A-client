import { Box, Stack } from "@chakra-ui/layout";
import { Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { AppContainer, Header } from "@/components/common";

const CheckEmail = () => {
  const router = useRouter();
  const handleCertificate = () => {
    localStorage.setItem("certComplt", "true");
    router.push("/");
  };
  const {
    query: { studentEmail },
  } = useRouter();
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
        </Box>
        {/* <Button
          onClick={handleCertificate}
          mt={4}
          textStyle={"subtitle1"}
          h={"52px"}
          w={"full"}
          borderRadius={"16px"}
          bg={1 ? "primary.500" : "grey.200"}
          color={1 ? "background1" : "grey.500"}
        >
          확인
        </Button> */}
      </Stack>
    </AppContainer>
  );
};

export default CheckEmail;
