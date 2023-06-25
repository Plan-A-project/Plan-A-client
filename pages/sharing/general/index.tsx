import { useRef } from "react";

import { Box } from "@chakra-ui/layout";

import BoardTab from "@/components/board/BoardTabs";
import AppContainer from "@/components/common/AppContainer";
import FAB from "@/components/common/FAB";
import Header from "@/components/common/Header";
import IconSearch from "@/components/icons/IconSearch";
import { useDropdown } from "@/hooks/useDropdown";
import { useSorter } from "@/hooks/useSorter";

const Employment = () => {
  const [getSorter] = useSorter();
  const ref = useRef<HTMLButtonElement>(null);
  const [Dropdown, toggle] = useDropdown({
    menus: ["일반글 쓰기", "공지글 쓰기"],
    ref,
    hAlign: "right",
    vAlign: "top",
    yGap: 12,
  });
  return (
    <AppContainer>
      <Header
        back
        title="학교생활"
        rightNode={<IconSearch color={"#5E606E"} />}
      />
      <BoardTab tabIndex={0} tabs={["전체", "공지"]}>
        <Box>
          <Box my={4}>{getSorter()}</Box>
        </Box>
        <Box>
          <Box my={4}>{getSorter()}</Box>
        </Box>
      </BoardTab>
      {Dropdown}
      <FAB.Add onClick={() => toggle()} ref={ref} r={4} b={4} />
    </AppContainer>
  );
};

export default Employment;
