import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={'/'} className=" block relative h-full w-[13rem] text-white">
      <h2
        className="absolute text-lg font-medium whitespace-nowrap "
        style={{ fontFamily: "DM Sans" }}
      >
        we are
      </h2>
      <h2
        className="absolute top-[1.2rem] font-bold tracking-normal md:text-4xl text-5xl"
        style={{ fontFamily: "Venussb medext, sans-serif" }}
      >
        lutsiu.co
      </h2>
    </Link>
  );
}
