import { IPerson } from "../../../../../interfaces/models";

export default function PersonInfo(props: IPerson) {

  const {img, fullName, role, descr} = props;
  return (
    <article className="flex flex-col sm:flex-row  mt-[6rem] sm:mt-[12rem] gap-[2rem]">
      <div className="flex-[4] lg:flex-[3]">
        <img src={img }alt="person-image" className="w-full h-full object-cover" />
      </div>
      <div className="flex-[6] lg:flex-[7] lg:mt-[6rem] xl:mt-[10rem] sm:min-h-[30rem]">
        <h2 className="text-5xl lg:text-6xl 2xl:text-8xl font-bold">{fullName}</h2>
        <h3 className="text-3xl lg:text-4xl 2xl:text-6xl mt-[1rem] font-semibold">{role}</h3>
        <p className="text-2xl md:text-3xl 2xl:text-4xl mt-[1.5rem] md:mt-[3rem]">{descr}</p>
      </div>
    </article>
  )
}