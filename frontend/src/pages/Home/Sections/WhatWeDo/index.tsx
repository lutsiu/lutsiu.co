import leftHand from "../../../../assets/hand-left.png";
import rightHand from "../../../../assets/hand-right.png";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import WhiteButton from "../../../../components/Buttons/WhiteButton";
export default function WhatWeDoSection() {
  return (
    <section className="min-h-screen section-hands bg-white  flex flex-col text-black">
      <div
        className={`${styles["what-we-do-container"]} mt-[5rem] text-center`}
      >
        <h3
          className={`${styles["what-we-do"]}  text-3xl md:text-4xl xl:text-5xl font-semibold`}
        >
          WHAT WE DO
        </h3>
        <div className="mt-[1.5rem]">
          <p className="font-semibold text-4xl md:text-5xl xl:text-7xl">
            We transform your aspirations
          </p>
          <p className="font-semibold text-4xl md:text-5xl xl:text-7xl mt-[1rem] md:mt-[1.5rem]">
            into exceptional projects
          </p>
        </div>
      </div>
      <div className="flex mt-[10rem]">
        <motion.img
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          src={leftHand}
          alt="hands"
          className="w-[51%] object-cover  "
        />
        <motion.img
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          src={rightHand}
          alt="hands"
          className="w-[49%] object-cover "
        />
      </div>
      <p
        className="mt-[7rem] text-center text-2xl lg:text-4xl font-normal mx-auto px-[5rem] xl:px-[30rem]"
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
    </section>
  );
}
