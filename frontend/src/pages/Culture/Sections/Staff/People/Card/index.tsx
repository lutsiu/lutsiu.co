import SkeletonElement from "../../../../../../components/Skeleton";
import useSrcIsLoading from "../../../../../../hooks/useSrcIsLoading";
import { IPerson } from "../../../../../../interfaces/models";

interface Props extends IPerson {
  idNumber: number;
  setActivePerson: React.Dispatch<React.SetStateAction<number>>;
}
export default function Card(props: Props) {
  const { img, role, fullName, idNumber, setActivePerson } = props;
  const {srcIsLoading, imageSrc} = useSrcIsLoading(img);
  function handleSetActivePerson() {
    setActivePerson(idNumber);
  }
  return (
    <div
      className="w-[12rem] sm:w-full sm:flex-1 h-[20rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] 2xl:h-[37rem] flex flex-col items-center cursor-pointer"
      onClick={handleSetActivePerson}
    >
      {srcIsLoading && <SkeletonElement className="min-h-[80%] max-h-[80%] w-full"/> }
      {!srcIsLoading && <img
        src={imageSrc}
        alt="person-img"
        className="object-cover min-h-[80%] max-h-[80%] w-full grayscale-[100%] hover:grayscale-0 duration-300"
        loading="lazy"
      />}
      <div className="mt-[1rem] lg:mt-[2rem]">
        <h5 className="text-2xl sm:text-3xl lg:text-4xl text-center w-[90%]">
          {fullName}
        </h5>
        <h6 className="mt-[.4rem] md:mt-[.7rem] lg:mt-[1.5rem] text-center text-xl lg:text-2xl text-gray-700">
          {role}
        </h6>
      </div>
    </div>
  );
}
