import { useEffect, useState, RefObject } from "react";
import { throttle } from "../utils/throttle";

export function UseIsElementAtTop(
  ref: RefObject<HTMLElement>,
  threshold = 0, // en pixels
  throttleDelay = 100
): boolean {
  const [isTopScrolled, setIsTopScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isAtTop = rect.top <= threshold;

      setIsTopScrolled(isAtTop);
    }, throttleDelay);

    handleScroll(); // appel initial
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel?.(); // sécurité
    };
  }, [ref, threshold, throttleDelay]);

  return isTopScrolled;
}
