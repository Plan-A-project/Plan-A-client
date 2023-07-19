import React, { useState } from "react";

import { Text } from "@chakra-ui/layout";

import AppContainer from "@/components/common/AppContainer";
import CaretLeft from "@/components/icons/CaretLeft";
import GeneralPostForm from "@/components/recruiting/GeneralPostForm";
import Title from "@/components/recruiting/Title";

export default function Normal() {
  const [isBtnActive, setBtnActive] = useState(false);
  return (
    <AppContainer>
      <Title
        title="공지글 쓰기"
        left={<CaretLeft />}
        right={
          isBtnActive ? <Text color={"blue"}>등록</Text> : <Text>등록</Text>
        }
      />
      <GeneralPostForm setBtnActive={setBtnActive} />
    </AppContainer>
  );
}
