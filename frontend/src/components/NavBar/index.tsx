import useGetScreenWidth from "../../hooks/useGetScreenWidth";
import ScheduleCallButton from "../Buttons/ScheduleCall";
import { CgMenu } from "react-icons/cg";
import Logo from "../Logo";
export default function NavBar() {
  const screenWidth = useGetScreenWidth();
  return (
    <header className="fixed w-screen z-20 text-white">
      <nav
        className="flex items-center py-[2rem]"
        style={{ background: "rgba(0,0,0,.5)" }}
      >
        <div className="flex justify-between  w-full h-[5rem] px-[2rem] sm:px-[8rem]">
          <Logo/>
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
