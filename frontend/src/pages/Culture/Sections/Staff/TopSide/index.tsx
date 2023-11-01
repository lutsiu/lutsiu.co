import styles from "../../../styles.module.scss";
export default function TopSide() {
  return (
    <div className="2xl:px-[8rem] md:px-[6rem] sm:px-[4rem] px-[2rem]">
      <h5 className={`${styles.gradient} text-3xl lg:text-4xl font-semibold`}>MANAGEMENT</h5>
      <h3
        className="text-6xl lg:text-8xl font-semibold mt-[1rem]"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Who We Are
      </h3>
      <p className="text-2xl lg:text-3xl max-w-full md:max-w-[90%] lg:max-w-[80%] leading-9 mt-[1rem]" style={{fontFamily:"DM Sans, sans-serif"}}>
        Donec consectetur, tellus sit amet tempor eleifend, leo ipsum convallis
        sem, vel mollis neque urna in erat. Ut porta, leo non fermentum auctor,
        ipsum enim sodales tortor, nec feugiat metus nibh condimentum nisl.
        Fusce lacus tortor, convallis vitae risus in, luctus venenatis orci. Vestibulum libero augue, mattis ac laoreet ultrices, pharetra eget nunc. Vestibulum venenatis augue diam, eget semper arcu faucibus non!
      </p>
    </div>
  );
}
