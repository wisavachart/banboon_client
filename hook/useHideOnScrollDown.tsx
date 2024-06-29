import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
export const useHideOnScrollDown = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const dbScrollY = useDebounce(scrollY, 50);

  const handleScroll = useCallback(() => {
    const cur = window.scrollY;
    setIsVisible(cur <= 50);
    setScrollY(cur);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return isVisible;
};
