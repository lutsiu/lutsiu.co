import { GoArrowRight } from "react-icons/go";
import { ICard } from "../../../../../interfaces/models";
import { Link } from "react-router-dom";
export default function Card(props: ICard) {
  const { img, title, descr, link } = props;

  return (
    <Link
      to={`${link}`}
      target="_blank"
      className={`relative flex-1 h-[35rem] md:h-[50rem] flex flex-col z-10 overflow-hidden`}
    >
      <img src={img} alt="card-image" className="w-full flex-1 object-cover hover:scale-105 duration-200" />
      <div className=" flex flex-col gap-[1rem] text-black mt-[1.5rem]">
        <h4
          style={{ fontFamily: "Montserrat" }}
          className="text-3xl sm:text-4xl font-bold"
        >
          {title}
        </h4>
        <p
          style={{ fontFamily: "DM Sans" }}
          className="text-xl sm:text-2xl font-normal"
        >
          {descr}
        </p>
        <div className="flex items-center gap-[1rem]">
          <span className="text-xl sm:text-2xl">CHECK OUT</span>
          <GoArrowRight className="w-[2rem] h-[2rem]" />
        </div>
      </div>
    </Link>
  );
}
