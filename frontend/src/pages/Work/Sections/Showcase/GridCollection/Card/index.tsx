import SkeletonElement from "../../../../../../components/Skeleton";
import useSrcIsLoading from "../../../../../../hooks/useSrcIsLoading";
import {
  IWorkCard,
  WorkButtonFilter,
} from "../../../../../../interfaces/models";
import styles from "../styles.module.scss";
interface Props {
  card: IWorkCard;
  typeToShow: WorkButtonFilter;
}
export default function Card(props: Props) {
  const { card, typeToShow } = props;
  const { img, title, descr, subtitle, type } = card;
  const { imageSrc, srcIsLoading } = useSrcIsLoading(img);
  return (
    <>
      {(typeToShow === "all" || typeToShow === type) && (
        <div
          data-filter={type}
          className={`${styles["grid-collection-element"]}`}
        >
          {srcIsLoading && (
            <SkeletonElement className="w-full h-[20rem] sm:h-[18rem] md:h-[20rem] lg:h-[35rem]" />
          )}
          {!srcIsLoading && (
            <img
              src={imageSrc}
              alt="company"
              className="w-full h-[20rem] sm:h-[18rem] md:h-[20rem] lg:h-[35rem] object-cover"
              loading="lazy"
            />
          )}
          <div className="mt-[1rem]">
            <h3 className="text-5xl sm:text-3xl md:text-5xl font-bold sm:font-black md:font-medium">
              {title}
            </h3>
            <h5
              className="mt-[1rem] sm:mt-[.5rem] md:mt-[1rem] text-2xl sm:text-xl md:text-2xl font-medium "
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {subtitle}
            </h5>
            <p className="text-xl mt-[.5rem] md:block hidden">{descr}</p>
          </div>
        </div>
      )}
    </>
  );
}
