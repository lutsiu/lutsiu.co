import { useEffect, useState } from "react";

export default function useShowAnimation(
  conditionalCallback: () => boolean | undefined
) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (conditionalCallback()) {
      setShowAnimation(true);
      return
    }
    const handleScroll = () => {
      if (conditionalCallback()) {
        setShowAnimation(true);
      }
    };
    const handleTouchMove = () => {
      if (conditionalCallback()) {
        setShowAnimation(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [conditionalCallback]);
  return showAnimation
}
