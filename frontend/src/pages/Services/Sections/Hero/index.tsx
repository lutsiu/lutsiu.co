import styles from "./styles.module.scss";
export default function Hero() {
  return (
    <section className="hero-section bg-black px-[3rem] sm:px-[7rem] lg:px-[10rem] 2xl:px-[15rem] pt-[18rem] pb-[6rem] lg:pb-[12rem]">
      <h3 className={`${styles.gradient} text-3xl lg:text-4xl font-bold`}>
        END-TO-END SOLUTIONS
      </h3>
      <h1
        className="text-6xl md:text-7xl xl:text-9xl font-semibold text-white mt-[1rem]"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Our Services
      </h1>
    </section>
  );
}
