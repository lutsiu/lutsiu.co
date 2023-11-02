import { useRef } from "react";
import design from "../../../../assets/home-page/showcase/design-2.jpg";
import GradientTape from "./GradientTape";
import styles from "./styles.module.scss";
import Cards from "./Cards";
import useSrcIsLoading from "../../../../hooks/useSrcIsLoading";
import SkeletonElement from "../../../../components/Skeleton";

export default function ShowCase() {
  const sectionRef = useRef<null | HTMLTableSectionElement>(null);
  const { srcIsLoading, imageSrc } = useSrcIsLoading(design);
  return (
    <section
      className="showcase-section bg-white relative min-h-[150vh]"
      ref={sectionRef}
    >
      <GradientTape sectionRef={sectionRef} />
      <div className="relative">
        <div className={`${styles["photo-container"]} relative h-[50rem]`}>
          {srcIsLoading && <SkeletonElement className="w-full h-full"/>}
          {!srcIsLoading && (
            <img
              src={imageSrc}
              alt="design-image"
              className="w-full h-full object-cover"
              
            />
          )}
        </div>
        <Cards sectionRef={sectionRef} />
      </div>
    </section>
  );
}
