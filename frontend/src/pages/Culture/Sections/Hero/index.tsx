import { useEffect, useRef } from "react";
import people from "../../../../assets/culture-page/people.jpg";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import useShowAnimation from "../../../../hooks/useShowAnimation";
export default function HeroSection() {
  const heroRef = useRef<null | HTMLDivElement>(null);

  const conditionCB = () => {
    const { current } = heroRef;
    if (!current) return false;
    const { top } = current.getBoundingClientRect();
    console.log(top);
    if (top < 400 && top > -75) return true;
  }

  const showAnimation = useShowAnimation(conditionCB);
  return (
    <section className={`hero-section ${styles.container} relative`}>
      <img
        src={people}
        alt="hero-image"
        className="h-[35rem] lg:h-[44rem] w-full object-cover  grayscale-[100%]"
      />
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: showAnimation ? 1 : 0, y: showAnimation ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="absolute left-[1.5rem] sm:left-[5rem] md:left-[10rem] xl:left-[15rem] 2xl:left-[20rem] bottom-[2rem] sm:bottom-[6rem] lg:bottom-[12rem] text-white z-10"
      >
        <h3 className={`${styles.gradient} text-3xl lg:text-4xl font-bold`}>
          CULTURE
        </h3>
        <h2 className="text-6xl sm:text-7xl lg:text-8xl font-semibold">
          Our Core Values
        </h2>
      </motion.div>
    </section>
  );
}
