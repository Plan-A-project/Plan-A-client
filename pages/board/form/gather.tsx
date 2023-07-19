import { useState } from "react";

import { Text } from "@chakra-ui/layout";

import Title from "@/components/board/FormTitle";
import RecruitingPostForm from "@/components/board/RecruitingPostForm";
import AppContainer from "@/components/common/AppContainer";
import CaretLeft from "@/components/icons/CaretLeft";

export default function Gather() {
  const [isBtnActive, setBtnActive] = useState(false);
  return (
    <AppContainer>
      <Title
        title="모집글 쓰기"
        left={<CaretLeft />}
        right={
          isBtnActive ? <Text color={"blue"}>등록</Text> : <Text>등록</Text>
        }
      />
      <RecruitingPostForm setBtnActive={setBtnActive} />
    </AppContainer>
  );
}
