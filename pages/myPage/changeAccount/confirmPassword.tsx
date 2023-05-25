import React from "react";

import { VStack } from "@chakra-ui/layout";

import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/pages/components/CustomInput";
import Header from "@/pages/components/Header";
import PageLayout from "@/pages/components/Layout";

const confirmPassword = () => {
  return (
    <PageLayout>
      <Header headingText="계정 변경" />
      <form action="">
        <VStack spacing={"237px"} p={"24px 16px 16px 16px"}>
          <CustomInput
            title="비밀번호"
            label="password"
            placeholder="영어, 숫자, 특수문자 포함 8~20자"
            type="password"
          />
          <CustomButton title="확인" buttonStyle="filled" />
        </VStack>
      </form>
    </PageLayout>
  );
};

export default confirmPassword;
