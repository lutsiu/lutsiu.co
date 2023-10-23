import styles from '../styles.module.scss'
import placeholderText from "../data/placeholderText";
import { useEffect,useState } from "react";
interface Props {
  sectionRef: React.MutableRefObject<HTMLTableSectionElement | null>
}
export default function GradientTape(props: Props) {
  const {sectionRef} = props
  const [tapeTranslateX, setTapeTranslateX] = useState<null | number>(null);
  useEffect(() => {
    const handleScroll = () => {
      const { current } = sectionRef;
      if (current) {
        const rect = current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight && rect.bottom > 0 && rect.top > 0) {
          const gradientTapeTranslateX = 100 - (rect.top / windowHeight) * 100;
          setTapeTranslateX(gradientTapeTranslateX);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles["showcase-tape"]} text-black flex w-[300%] gap-[4rem] py-[1.5rem] text-4xl font-medium px-[2rem] `}
      style={{
        transform: tapeTranslateX ? `translateX(-${tapeTranslateX * 2}px)` : "",
      }}
    >
      {placeholderText.map((text, i) => {
        return (
          <p key={i} style={{ fontFamily: "Montserrat, sans-serif" }}>
            {text}
          </p>
        );
      })}
    </div>
  );
}
