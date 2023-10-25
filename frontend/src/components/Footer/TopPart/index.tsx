import { useRef } from "react";
import WhiteButton from "../../Buttons/WhiteButton";
import styles from "../styles.module.scss";
import { motion } from "framer-motion";
import useShowAnimation from "../../../hooks/useShowAnimation";

export default function TopPart() {
  const topPartRef = useRef<null | HTMLDivElement>(null);
  const conditionalCb = () => {
    const { current } = topPartRef;
    if (!current) return false;
    const top = current.getBoundingClientRect().top;
    if (window.innerHeight - top > -20) {
      return true;
    }
  };
  const showAnimation = useShowAnimation(conditionalCb);

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{opacity: showAnimation ? 1 : 0, y: showAnimation ? 0 : 200}}
      transition={{duration: .5}}
      className="py-[4rem] padding"
      ref={topPartRef}
    >
      <div
        className="text-white text-3xl sm:text-4xl flex flex-col gap-[.6rem]"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        <h3>We are ready to make</h3>
        <h3>your products happen,</h3>
        <h2
          className={`${styles.gradient} font-black text-5xl  md:text-6xl xl:text-8xl mt-[.5rem]`}
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          let's shape the future!
        </h2>
      </div>
      <div className="mt-[3rem]">
        <WhiteButton content="Get in touch" black={true} paddingSmall={true} />
      </div>
    </motion.div>
  );
}
