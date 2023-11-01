import TopSide from "./TopSide";
import styles from "../../styles.module.scss";
import People from "./People";
import { useState } from "react";
import PersonInfo from "./PersonInfo";
import data from '../../data'

export default function StaffSection() {
  const [activePerson, setActivePerson] = useState(0);
  const activePersonData = data.at(activePerson);
  return (
    <section className={`${styles.padding} staff-section pt-[7.5rem]`}>
      <TopSide />
      <People setActivePerson={setActivePerson} />
      {activePersonData && <PersonInfo {...activePersonData} />}
      <div className="flex flex-col items-end mt-[2rem] sm:mt-[5rem]">
        <div className="h-[.1rem] bg-red-600 w-full"></div>
        <p className="border-b-[.1rem] border-black text-2xl mt-[2rem] font-medium">{activePersonData?.email}</p>
      </div>
    </section>
  );
}
