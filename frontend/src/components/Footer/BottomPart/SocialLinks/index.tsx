import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoLight } from "react-icons/pi";
import { BiLogoTelegram } from "react-icons/bi";
import { Link } from "react-router-dom";
import styles from "../../styles.module.scss";
export default function SocialLinks() {
  return (
    <div className="flex gap-[2.5rem] ">
      <Link
        to={`https://www.linkedin.com/in/sasha-lutsiuk-27862527`}
        target="_blank"
        className={`rounded-full bg-white p-[.8rem] md:p-[0.6rem] lg:p-[1rem] flex justify-center items-center border-[1px] border-white duration-200 hover:bg-black ${styles.socialLink}`}
      >
        <FaLinkedinIn className="w-[1.5rem] md:w-[1.2rem] md:h-[1.2rem] xl:w-[1.7rem] h-[1.5rem] xl:h-[1.7rem] text-black" />
      </Link>
      <Link
        to={`https://github.com/lutsiu`}
        target="_blank"
        className={`rounded-full bg-white p-[.8rem] md:p-[0.6rem] lg:p-[1rem] flex justify-center items-center border-[1px] border-white duration-200 hover:bg-black ${styles.socialLink}`}
      >
        <PiGithubLogoLight className="w-[1.5rem] md:w-[1.2rem] md:h-[1.2rem] xl:w-[1.7rem] h-[1.5rem] xl:h-[1.7rem] text-black" />
      </Link>
      <Link
        to={`https://t.me/lutsiu`}
        target="_blank"
        className={`rounded-full bg-white p-[.8rem] md:p-[0.6rem] lg:p-[1rem] flex justify-center items-center border-[1px] border-white duration-200 hover:bg-black ${styles.socialLink}`}
      >
        <BiLogoTelegram className="w-[1.5rem] md:w-[1.2rem] md:h-[1.2rem] xl:w-[1.7rem] h-[1.5rem] xl:h-[1.7rem] text-black" />
      </Link>
    </div>
  );
}
