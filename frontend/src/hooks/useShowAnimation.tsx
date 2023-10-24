import { useEffect, useState } from "react";

export default function useShowAnimation(
  conditionalCallback: () => boolean | undefined
) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
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
