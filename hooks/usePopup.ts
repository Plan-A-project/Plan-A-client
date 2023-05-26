import { useState } from "react";

export const usePopup = () => {
  const [isActivated, setIsActivated] = useState(false);

  function activatePopup() {
    setIsActivated(true);
    setTimeout(() => setIsActivated(false), 3000);
  }

  return { isActivated, activatePopup };
};
