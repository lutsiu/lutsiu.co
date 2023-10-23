import { ICounterItem } from "..";

export default function CultureItem(props: ICounterItem) {
  const { color, title, descr, counter } = props;
  const colors = {
    violet: "rgb(136, 48, 219)",
    lightViolet: "rgb(143, 87, 246)",
    blue: "rgb(52, 148, 222)",
  };
  return (
    <div className="flex flex-col items-center flex-1 text-center">
      <h3
        style={{ color: colors[color], fontFamily: "Montserrat, sans-serif" }}
        className="text-8xl 2xl:text-9xl font-medium "
      >
        +{counter}
      </h3>
      <h5 style={{  fontFamily: "DM Sans" }} className="text-white text-4xl 2xl:text-5xl font-semibold mt-[1rem]">{title}</h5>
      <p className="text-gray-400 text-3xl md:text-2xl 2xl:text-3xl font-semibold mt-[1rem] opacity-70 text-center px-[10%]">{descr}</p>
    </div>
  );
}
