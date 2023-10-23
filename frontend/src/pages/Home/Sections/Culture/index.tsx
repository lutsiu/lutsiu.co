import WhiteButton from "../../../../components/Buttons/WhiteButton";
import useCount from "../../../../hooks/useCount";
import CultureItem from "./CultureItem";

export interface ICounterItem {
  title: string;
  descr: string;
  counter: number;
  color: "violet" | "lightViolet" | "blue";
}

export default function Culture() {
  const productsCounter = useCount(45);
  const teamCollaboratorsCounter = useCount(100);
  const monthsCounter = useCount(12);

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
    <section className="bg-black mt-[28rem] px-[3rem] sm:px-[8rem] xl:px-[17rem] 2xl:px-[22rem] items-center py-[7rem]">
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
        <WhiteButton content="Discover our Culture" black={true}/>
      </div>
    </section>
  );
}
