import { useState } from "react";

import { Stack, Text } from "@chakra-ui/layout";

import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/pages/components/CustomInput";
import Header from "@/pages/components/Header";
import PageLayout from "@/pages/components/Layout";

const Password = () => {
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [passwordConfirmValidation, setPasswordConfirmValidation] =
    useState(false);

  return (
    <PageLayout>
      <Header headingText="계정 변경" />
      <Stack spacing={"101px"} p={"0 16px"} mt={"16px"}>
        <Stack spacing={"16px"}>
          <Text textStyle="headline1">비밀번호</Text>
          <CustomInput
            label="password"
            title="비밀번호"
            placeholder="영어, 숫자, 특수문자 포함 8~20자"
            type="password"
            errorMessage="비밀번호는 영어, 숫자, 특수문자 포함 8~20자 입니다."
            setValidation={setPasswordValidation}
          />
          <CustomInput
            label="passwordConfirm"
            title="비밀번호 확인"
            placeholder="비밀번호를 한 번 더 입력해주세요."
            type="password"
            errorMessage="비밀번호를 똑같이 입력해주세요."
            setValidation={setPasswordConfirmValidation}
          />
        </Stack>
        <CustomButton title="변경하기" disabled={true} buttonStyle="filled" />
      </Stack>
    </PageLayout>
  );
};

export default Password;
