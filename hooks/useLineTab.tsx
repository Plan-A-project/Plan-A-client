import { useState } from "react";

import { default as _LineTab } from "@/components/common/LineTab";

export default function useLineTab(): [number, () => JSX.Element] {
  const [activatedTab, setActivatedTab] = useState(1);

  const LineTab = () => (
    <_LineTab activatedTab={activatedTab} setActivatedTab={setActivatedTab} />
  );
  return [activatedTab, LineTab];
}
