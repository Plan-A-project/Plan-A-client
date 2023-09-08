import { useState } from "react";

import { default as _Snackbar } from "@/components/common/Snackbar";

export default function useSnackbar(
  content: string,
  _time = 3000,
): [boolean, () => void, () => JSX.Element] {
  const [isActivated, setIsActivated] = useState(false);

  function activateSnackbar() {
    setIsActivated(true);
    setTimeout(() => setIsActivated(false), _time);
  }

  const Snackbar = () => <_Snackbar isActive={isActivated} content={content} />;

  return [isActivated, activateSnackbar, Snackbar];
}
