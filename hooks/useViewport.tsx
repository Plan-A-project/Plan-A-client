import { useEffect, useState } from "react";

function getViewport(): [number, number] {
  return [
    window.visualViewport?.width ??
      Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0,
      ),
    window.visualViewport?.height ??
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
      ),
  ];
}

export default function useViewport(): readonly [number, number] {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      const [w, h] = getViewport();
      setWidth(w);
      setHeight(h);
    }

    const target = window.visualViewport ?? window;

    target.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      target.removeEventListener("resize", handleResize);
    };
  }, []);

  return [width, height] as const;
}
