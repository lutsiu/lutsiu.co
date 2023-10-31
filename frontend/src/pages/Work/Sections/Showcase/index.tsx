import styles from "../../styles.module.scss";
import data from "../../data";
import { useState } from "react";
import { WorkButtonFilter } from "../../../../interfaces/models";
import Buttons from "./Buttons";
import GridCollection from "./GridCollection";

export default function ShowcaseSection() {
  const [projectsFilter, setProjectsFilter] = useState<WorkButtonFilter>("all");
  const firstDataChunk = data.slice(0, 10);
  const secondDataChunk = data.slice(10, 20);

  return (
    <section className={`${styles.padding} showcase-section`}>
      <Buttons projectsFilter={projectsFilter} setFilter={setProjectsFilter} />
      {projectsFilter === "all" && (
        <>
          <GridCollection
            data={firstDataChunk}
            showBigCard={true}
            typeToShow={projectsFilter}
          />
          <GridCollection
            data={secondDataChunk}
            showBigCard={true}
            typeToShow={projectsFilter}
          />
        </>
      )}
      {projectsFilter !== "all" && (
        <GridCollection
          data={data}
          showBigCard={false}
          typeToShow={projectsFilter}
        />
      )}
    </section>
  );
}
