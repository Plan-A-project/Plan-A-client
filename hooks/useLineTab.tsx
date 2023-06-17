import { useState } from "react";

import { default as _LineTab } from "@/components/common/LineTab";

export default function useLineTab(
  tabs: string[],
): [number, () => JSX.Element] {
  const [activatedTab, setActivatedTab] = useState(0);

  const LineTab = () => (
    <_LineTab
      activatedTab={activatedTab}
      setActivatedTab={setActivatedTab}
      tabs={tabs}
    />
  );
  return [activatedTab, LineTab];
}
