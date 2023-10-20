import { useEffect, useState } from "react";

export default function useGetScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize(e: UIEvent) {
      setWidth((e.currentTarget as Window).innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width ;
}