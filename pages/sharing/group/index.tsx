import { Box } from "@chakra-ui/layout";

import AppContainer from "@/components/common/AppContainer";
import FAB from "@/components/common/FAB";
import Header from "@/components/common/Header";
import IconSearch from "@/components/icons/IconSearch";
import { useSorter } from "@/hooks/useSorter";

const Group = () => {
  const [getSorter] = useSorter();
  return (
    <AppContainer>
      <Header
        back
        title="동아리"
        rightNode={<IconSearch color={"#5E606E"} />}
      />
      <Box>
        <Box my={4}>{getSorter()}</Box>
      </Box>
      <FAB.Add r={4} b={4} />
    </AppContainer>
  );
};

export default Group;
