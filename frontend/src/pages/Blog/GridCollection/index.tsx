import styles from "../styles.module.scss";
import data from "../data";
import BigCard from "./BigCard";
import Card from "./Card";
import { motion } from "framer-motion";
import {  useRef } from "react";
import useShowAnimation from "../../../hooks/useShowAnimation";
export default function GridCollection() {
  const bigCard = data.at(0);
  const otherCards = data.slice(1, -1);
  const gridCollectionRef = useRef<null | HTMLDivElement>(null);

  const conditionalCB = () => {
    const { current } = gridCollectionRef;
    if (!current) return false;
    const { top } = current.getBoundingClientRect();
 
    if (top < 600) {
      return true;
    }
  };
  const showAnimation = useShowAnimation(conditionalCB);
  return (
    <section className={`${styles.padding} grid-collection pt-[2rem]`}>
      {bigCard && (
        <div>
          <BigCard {...bigCard} />
        </div>
      )}
      {otherCards && (
        <motion.div
          ref={gridCollectionRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: showAnimation ? 1 : 0,
            y: showAnimation ? 0 : 100,
          }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-x-[2rem] gap-y-[3rem] mt-[3rem]"
        >
          {otherCards.map((card, i) => {
            return <Card key={i} {...card} />;
          })}
        </motion.div>
      )}
    </section>
  );
}
