import cyber from "../../../../../assets/blog/cyber.jpg";
import useShowAnimation from "../../../../../hooks/useShowAnimation";
import styles from "../styles.module.scss";
import { useRef } from "react";
import { motion } from "framer-motion";
export default function TopPart() {
  const topPartRef = useRef<null | HTMLDivElement>(null);

  const conditionalCallback = () => {
    const { current } = topPartRef;
    if (!current) return false;
    const { top } = current.getBoundingClientRect();
    if (top < 175) {
      return true;
    }
  };

  const showAnimation = useShowAnimation(conditionalCallback);

  return (
    <div ref={topPartRef}>
      <h5 className={`${styles["gradient-text"]}`}>OUR IDEAS</h5>
      <div className="">
        <h2
          className="text-6xl sm:text-7xl lg:text-8xl 2xl:text-9xl font-medium tracking-wide mt-[1rem]"
          style={{ fontFamily: "Montserrat" }}
        >
          BLOG &
        </h2>
        <h2
          className="text-6xl sm:text-7xl lg:text-8xl 2xl:text-9xl font-medium tracking-wide mt-[1rem]"
          style={{ fontFamily: "Montserrat" }}
        >
          INSIGHTS
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{opacity: showAnimation ? 1 : 0, y: showAnimation ? 0 : 200}}
        transition={{duration: .5}}
        className="mt-[4rem] lg:mt-[6rem] relative"
      >
        <div className="sm:w-[88%] md:w-[75%] lg:w-[85%] xl:w-[80%] 2xl:w-[63%] sm:h-[45rem] md:h-[35rem] lg:h-[50rem]">
          <img
            src={cyber}
            alt="cyber-img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-black text-white sm:max-w-[23rem] md:max-w-[45rem] lg:max-w-[43rem]  xl:max-w-[55rem] absolute sm:right-0 sm:top-[8rem] md:top-[6rem] lg:top-[10rem] p-[2rem] sm:p-[1.5rem] md:p-[3rem] 2xl:p-[5rem]">
          <h4
            className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-black"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            The Power of Webflow for Web Design
          </h4>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium mt-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ratione, ad aliquid nisi unde similique repudiandae provident porro
            quaera?
          </p>
        </div>
      </motion.div>
    </div>
  );
}
