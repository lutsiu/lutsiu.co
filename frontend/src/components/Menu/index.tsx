import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Logo from "../Logo";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
interface Props {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
}
export default function Menu(props: Props) {
  const { showMenu, setShowMenu } = props;
  function hideMenu() {
    setShowMenu(false);
  }
  return (
    <motion.div
      initial={{ opacity: 0, pointerEvents: "none" }}
      animate={{
        opacity: showMenu ? 1 : 0,
        pointerEvents: showMenu ? "auto" : "none",
      }}
      transition={{ duration: 0.5 }}
      className={`${styles.gradient} fixed top-0 left-0 bottom-0 right-0 z-[20] flex justify-between pt-[2.5rem] px-[1.5rem] sm:px-[7rem]`}
    >
      <div>
        <Logo />
      </div>
      <ul
        className="absolute left-[50%] flex flex-col pt-[10rem] gap-[3rem]  text-7xl"
        style={{ transform: "translateX(-50%)" }}
      >
        <li className="text-white cursor-pointer">
          <Link to={"/services"} onClick={hideMenu}>Services</Link>
        </li>
        <li className="text-white cursor-pointer">
          <Link to={"/work"} onClick={hideMenu}>Work</Link>
        </li>
        <li className="text-white cursor-pointer">
          <Link to={"/blog"} onClick={hideMenu}>Blog</Link>
        </li>
        <li className="text-white cursor-pointer">
          <Link to={"/culture"} onClick={hideMenu}>Culture</Link>
        </li>
      </ul>
      <div onClick={hideMenu}>
        <IoMdClose className="w-[4rem] h-[4rem] text-white" />
      </div>
    </motion.div>
  );
}
