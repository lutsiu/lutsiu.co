import styles from "../../styles.module.scss";

import { useState } from "react";
import { WorkButtonFilter } from "../../../../interfaces/models";
import Buttons from "./Buttons";

export default function ShowcaseSection() {
  const [projectsFilter, setProjectsFilter] = useState<WorkButtonFilter>("all");

  return <section className={`${styles.padding} showcase-section`}>
    <Buttons projectsFilter={projectsFilter} setFilter={setProjectsFilter}/>
  </section>;
}
