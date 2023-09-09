import { Box, Flex, Stack, Text } from "@chakra-ui/layout";

import { useRouter } from "next/router";

import { AppContainer } from "@/components/common";
import BigClose from "@/components/icons/bigClose";

const Notice = () => {
  const router = useRouter();
  return (
    <AppContainer>
      <Stack gap={12} h={"100vh"} my={3} mb={4}>
        <Flex justify={"flex-end"}>
          <BigClose onClick={() => router.back()} />
        </Flex>
        <Box borderRadius={"8px"} bg={"#F8F8F8"} p={5}>
          <Text textStyle={"headline1"} lineHeight={7}>
            게시판 이용규칙
          </Text>
          <Text textStyle={"body1"} mt={4} lineHeight={6}>
            인플리는 게시판 내 모든 주제에 대한 게시물 작성을 허용하며, 다른
            게시판에 비해 자유롭게 운영하고 있는 공간입니다. 그에 따라, 게시판
            이용자는 게시판 이용규칙을 읽을 의무가 있으며, 이를 읽지 않아
            발생하는 모든 책임은 이용자에게 있습니다.
            <br /> <br /> 운영자의 지속적인 모니터링을 통해 이용규칙을
            위반하거나 커뮤니티 분위기를 저해하는 것으로 판단될 경우, 게시물에
            대한 무통보 삭제처리 및 해당 계정의 서비스 이용이 일정 기간
            제한됩니다. <br /> <br /> 이용규칙을 지속적으로 위반할 경우,
            강제탈퇴 및 해당계정 영구정지에 이를 수 있습니다. <br /> <br /> 해당
            계정 및 게시물에 대한 구체적인 이용 제재 기준은 다음과 같습니다.
          </Text>
          <Text mt={4} textStyle={"headline2"} lineHeight={7}>
            1. 배려와 예의를 반드시 지켜주세요.
          </Text>
          <Text textStyle={"body1"} mt={4} lineHeight={6}>
            • 욕설, 비속어의 사용을 금지합니다. (욕설임을 알 수 있는 자음, 기호
            등 포함)
            <br />• 타인에 대한 무분별한 비난이나 인신공격을 하지 않습니다.
            <br />• 비방 또는 분란을 조장하는 허위사실이나 근거 없는 정보를
            유포해서는 안됩니다.
          </Text>
          <Text textStyle={"headline2"} lineHeight={7} mt={10}>
            2. 개인 또는 단체의 이익을 목적으로 부정한 활동을 금지합니다.
          </Text>
          <Text textStyle={"body1"} mt={4} lineHeight={6}>
            • 일반적인 회원으로 가장하여 홍보성 게시물을 작성하여서는 안됩니다.
            <br />
            • 이미지 링크용도, 추천인코드, 권한획득 목적의 게시물 반복 작성 등
            개인적 이득을 위한 활동을 하실 수 없습니다.
            <br />• 개인, 특정 단체에 대한 긍정적 또는 부정적 여론조성을 위해
            부당하게 활동할 수 없습니다.
          </Text>
        </Box>
      </Stack>
    </AppContainer>
  );
};

export default Notice;
