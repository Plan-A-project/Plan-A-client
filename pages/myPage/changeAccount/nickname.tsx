import { useState } from "react";

import { Stack, Text } from "@chakra-ui/layout";

import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/pages/components/CustomInput";
import Header from "@/pages/components/Header";
import PageLayout from "@/pages/components/Layout";

const Nickname = () => {
  const [validation, setValidation] = useState(false);
  return (
    <PageLayout>
      <Header headingText="계정 변경" />
      <Stack spacing={"121px"} p={"0 16px"} mt={"16px"}>
        <Stack spacing={"16px"}>
          <Text textStyle="headline1">닉네임</Text>
          <CustomInput
            label="nickname"
            title="닉네임"
            placeholder=""
            type="text"
            setValidation={setValidation}
            errorMessage="한글, 영어, 숫자 조합 2~8자로 입력해주세요"
          />
          <CustomButton
            title="중복확인"
            disabled={!validation}
            buttonStyle="bordered"
          />
          <Text textStyle={"caption2"} color={"primary.500"}>
            사용 가능해요.
          </Text>
        </Stack>
        <CustomButton title="변경하기" disabled={true} buttonStyle="filled" />
      </Stack>
    </PageLayout>
  );
};

export default Nickname;
