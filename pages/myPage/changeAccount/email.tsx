import React from "react";

import { Stack, Text, VStack } from "@chakra-ui/layout";

import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/pages/components/CustomInput";
import Header from "@/pages/components/Header";
import PageLayout from "@/pages/components/Layout";

const email = () => {
  return (
    <PageLayout>
      <Header headingText="계정 변경" />
      <Stack spacing={"16px"} mb={"33px"} p={"16px"}>
        <Text textStyle="headline1">이메일</Text>
        <CustomInput
          label="email"
          title="이메일"
          placeholder="youremail@email.com"
          type="email"
        />
        <CustomButton title="인증하기" disabled={true} buttonStyle="bordered" />
        <CustomInput
          label="certificationCode"
          title="인증코드"
          placeholder="djkfjdiafjdg789"
          type="text"
        />
        <div></div>
        <CustomButton title="변경하기" disabled={true} buttonStyle="filled" />
      </Stack>
    </PageLayout>
  );
};

export default email;
