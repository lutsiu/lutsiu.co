import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

export default function MainWrapper() {
  return (
    <div className="relative" >
      <NavBar />
      <Outlet />
    </div>
  );
}
