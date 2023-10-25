import WhiteButton from "../../Buttons/WhiteButton";
import styles from "../styles.module.scss";
export default function TopPart() {
  return (
    <div className="py-[4rem] padding">
      <div
        className="text-white text-3xl sm:text-4xl flex flex-col gap-[.6rem]"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        <h3>We are ready to make</h3>
        <h3>your products happen,</h3>
        <h2
          className={`${styles.gradient} font-black text-5xl  md:text-6xl xl:text-8xl mt-[.5rem]`}
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          let's shape the future!
        </h2>
      </div>
      <div className="mt-[3rem]">
        <WhiteButton content="Get in touch" black={true} paddingSmall={true} />
      </div>
    </div>
  );
}
