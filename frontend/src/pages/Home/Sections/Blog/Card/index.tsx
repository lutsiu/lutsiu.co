import SkeletonElement from "../../../../../components/Skeleton";
import useSrcIsLoading from "../../../../../hooks/useSrcIsLoading";
import { ICard } from "../../../../../interfaces/models";
import { GoArrowRight } from "react-icons/go";
export default function Card(props: ICard) {
  const { img, title, descr } = props;
  const {srcIsLoading, imageSrc} = useSrcIsLoading(img);
  return (
    <div className="flex flex-col gap-[1rem] cursor-pointer overflow-hidden">
      <div className="h-[22rem] overflow-hidden">
        {srcIsLoading && <SkeletonElement className="w-full h-full"/>}
        {!srcIsLoading && <img
          src={imageSrc}
          alt="card-image"
          className="w-full h-full duration-200 hover:scale-105 object-cover"
          
        />}
      </div>
      <div className="flex flex-col gap-[1rem] pr-[2rem]">
        <h4
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="text-3xl lg:text-4xl font-bold"
        >
          {title}
        </h4>
        <p style={{ fontFamily: "DM Sans" }} className="text-xl lg:text-2xl font-light">
          {descr}
        </p>
        <div className="flex items-center gap-[.5rem]">
          <p className="text-lg lg:text-xl">READ MORE</p>
          <GoArrowRight className="w-[2.4rem] h-[2.4rem]" />
        </div>
      </div>
    </div>
  );
}
