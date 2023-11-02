import { useRef } from "react";
import { IWorkCard, WorkButtonFilter } from "../../../../../interfaces/models";
import BigCard from "./BigCard";
import Card from "./Card";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import useShowAnimation from "../../../../../hooks/useShowAnimation";
interface Props {
  data: IWorkCard[];
  showBigCard: boolean;
  typeToShow: WorkButtonFilter;
}
export default function GridCollection(props: Props) {
  const { data, showBigCard, typeToShow } = props;
  const bigImg = data.at(0);
  const normalImgsCollection = data.slice(1, 10);

  const gridCollectionRef = useRef<null | HTMLDivElement>(null);

  const conditionalCB = () => {
    const { current } = gridCollectionRef;
    if (!current) return false;
    const { top, } = current.getBoundingClientRect();

    if (top < 500  ) {
      return true;
    }
  };

  const showAnimation = useShowAnimation(conditionalCB);
  return (
    <>
      {showBigCard && (
        <div>
          <div>{bigImg && <BigCard {...bigImg} />}</div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: showAnimation ? 1 : 0,
              y: showAnimation ? 0 : 100,
            }}
            transition={{duration: .5}}
            className={`${styles["grid-collection"]}`}
            ref={gridCollectionRef}
          >
            {normalImgsCollection &&
              normalImgsCollection.map((card, i) => {
                return <Card key={i} card={card} typeToShow={typeToShow} />;
              })}
          </motion.div>
        </div>
      )}

      {!showBigCard && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: showAnimation ? 1 : 0,
            y: showAnimation ? 0 : 100,
          }}
          transition={{duration: .5}}
          className={`${styles["grid-collection"]}`}
          ref={gridCollectionRef}
        >
          {data &&
            data.map((card, i) => {
              return <Card key={i} card={card} typeToShow={typeToShow} />;
            })}
        </motion.div>
      )}
    </>
  );
}
