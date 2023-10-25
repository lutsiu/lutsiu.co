import leftHand from "../../../../assets/home-page/what-we-do/hand-left.png";
import rightHand from "../../../../assets/home-page/what-we-do/hand-right.png";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import WhiteButton from "../../../../components/Buttons/WhiteButton";
import { useRef } from "react";
import useShowAnimation from "../../../../hooks/useShowAnimation";
export default function WhatWeDoSection() {
  const sectionRef = useRef<null | HTMLTableSectionElement>(null);
  const conditionalCallback = () => {
    const {current} = sectionRef;
      if (!current) return false;
      const rect = current.getBoundingClientRect();
      if (window.innerHeight / 2 > rect.top) {
        return true
      }
  };
  const showAnimation = useShowAnimation(conditionalCallback);
  return (
    <section
      className="section-hands bg-white  flex flex-col text-black"
      ref={sectionRef}
    >
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: showAnimation ? 0 : 150, opacity: showAnimation ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`${styles["what-we-do-container"]} mt-[5rem] text-center`}
      >
        <h3 className="text-gradient">WHAT WE DO</h3>
        <div className="mt-[1.5rem]">
          <p className="font-semibold text-4xl md:text-5xl xl:text-7xl">
            We transform your aspirations
          </p>
          <p className="font-semibold text-4xl md:text-5xl xl:text-7xl mt-[1rem] md:mt-[1.5rem]">
            into exceptional projects
          </p>
        </div>
      </motion.div>
      <div className="flex mt-[10rem]">
        <motion.img
          initial={{ x: -100 }}
          animate={{ x: showAnimation ? 0 : -100 }}
          transition={{ duration: 0.5 }}
          src={leftHand}
          alt="hands"
          className="w-[49%] object-cover  "
        />
        <motion.img
          initial={{ x: 100 }}
          animate={{ x: showAnimation ? 0 : 100 }}
          transition={{ duration: 0.5 }}
          src={rightHand}
          alt="hands"
          className="w-[51%] object-cover "
        />
      </div>
      <p
        className="padding mt-[7rem] text-left text-2xl lg:text-4xl font-normal mx-auto "
        style={{ fontFamily: "Montserrat" }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
        reiciendis odio expedita suscipit cumque ratione. Dolorum totam eos
        rerum non! Possimus quibusdam fugit dicta omnis sint impedit hic ipsum
        nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Debitis, reiciendis odio expedita suscipit cumque ratione. Dolorum totam
        eos rerum non! Possimus quibusdam fugit dicta omnis sint impedit hic
        ipsum nulla. <b>We are Lutsiu.Co</b>
      </p>
      <div className="mt-[5.5rem] flex items-center justify-center">
        <WhiteButton content="About Lutsiu.Co" />
      </div>
      <div className="mt-[6rem] h-[.1rem] bg-black"></div>
    </section>
  );
}
