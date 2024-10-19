import { useEffect, useState } from "react";

export function useScreen(minWidth: number) {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    function handleChange() {
      setIsSmallScreen(window.innerWidth <= minWidth);
    }

    handleChange();

    window.addEventListener("resize", handleChange);

    return () => {
      window.removeEventListener("resize", handleChange);
    };
  }, [minWidth]);

  return isSmallScreen;
}
