import { useEffect, useState } from "react";

export default function useScrollTop(): number {
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    function handleScroll() {
      const top = document.scrollingElement?.scrollTop ?? 0;
      setScrollTop(top);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollTop;
}
