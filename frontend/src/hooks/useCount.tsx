import { useEffect, useState } from "react";

export default function useCount(targetValue: number) {
  const [count, setCount] = useState(0);
    
  useEffect(() => {
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
  }, [count, targetValue]);

  return count
}
