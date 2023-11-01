import { info } from "../../data";
import Card from "./Card";
import styles from "../../styles.module.scss";
import useGetScreenWidth from "../../../../hooks/useGetScreenWidth";
import { useRef } from "react";
import useShowAnimation from "../../../../hooks/useShowAnimation";
import { motion } from "framer-motion";
export default function DescriptionSection() {
  const width = useGetScreenWidth();
  const descrRef = useRef<null | HTMLTableSectionElement>(null);

  const conditionCB = () => {
    const { current } = descrRef;
    if (!current) return false;
    const { top} = current.getBoundingClientRect();
    if (top < 450 ) {
      return true;
    }
  };

  const showAnimation = useShowAnimation(conditionCB);
  return (
    <section
      className={`${
        width < 992 ? styles.padding : ""
      } descr-section relative lg:h-[45rem]`}
      ref={descrRef}
    >
      <motion.div
        className={`${
          width >= 992 ? styles.padding : ""
        } flex flex-col py-[3rem] lg:py-[0] lg:flex-row gap-[3rem] lg:absolute lg:top-[-5rem]`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: showAnimation ? 1 : 0, y: showAnimation ? 0 : 100 }}
        transition={{ duration: 0.5 }}
      >
        {info.map((card, i) => {
          return <Card key={i} {...card} />;
        })}
      </motion.div>
      <div className="w-full h-[0.1rem] bg-black absolute  left-0 lg:left-auto bottom-[-1rem] lg:bottom-[2rem]"></div>
    </section>
  );
}
