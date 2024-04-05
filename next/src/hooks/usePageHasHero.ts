import { useEffect, useState } from "react";

export const usePageHasHero = (path: string) => {
  const [hasHero, setHasHero] = useState<boolean>(false);

  useEffect(() => {
    if (path === "/" || path === "/about") {
      setHasHero(true);
      return;
    }
  }, []);

  return { hasHero };
};