import { useState } from "react";

import { default as _Snackbar } from "@/components/common/Snackbar";

export default function useSnackbar(
  content: string,
): [boolean, () => void, () => JSX.Element] {
  const [isActivated, setIsActivated] = useState(false);

  function activateSnackbar() {
    setIsActivated(true);
    setTimeout(() => setIsActivated(false), 3000);
  }

  const Snackbar = () => <_Snackbar content={content} />;

  return [isActivated, activateSnackbar, Snackbar];
}
