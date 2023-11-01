import peopleData from "../../../data";
import Card from "./Card";
import { useRef } from "react";
import useShowAnimation from "../../../../../hooks/useShowAnimation";
import { motion } from "framer-motion";
interface Props {
  setActivePerson: React.Dispatch<React.SetStateAction<number>>;
}
export default function People(props: Props) {
  const { setActivePerson } = props;
  const peopleRef = useRef<null | HTMLDivElement>(null);
  const conditionCB = () => {
    const { current } = peopleRef;
    if (!current) return false;
    const { top } = current.getBoundingClientRect();

    if (top < 480) {
      return true;
    }
  };
  const showAnimation = useShowAnimation(conditionCB);
  return (
    <motion.div
      ref={peopleRef}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: showAnimation ? 1 : 0, y: showAnimation ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center flex-wrap sm:flex-nowrap gap-y-[5.5rem] sm:gap-y-0 gap-x-[1rem] md:gap-[2rem] mt-[5rem]"
    >
      {peopleData.map((person, i) => {
        const props = { ...person, idNumber: i };
        return <Card key={i} setActivePerson={setActivePerson} {...props} />;
      })}
    </motion.div>
  );
}
