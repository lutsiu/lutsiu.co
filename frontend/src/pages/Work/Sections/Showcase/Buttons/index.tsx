import { buttonsData } from "../../../data";
import WorkButton from "../../../../../components/Buttons/WorkButton";
import { WorkButtonFilter } from "../../../../../interfaces/models";

interface Props {
  projectsFilter: WorkButtonFilter;
  setFilter: React.Dispatch<React.SetStateAction<WorkButtonFilter>>;
}
export default function Buttons(props: Props) {
  const { projectsFilter, setFilter } = props;

  return (
    <div className="py-[5rem] flex justify-between">
      {buttonsData.map((btn, i) => {
        const { filter } = btn;
        const isActive = filter === projectsFilter;
        return (
          <WorkButton
            key={i}
            content={filter}
            isActive={isActive}
            setFilter={setFilter}
          />
        );
      })}
    </div>
  );
}
