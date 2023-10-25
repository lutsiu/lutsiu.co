import useShowAnimation from "../../../../hooks/useShowAnimation";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import { motion } from "framer-motion";
import { useRef } from "react";
export default function ContactUs() {
  const sectionRef = useRef<HTMLTableSectionElement | null>(null);

  const conditionalCallback = () => {
    const { current } = sectionRef;
    if (!current) return false;
    const { top } = current.getBoundingClientRect();
    if (top < 480) {
      return true;
    }
  };

  const showAnimation = useShowAnimation(conditionalCallback);

  return (
    <section className={'contact-us-section padding pt-[4rem]'} ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: showAnimation ? 1 : 0, y: showAnimation ? 0 : 200 }}
        transition={{ duration: 0.5 }}
        className="flex md:gap-[8rem] flex-col md:flex-row"
      >
        <LeftPart />
        <RightPart />
      </motion.div>
    </section>
  );
}
