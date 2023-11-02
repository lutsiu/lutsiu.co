import { useState, useEffect } from "react";

export default function useSrcIsLoading(src: string) {
  const [srcIsLoading, setSrcIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState('');
  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImageSrc(image.src);
      setTimeout(() => {
        setSrcIsLoading(false);
      }, 500);
    }
  }, [src]);

  return {srcIsLoading, imageSrc};
}