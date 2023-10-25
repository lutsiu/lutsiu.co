import TransparentButton from "../../../../../../components/Buttons/TransparentButton";
import colors from "../colors";
import styles from "../../../../styles.module.scss";
interface Props {
  img: string;
  imgTitle: string;
  imgDescr: string;
  color: "pink" | "purple" | "blue";
}
export default function BottomPart(props: Props) {
  const { img, imgDescr, imgTitle, color } = props;

  // you add padding of parent + 9rem for left for div with img title, descr and button
  /* px-[3rem] sm:px-[7rem] lg:px-[10rem] 2xl:px-[17rem] */
  return (
    <div className={` mt-[4rem] relative`}>
      <div
        style={{ backgroundColor: colors[color] }}
        className="w-full absolute h-[53rem] top-[5rem]"
      ></div>
      <div
        className={`${styles["service-padding"]} h-[60rem] relative flex  box-border`}
        
      >
        <img
          src={img}
          alt="article-img"
          className="w-full h-full object-cover grayscale "
        />
        <div className=" text-white absolute pl-[3rem] sm:pl-[5rem] lg:pl-[10rem] z-10 top-[28%] flex flex-col gap-[3rem]">
          <h3 className="text-6xl font-bold">{imgTitle}</h3>
          <p className="text-3xl w-[80%] xl:w-[50%]">{imgDescr}</p>
          <div className="w-fit ">
            <TransparentButton content="View More" />
          </div>
        </div>
      </div>
    </div>
  );
} /* ${styles['service-padding']} */
