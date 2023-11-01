import TopSide from "./TopSide";
import styles from "../../styles.module.scss";
import People from "./People";
import { useState } from "react";
export default function StaffSection() {
  const [activePerson, setActivePerson] = useState(0);
  return (
    <section className={`${styles.padding} staff-section pt-[7.5rem]`}>
      <TopSide/>
      <People setActivePerson={setActivePerson}/>
    </section>
  );
}
