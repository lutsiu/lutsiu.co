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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [conditionalCallback]);
  return showAnimation
}
