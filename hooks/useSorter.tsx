import { ReactNode, useState } from "react";

import ChipGroup, { ChipData } from "@/components/common/ChipGroup";

const defaultChips: ChipData[] = [
  {
    label: "최신순",
    checked: true,
  },
  {
    label: "인기순",
    checked: false,
  },
];

export function useSorter(
  sorts: ChipData[] = defaultChips,
): [() => ReactNode, number] {
  const [sortsState, setSortsState] = useState(sorts);
  const sortIndex = sorts.findIndex(sort => sort.checked);

  function getComponent() {
    return <ChipGroup chips={sortsState} onChange={setSortsState} />;
  }

  return [getComponent, sortIndex];
}
