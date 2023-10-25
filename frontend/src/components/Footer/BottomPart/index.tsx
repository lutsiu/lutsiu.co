import Logo from "../../Logo";
import Links from "./Links";
import SocialLinks from "./SocialLinks";

export default function BottomPart() {
  return (
    <div className="padding py-[4rem] text-white flex gap-[2rem] md:gap-[5rem] lg:gap-[10rem] items-center flex-col md:flex-row">
      <div className="relative w-fit md:w-[23rem]  md:mx-0">
        <div className="absolute top-[-2.5rem] left-[-5rem] md:left-0">
          <Logo />
        </div>
      </div>
      <Links />
      <SocialLinks />
    </div>
  );
}
