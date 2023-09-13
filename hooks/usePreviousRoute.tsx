import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const usePreviousRoute = () => {
  const [previousRoute, setPreviousRoute] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setPreviousRoute(router.asPath);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("previousRoute", router.asPath);
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  if (typeof window !== "undefined") {
    return sessionStorage.getItem("previousRoute");
  }

  return previousRoute;
};
