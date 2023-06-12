import { useState } from "react";

import PopupTop from "@/components/common/PopupTop";

export const usePopup = (
  content: string,
): [boolean, () => void, () => JSX.Element] => {
  const [isActivated, setIsActivated] = useState(false);

  function activatePopup() {
    setIsActivated(true);
    setTimeout(() => setIsActivated(false), 3000);
  }

  const Popup = () => <PopupTop content={content} />;

  return [isActivated, activatePopup, Popup];
};
