import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const usePreviousRoute = () => {
  const [previousRoute, setPreviousRoute] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setPreviousRoute(url);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return previousRoute;
};
