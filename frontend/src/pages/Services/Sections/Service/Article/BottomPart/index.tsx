import TransparentButton from "../../../../../../components/Buttons/TransparentButton";
import colors from "../colors";
import styles from "../../../../styles.module.scss";
import { useRef } from "react";
import useShowAnimation from "../../../../../../hooks/useShowAnimation";
import { motion } from "framer-motion";
import useSrcIsLoading from "../../../../../../hooks/useSrcIsLoading";
import SkeletonElement from "../../../../../../components/Skeleton";
interface Props {
  img: string;
  imgTitle: string;
  imgDescr: string;
  color: "pink" | "purple" | "blue";
}
export default function BottomPart(props: Props) {
  const { img, imgDescr, imgTitle, color } = props;
  const parentRef = useRef<null | HTMLDivElement>(null);
  const descrRef = useRef<null | HTMLDivElement>(null);
  const { srcIsLoading, imageSrc } = useSrcIsLoading(img);
  const parentConditionalCB = () => {
    const { current } = parentRef;
    if (!current) return false;
    const { top, bottom } = current.getBoundingClientRect();
    if (top < 650 && bottom > -30) {
      return true;
    }
  };
  const descrConditionalCB = () => {
    const { current } = parentRef;
    if (!current) return false;
    const { top, bottom } = current.getBoundingClientRect();
    if (top < 250 && bottom > -30) {
      return true;
    }
  };
  const showParentAnimation = useShowAnimation(parentConditionalCB);
  const showDescrAnimation = useShowAnimation(descrConditionalCB);
  // you add padding of parent + 9rem for left for div with img title, descr and button
  /* px-[3rem] sm:px-[7rem] lg:px-[10rem] 2xl:px-[17rem] */

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: showParentAnimation ? 1 : 0,
        y: showParentAnimation ? 0 : 100,
      }}
      transition={{ duration: 0.5 }}
      className={` mt-[4rem] relative`}
      ref={parentRef}
    >
      <div
        style={{ backgroundColor: colors[color] }}
        className="w-full absolute h-[53rem] top-[5rem]"
      ></div>
      <div
        className={`${styles["service-padding"]} h-[60rem] relative flex  box-border`}
      >
        {srcIsLoading && <SkeletonElement className="w-full h-full" />}
        {!srcIsLoading && (
          <img
            src={imageSrc}
            alt="article-img"
            className="w-full h-full object-cover grayscale "
            
          />
        )}
        <motion.div
          className=" text-white absolute pl-[3rem] sm:pl-[5rem] lg:pl-[10rem] z-10 top-[28%] flex flex-col gap-[3rem]"
          ref={descrRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: showDescrAnimation ? 1 : 0,
            y: showDescrAnimation ? 0 : 100,
          }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-6xl font-bold">{imgTitle}</h3>
          <p className="text-3xl w-[80%] xl:w-[50%]">{imgDescr}</p>
          <div className="w-fit ">
            <TransparentButton content="View More" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
