import { Spacer } from "@chakra-ui/react";
import { NextPage } from "next";

import BoardBaseForm from "@/components/board/BoardBaseForm";
import AppContainer from "@/components/common/AppContainer";
import Header from "@/components/common/Header";

const Write: NextPage = () => {
  return (
    <AppContainer>
      <Header back title="글쓰기" />
      <Spacer />
      <BoardBaseForm />
    </AppContainer>
  );
};

export default Write;
