import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function MainWrapper() {
  return (
    <div className="relative" >
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
}
