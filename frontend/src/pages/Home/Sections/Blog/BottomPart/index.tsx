import cardsData from "../data/index";
import Card from "../Card";
import WhiteButton from "../../../../../components/Buttons/WhiteButton";
import { useRef } from "react";
import { motion } from "framer-motion";
import useShowAnimation from "../../../../../hooks/useShowAnimation";
export default function BottomPart() {
  const bottomPartRef = useRef<null | HTMLDivElement>(null);

  const conditionalCallback = () => {
    const { current } = bottomPartRef;
    if (!current) return false;
    const { top } = current.getBoundingClientRect();
    if (top < 300) {
      return true;
    }
  };

  const showAnimation = useShowAnimation(conditionalCallback);
  return (
    <div ref={bottomPartRef}>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: showAnimation ? 1 : 0, y: showAnimation ? 0 : 200 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row gap-[3.5rem] mt-[10rem]"
      >
        {cardsData.map((card, i) => {
          const { img, title, descr } = card;
          return <Card key={i} img={img} title={title} descr={descr} />;
        })}
      </motion.div>
      <div className="mt-[3rem]">
        <p
          className="text-xl sm:text-2xl lg:text-3xl text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          ipsam iure praesentium molestiae dicta! Quidem, libero eveniet nemo
          nulla enim deserunt iusto consequuntur error itaque incidunt ducimus
          architecto dolorem nesciunt. Curabitur mi lectus, maximus eget lacinia
          non, malesuada nec leo. Aliquam dui arcu, tincidunt non nisl laoreet,
          mauris lorem turpis, hendrerit id massa a, convallis rhoncus lacus.
          Quisque libero neque, sodales id turpis quis, scelerisque aliquet
          erat. cursus porttitor tortor!
        </p>
        <div className="w-fit mx-auto mt-[5rem]">
          <WhiteButton content="Dive into Our Ideas" />
        </div>
      </div>
    </div>
  );
}
