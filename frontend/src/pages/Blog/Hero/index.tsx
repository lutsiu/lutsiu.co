import { useRef } from "react";
import styles from "../styles.module.scss";
import { motion } from "framer-motion";
import useShowAnimation from "../../../hooks/useShowAnimation";
export default function HeroSection() {
  const heroRef = useRef<null | HTMLTableSectionElement>(null);
  const conditionalCb = () => {
    const { current } = heroRef;
    if (!current) return false;
    const { top } = current.getBoundingClientRect();
    if (top > -300) {
      return true;
    }
  };

  const showAnimation = useShowAnimation(conditionalCb);
  return (
    <section
      className={`hero-section ${styles.padding} bg-black pt-[20rem] pb-[3rem] md:pb-[6rem]`}
      ref={heroRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: showAnimation ? 1 : 0, y: showAnimation ? 0 : 100 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <h4 className={`${styles.gradient} font-bold text-2xl md:text-4xl `}>
          LUTSIU'S BLOG: WEB INSIGHTS
        </h4>
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-semibold">
          Check out our Best Articles
        </h2>
        <p className="text-white hidden sm:block text-xl md:text-2xl leading-10 mt-[2rem]">
          Maecenas nec velit libero. Vivamus eu mauris sit amet elit fringilla
          ornare in nec nulla. Donec sit amet tincidunt dui, sed varius felis.
          In sapien tortor, malesuada at vestibulum ut, viverra nec nisi.
          Pellentesque et mattis justo, vitae efficitur sapien. Suspendisse
          elementum ligula eget ipsum suscipit, porttitor posuere metus
          fermentum. Pellentesque consequat elit quis luctus lacinia!
        </p>
      </motion.div>
    </section>
  );
}
