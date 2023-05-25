import React from "react";

import { Stack, Text } from "@chakra-ui/layout";

import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/pages/components/CustomInput";
import Header from "@/pages/components/Header";
import PageLayout from "@/pages/components/Layout";

const wechatKakao = () => {
  return (
    <PageLayout>
      <Header headingText="계정 변경" />
      <Text textStyle="headline1" p={"16px"}>
        위챗 or 카카오톡 아이디
      </Text>
      <Stack spacing={"189px"} p={"0 16px"}>
        <CustomInput
          label="wechatKakao"
          title="위챗 or 카카오톡 아이디"
          placeholder=""
          type="text"
        />
        <CustomButton title="변경하기" disabled={true} buttonStyle="filled" />
      </Stack>
    </PageLayout>
  );
};

export default wechatKakao;
