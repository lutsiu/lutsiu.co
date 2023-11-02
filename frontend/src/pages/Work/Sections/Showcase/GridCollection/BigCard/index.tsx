import { useRef } from "react";
import { IWorkCard } from "../../../../../../interfaces/models";
import { motion } from "framer-motion";
import useShowAnimation from "../../../../../../hooks/useShowAnimation";
import useSrcIsLoading from "../../../../../../hooks/useSrcIsLoading";
import SkeletonElement from "../../../../../../components/Skeleton";

export default function BigCard(props: IWorkCard) {
  const { img, title, type, subtitle, descr } = props;
  const bigCardRef = useRef<null | HTMLDivElement>(null);
  const { srcIsLoading, imageSrc } = useSrcIsLoading(img);
  const conditionalCB = () => {
    const { current } = bigCardRef;
    if (!current) return false;
    const { top } = current.getBoundingClientRect();

    if (top < 460 && top > -280) {
      return true;
    }
  };

  const showAnimation = useShowAnimation(conditionalCB);
  return (
    <motion.div
      data-filter={type}
      ref={bigCardRef}
      className={`mt-[3rem] mb-[4rem] sm:mb-[3rem] sm:mt-[0] lg:mb-[6rem] relative h-[40rem]`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: showAnimation ? 1 : 0, y: showAnimation ? 0 : 100 }}
      transition={{ duration: 0.5 }}
    >
      {srcIsLoading && <SkeletonElement className="w-full h-full" />}
      {!srcIsLoading && (
        <img
          src={imageSrc}
          alt="company"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
      <div className="mt-[1rem] absolute bottom-[2rem] md:bottom-[4rem] left-[2rem] md:left-[4rem] text-white">
        <h3 className="text-5xl md:text-7xl font-bold">{title}</h3>
        <h4
          className="text-2xl md:text-4xl mt-[.4rem] font-medium"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {subtitle}
        </h4>
        <p className="text-xl md:text-2xl mt-[1rem] max-w-[75%] md:max-w-[70%]">
          {descr}
        </p>
      </div>
    </motion.div>
  );
}
