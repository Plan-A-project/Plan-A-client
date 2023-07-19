import React, { useState } from "react";

import { Text } from "@chakra-ui/layout";

import Title from "@/components/board/FormTitle";
import GeneralPostForm from "@/components/board/GeneralPostForm";
import AppContainer from "@/components/common/AppContainer";
import CaretLeft from "@/components/icons/CaretLeft";

export default function Normal() {
  const [isBtnActive, setBtnActive] = useState(false);
  return (
    <AppContainer>
      <Title
        title="글쓰기"
        left={<CaretLeft />}
        right={
          isBtnActive ? <Text color={"blue"}>등록</Text> : <Text>등록</Text>
        }
      />
      {/* <GeneralPostForm setBtnActive={setBtnActive} /> */}
    </AppContainer>
  );
}
