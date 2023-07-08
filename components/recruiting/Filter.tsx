import { useState } from "react";

import { VStack } from "@chakra-ui/layout";
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
    <VStack spacing={4} py={8}>
      <ChipGroup chips={chips} onChange={handleChip} />
    </VStack>
  );
};

export default Filter;
