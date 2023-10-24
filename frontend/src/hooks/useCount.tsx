import { useEffect, useState } from "react";

export default function useCount(targetValue: number, startCount:boolean) {
  const [count, setCount] = useState(0);
    
  useEffect(() => {
    if (!startCount) return
    const counter = setInterval(() => {
      if (count < targetValue) {
        setCount(count + 1);
      } else {
        clearInterval(counter)
      }
    }, 15);
    return () => {
      clearInterval(counter);
    }
  }, [count, targetValue, startCount]);

  return count
}
