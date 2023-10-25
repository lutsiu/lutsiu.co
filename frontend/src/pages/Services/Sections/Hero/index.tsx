import styles from "../../styles.module.scss";
export default function Hero() {
  return (
    <section className={`${styles['service-padding']} hero-section bg-black  pt-[18rem] pb-[6rem] lg:pb-[12rem]`}>
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
