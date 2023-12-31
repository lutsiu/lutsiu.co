import Card from "../Card";
import cardsInfo from "../data/cards-info";
import WhiteButton from "../../../../../components/Buttons/WhiteButton";
import { motion } from "framer-motion";
import useShowAnimation from "../../../../../hooks/useShowAnimation";
interface Props {
  sectionRef: React.MutableRefObject<HTMLTableSectionElement | null>;
}
export default function Cards(props: Props) {
  const { sectionRef } = props;

  const conditionalCallback = () => {
    const { current } = sectionRef;
    if (!current) return false;
    const rect = current.getBoundingClientRect();
    if (rect.top < 100) return true;
  };

  const showAnimation = useShowAnimation(conditionalCallback);

  return (
    <div className="flex flex-col  mt-[5rem] padding lg:absolute top-[35rem]">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: showAnimation ? 1 : 0, y: showAnimation ? 0 : 200 }}
        transition={{ duration: 0.6 }}
        className="gap-[2.5rem] flex lg:flex-row flex-col z-10"
      >
        {cardsInfo.map((card, i) => {
          const { img, link, title, descr } = card;
          return (
            <Card key={i} img={img} link={link} title={title} descr={descr} />
          );
        })}
      </motion.div>
      <div className="text-black">
        <p
          className="mt-[3.5rem] sm:mt-[4.5rem] lg:mt-[7rem] text-left text-2xl lg:text-4xl font-normal mx-auto "
          style={{ fontFamily: "Montserrat" }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
          iure labore magni id temporibus molestiae quasi sint perferendis rerum
          molestias quas maiores earum consequatur quis ipsam odit vero dicta
          saepe.
        </p>
        <div className="w-fit mx-auto mt-[4rem] md:mt-[7rem] ">
          <WhiteButton content="Check Out Our Work" />
        </div>
      </div>
    </div>
  );
}
