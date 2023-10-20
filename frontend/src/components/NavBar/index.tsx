import useGetScreenWidth from "../../hooks/useGetScreenWidth";
import ScheduleCallButton from "../Buttons/ScheduleCall";
import { CgMenu } from "react-icons/cg";
export default function NavBar() {
  const screenWidth = useGetScreenWidth();
  return (
    <header className="fixed w-screen z-10">
      <nav
        className="flex items-center py-[2rem]"
        style={{ background: "rgba(0,0,0,.5)" }}
      >
        <div className="flex justify-between  w-full h-[5rem] px-[2rem] sm:px-[8rem]">
          <div className="relative h-full w-[13rem]">
            <h2
              className="absolute text-lg font-medium whitespace-nowrap"
              style={{ fontFamily: "DM Sans" }}
            >
              we are
            </h2>
            <h2
              className="absolute top-[1.2rem] font-bold tracking-normal text-5xl"
              style={{ fontFamily: "Venussb medext, sans-serif" }}
            >
              lutsiu.co
            </h2>
          </div>
          <div className="flex items-center flex-1 justify-end">
            {screenWidth >= 992 && (
              <p
                className=" font-medium text-2xl mr-[4rem]"
                style={{ fontFamily: "DM Sans" }}
              >
                Contact Us
              </p>
            )}
            {screenWidth >= 576 && (
              <div className="mr-[1.5rem]">
                <ScheduleCallButton />
              </div>
            )}
            <div>
              <CgMenu className="w-[3.3rem] h-[3.3rem]" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
