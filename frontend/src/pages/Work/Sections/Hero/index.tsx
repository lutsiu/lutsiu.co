import { useRef } from "react";
import styles from "../../styles.module.scss";
import { motion } from "framer-motion";
import useShowAnimation from "../../../../hooks/useShowAnimation";
export default function HeroSection() {
  const sectionRef = useRef<null | HTMLTableSectionElement>(null);
  const conditionalCb = () => {
    const { current } = sectionRef;
    if (!current) return false;
    const { top } = current.getBoundingClientRect();
    if (top > -300) {
      return true;
    }
  };
  const showAnimation = useShowAnimation(conditionalCb);
  return (
    <section
      className={`${styles.padding} hero-section bg-black pt-[20rem] pb-[3rem]`}
      ref={sectionRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: showAnimation ? 1 : 0, y: showAnimation ? 0 : 100 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <h4
          className={`${styles.gradient} font-semibold text-3xl md:text-4xl `}
        >
          STATE-OF-THE-ART, USER-FOCUSED PRODUCTS
        </h4>
        <h2
          className="text-white text-5xl md:text-6xl xl:text-8xl font-semibold"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Lutsiu's Showcase
        </h2>
        <p
          className="text-white text-2xl mt-[3rem] hidden sm:block"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {" "}
          Curabitur a blandit ligula, vel finibus dolor. Donec mattis tempor
          eros vel bibendum. Vestibulum congue quam nibh, in laoreet purus
          accumsan eget. Mauris faucibus interdum erat, at dapibus diam pulvinar
          ut. Praesent nec massa consectetur, accumsan nibh vel, vestibulum dui.
          Fusce elementum fermentum leo, at pretium tortor ultrices eget.
          Vestibulum ut nunc turpis. Cras quis dolor facilisis quam rhoncus
          consectetur ac in lacus.
        </p>
      </motion.div>
    </section>
  );
}
