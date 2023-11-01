import peopleData from "../../../data";
import Card from "./Card";
interface Props {
  setActivePerson: React.Dispatch<React.SetStateAction<number>>;
}
export default function People(props: Props) {
  const { setActivePerson } = props;

  return (
    <div className="flex justify-center flex-wrap sm:flex-nowrap gap-y-[5.5rem] sm:gap-y-0 gap-x-[1rem] md:gap-[2rem] mt-[5rem]">
      {peopleData.map((person, i) => {
        const props = { ...person, idNumber: i };
        return <Card key={i} setActivePerson={setActivePerson} {...props} />;
      })}
    </div>
  );
}
