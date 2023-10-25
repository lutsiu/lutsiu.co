import {  useRef,  } from "react";
import WhiteButton from "../../../../components/Buttons/WhiteButton";
import useCount from "../../../../hooks/useCount";
import CultureItem from "./CultureItem";
import useShowAnimation from "../../../../hooks/useShowAnimation";

export interface ICounterItem {
  title: string;
  descr: string;
  counter: number;
  color: "violet" | "lightViolet" | "blue";
}

export default function Culture() {
  const sectionRef = useRef<null | HTMLTableSectionElement>(null);

  const conditionalCallback = () => {
    const {current} = sectionRef;
    if (!current) return false;
    const {top} = current.getBoundingClientRect();
    if (window.innerHeight - top > 75) return true
  };
  const startCount = useShowAnimation(conditionalCallback);
  const productsCounter = useCount(45, startCount);
  const teamCollaboratorsCounter = useCount(100, startCount);
  const monthsCounter = useCount(12, startCount);

  const info: ICounterItem[] = [
    {
      title: "Designed Products",
      descr:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      counter: productsCounter,
      color: "violet",
    },
    {
      title: "Team Collaborators",
      descr:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus",
      counter: teamCollaboratorsCounter,
      color: "lightViolet",
    },
    {
      title: "Years on the Industry",
      descr:
        "Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis",
      counter: monthsCounter,
      color: "blue",
    },
  ];
  return (
    <section
      className="bg-black mt-[28rem] padding items-center py-[7rem]"
      ref={sectionRef}
    >
      <div className="flex flex-col md:flex-row gap-[5rem]">
        {info.map((infoItem, i) => {
          const { title, descr, color, counter } = infoItem;
          return (
            <CultureItem
              key={i}
              color={color}
              descr={descr}
              title={title}
              counter={counter}
            />
          );
        })}
      </div>
      <div className="w-fit mx-auto mt-[5rem]">
        <WhiteButton content="Discover our Culture" black={true} />
      </div>
    </section>
  );
}
