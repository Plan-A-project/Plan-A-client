import { useState } from "react";

import { Flex, Spacer } from "@chakra-ui/layout";
import { NextPage } from "next";

import ChipGroup, { ChipData } from "../common/ChipGroup";

const Filter: NextPage = () => {
  const [chips, setChips] = useState<ChipData[]>([
    {
      label: "최신순",
      checked: false,
    },
    {
      label: "인기순",
      checked: true,
    },
  ]);

  function handleChip(data: ChipData[]) {
    setChips(data);
    console.log(data.map(e => `${e.label}: ${e.checked}`));
  }

  return (
    <Flex pt={4} pb={4}>
      <ChipGroup chips={chips} onChange={handleChip} />
      <Spacer />
    </Flex>
  );
};

export default Filter;
