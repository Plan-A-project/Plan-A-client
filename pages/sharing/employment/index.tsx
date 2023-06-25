import { Box } from "@chakra-ui/layout";

import BoardTab from "@/components/board/BoardTabs";
import AppContainer from "@/components/common/AppContainer";
import FAB from "@/components/common/FAB";
import Header from "@/components/common/Header";
import IconSearch from "@/components/icons/IconSearch";
import { useSorter } from "@/hooks/useSorter";

const Employment = () => {
  const [getSorter] = useSorter();
  return (
    <AppContainer>
      <Header back title="취업" rightNode={<IconSearch color={"#5E606E"} />} />
      <BoardTab tabs={["전체", "모집"]}>
        <Box>
          <Box my={4}>{getSorter()}</Box>
        </Box>
        <Box>
          <Box my={4}>{getSorter()}</Box>
        </Box>
      </BoardTab>
      <FAB.Add r={4} b={4} />
    </AppContainer>
  );
};

export default Employment;
