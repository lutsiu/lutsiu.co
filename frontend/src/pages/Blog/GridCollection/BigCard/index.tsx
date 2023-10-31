import { useEffect, useRef } from "react";
import { ICard } from "../../../../interfaces/models";
import { motion } from "framer-motion";
import useShowAnimation from "../../../../hooks/useShowAnimation";
export default function BigCard(props: ICard) {
  const { img, title, descr } = props;
  const bigCardRef = useRef<null | HTMLDivElement>(null);

  const conditionalCB = () => {
    const { current } = bigCardRef;
    if (!current) return false;
    const { top } = current.getBoundingClientRect();
    if (top < 550) {
      return true;
    }
  };

  const showAnimation = useShowAnimation(conditionalCB);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: showAnimation ? 1 : 0, y: showAnimation ? 0 : 100 }}
      transition={{duration: .5}}
      ref={bigCardRef}
    >
      <div className="relative h-[43rem] md:w-[70%] lg:w-[62rem] md:h-[46rem]">
        <img
          src={img}
          alt="card-picture"
          className="h-full w-full  object-cover"
        />
        <div className="absolute bg-black text-white w-[100%]  md:w-[30rem] lg:w-[40rem] bottom-0 md:bottom-auto  md:top-[10%] lg:top-[20%] right-0 md:right-[-20rem] p-[2rem]">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            {title}
          </h2>
          <p className=" text-xl sm:text-2xl lg:text-3xl mt-[2rem] font-medium">
            {descr}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
