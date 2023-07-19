import { useState } from "react";

import { Text } from "@chakra-ui/layout";

import AppContainer from "@/components/common/AppContainer";
import CaretLeft from "@/components/icons/CaretLeft";
import RecruitingPostForm from "@/components/recruiting/RecruitingPostForm";
import Title from "@/components/recruiting/Title";

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
