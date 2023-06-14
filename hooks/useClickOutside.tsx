import { useEffect, useRef } from "react";

type ClickOutsideProps = {
  onClickOutside: () => void;
};

export function useClickOutside<T extends HTMLElement>({
  onClickOutside,
}: ClickOutsideProps): React.RefObject<T> {
  const ref = useRef<T>(null);

  function handleClick(event: MouseEvent | TouchEvent, callback?: () => void) {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      callback?.();
    }
  }

  useEffect(() => {
    const handleMouse = (event: MouseEvent) =>
      handleClick(event, onClickOutside);
    const handleTouch = (event: TouchEvent) =>
      handleClick(event, onClickOutside);

    document.addEventListener("mousedown", handleMouse, true);
    document.addEventListener("touchstart", handleTouch, true);

    return () => {
      document.removeEventListener("mousedown", handleMouse, true);
      document.removeEventListener("touchstart", handleTouch, true);
    };
  }, [onClickOutside]);

  return ref;
}
