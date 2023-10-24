import styles from "../styles.module.scss";
export default function LeftPart() {
  return (
    <div className="md:flex-1 lg:w-[55%] xl:flex-1">
      <div className="relative pt-[3rem] text-left">
        <h5 className={`${styles.gradient} font-semibold text-3xl md:text-2xl absolute top-[1rem] md:top-[1.6rem]`}>
          WE LOVE WHAT WE DO
        </h5>
        <h3
          className="text-7xl 2xl:text-8xl font-medium "
          style={{ fontFamily: "Montserrat" }}
        >
          Let's Chat!
        </h3>
      </div>
      <p className="mt-[2rem] text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, est,
        libero rem vitae magni adipisci dicta eum recusandae voluptate magnam
        voluptatum eveniet nostrum aliquam? Aut totam rerum vitae consectetur
        ducimus
      </p>
      <div className="mt-[4rem] xl:mt-[6rem] flex flex-col gap-[.3rem]">
        <div className="flex gap-[.6rem] items-end">
          <p className="font-bold text-xl sm:text-2xl">Phone:</p>
          <p className="text-xl sm:text-2xl">501-247-687</p>
        </div>
        <div className="flex gap-[.6rem] items-end">
          <p className="font-bold text-xl sm:text-2xl">Email:</p>
          <a href="www" className={`${styles.gradient} text-xl sm:text-2xl`}>oleksandr.lutsiuk.1603@gmail.com</a>
        </div>
        <div className="flex gap-[.6rem] items-end">
          <p className="font-bold text-xl sm:text-2xl whitespace-nowrap">Business Hours:</p>
          <p className="text-xl sm:text-2xl whitespace-nowrap">Mon to Fri, 9 AM - 5 PM</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
