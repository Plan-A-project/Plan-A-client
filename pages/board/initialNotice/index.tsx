import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

import postApis from "@/api/post";
import { AppContainer } from "@/components/common";
import BigClose from "@/components/icons/bigClose";

const InitialNotice = () => {
  const boardId = useSearchParams().get("boardId");
  const postType = useSearchParams().get("postType");
  const router = useRouter();
  const handleAgree = async () => {
    const response = await postApis.agreePolicy();
    console.log(response);
    router.push(`/board/form?boardId=${boardId}&postType=${postType}`);
  };
  return (
    <AppContainer>
      <Stack gap={12} h={"100vh"} my={4}>
        <Flex justify={"flex-end"}>
          <BigClose onClick={() => router.back()} />
        </Flex>
        <Box borderRadius={"8px"} bg={"#F8F8F8"} p={5}>
          <Text textStyle={"headline2"} lineHeight={7}>
            1. 배려와 예의를 반드시 지켜주세요.
          </Text>
          <Text textStyle={"body1"} mt={4} lineHeight={6}>
            • 욕설, 비속어의 사용을 금지합니다. (욕설임을 &nbsp;&nbsp;&nbsp;알
            수 있는 자음, 기호 등 포함)
            <br />• 타인에 대한 무분별한 비난이나 인신공격을 하
            &nbsp;&nbsp;&nbsp;지 않습니다.
            <br />• 비방 또는 분란을 조장하는 허위사실이나 근거
            &nbsp;&nbsp;&nbsp;없는 정보를 유포해서는 안됩니다.
          </Text>
          <Text textStyle={"headline2"} lineHeight={7} mt={10}>
            2. 개인 또는 단체의 이익을 목적으로 부정한 활동을 금지합니다.
          </Text>
          <Text textStyle={"body1"} mt={4} lineHeight={6}>
            • 일반적인 회원으로 가장하여 홍보성 게시물을
            &nbsp;&nbsp;&nbsp;작성하여서는 안됩니다.
            <br />
            • 이미지 링크용도, 추천인코드, 권한획득 목적의
            &nbsp;&nbsp;&nbsp;게시물 반복 작성 등 개인적 이득을 위한 활동을
            &nbsp;&nbsp;&nbsp;하실 수 없습니다.
            <br />• 개인, 특정 단체에 대한 긍정적 또는 부정적 여
            &nbsp;&nbsp;&nbsp;론조성을 위해 부당하게 활동할 수 없습니다.
          </Text>
          <Text textStyle={"subtitle2"} mt={4} lineHeight={6}>
            ※ 동의는 최초 1회만 진행됩니다.
          </Text>
        </Box>
        <Button
          onClick={handleAgree}
          textStyle={"subtitle1"}
          height={"52px"}
          borderRadius={"16px"}
          bg={"primary.500"}
          color={"background1"}
        >
          동의합니다
        </Button>
      </Stack>
    </AppContainer>
  );
};

export default InitialNotice;
