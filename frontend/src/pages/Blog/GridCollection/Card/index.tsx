import SkeletonElement from "../../../../components/Skeleton";
import useSrcIsLoading from "../../../../hooks/useSrcIsLoading";
import { ICard } from "../../../../interfaces/models";

export default function Card(props: ICard) {
  const { img, title, descr } = props;
  const {srcIsLoading, imageSrc} = useSrcIsLoading(img);
  return (
    <div >
      {srcIsLoading && <SkeletonElement className="h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[22rem] w-full"/>}
      {!srcIsLoading && <img
        src={imageSrc}
        alt="card-image"
        className="h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[22rem] w-full object-cover"
        loading="lazy"
      />}
      <div>
        <h3
          className="text-5xl sm:text-2xl md:text-3xl xl:text-4xl font-medium mt-[1.5rem]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-xl lg:text-2xl mt-[.5rem]">{descr}</p>
      </div>
    </div>
  );
}
