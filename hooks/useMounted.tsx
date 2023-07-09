import { useEffect, useState } from "react";

export default function useMounted(): boolean {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    () => setMounted(false);
  }, []);

  return mounted;
}
