import {  useRef } from "react";
import styles from "../../styles.module.scss";
import { motion } from "framer-motion";
import useShowAnimation from "../../../../hooks/useShowAnimation";
export default function Hero() {
  const sectionRef = useRef<null | HTMLTableSectionElement>(null);

  const conditionalCb = () => {
    const { current } = sectionRef;
    if (!current) return false;
    const { top } = current.getBoundingClientRect();
    if (top >  -300) {
      return true;
    }
  };
  const showAnimation = useShowAnimation(conditionalCb);

  return (
    <section
      className={`${styles["service-padding"]} hero-section bg-black  pt-[6rem] 2xl:pt-[18rem] pb-[6rem] lg:pb-[12rem]`}
      ref={sectionRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 130 }}
        animate={{ opacity: showAnimation ? 1 : 0, y: showAnimation ? 0 : 130 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <h3 className={`${styles.gradient} text-3xl lg:text-4xl font-bold`}>
          END-TO-END SOLUTIONS
        </h3>
        <h1
          className="text-6xl md:text-7xl xl:text-9xl font-semibold text-white mt-[1rem]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Our Services
        </h1>
      </motion.div>
    </section>
  );
}
