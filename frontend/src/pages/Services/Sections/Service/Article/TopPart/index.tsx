import styles from "../../../../styles.module.scss";
import { GoArrowRight } from "react-icons/go";
import colors from "../colors";
import { motion } from "framer-motion";
import { useState } from "react";
interface Props {
  firstTitle: string;
  secondTitle: string;
  descr: string;
  color: "pink" | "blue" | "purple";
}
export default function TopPart(props: Props) {
  const [learnMoreIsHovered, setLearnMoreIsHovered] = useState(false);
  const { firstTitle, secondTitle, descr, color } = props;
  const secondTitleArr = secondTitle.split(" ");

  function handleLearnMoreIsHovered(isHovered: boolean) {
    isHovered ? setLearnMoreIsHovered(true) : setLearnMoreIsHovered(false);
  }
  return (
    <div className={`${styles["service-padding"]} mt-[7rem]`}>
      <div>
        <h5 style={{ color: colors[color] }} className="text-3xl font-bold">
          {firstTitle}
        </h5>
        <h3 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mt-[1.5rem]">
          {secondTitleArr.at(0)}
          <br />
          {secondTitleArr.at(1)}
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-[2.5rem] md:gap-0 justify-between items-start md:items-end mt-[2.5rem]">
        <p className="flex-[6.5] text-2xl md:text-3xl">{descr}</p>
        <div
          className="flex-[3.5] flex  md:justify-end items-end gap-[.7rem] cursor-pointer"
          onMouseEnter={handleLearnMoreIsHovered.bind(null, true)}
          onMouseLeave={handleLearnMoreIsHovered.bind(null, false)}
        >
          <span className="text-3xl font-medium">Learn More</span>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: learnMoreIsHovered ? 10 : 0 }}
            transition={{duration: .3}}
          >
            <GoArrowRight className="w-[2.3rem] h-[2.3rem]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
