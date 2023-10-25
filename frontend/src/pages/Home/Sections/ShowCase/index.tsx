import { useRef } from "react";
import design from "../../../../assets/home-page/showcase/design-2.jpg";
import GradientTape from "./GradientTape";
import styles from "./styles.module.scss";
import Cards from "./Cards";
export default function ShowCase() {
  const sectionRef = useRef<null | HTMLTableSectionElement>(null);
  
  return (
    <section
      className="showcase-section bg-white relative min-h-[150vh]"
      ref={sectionRef}
    >
      <GradientTape sectionRef={sectionRef} />
      <div className="relative">
        <div className={`${styles["photo-container"]} relative h-[50rem]`}>
          <img
            src={design}
            alt="design-image"
            className="w-full h-full object-cover"
          />
        </div>
        <Cards sectionRef={sectionRef} />
      </div>
      
    </section>
  );
}
