import WhiteButton from "../../../../components/Buttons/WhiteButton";
import Card from "./Card";
import cardsInfo from "./cards-info";
export default function ServicesSection() {
  return (
    <section className="section-services bg-white text-black padding py-[4rem] lg:py-[8rem]">
      <div className="flex flex-col md:flex-row md:justify-between  md:items-center xl:gap-[7rem]">
        <div className="xl:flex-[7] md:flex-[6]">
          <h3 className="text-gradient">OUR METHOD</h3>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-medium tracking-wide mt-[1rem]"
            style={{ fontFamily: "Montserrat" }}
          >
            SET TO SCALE
          </h2>
        </div>
        <p className="mt-[1.5rem] md:mt-[0] text-2xl xl:text-4xl xl:flex-[3] md:flex-[4]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore enim
          harum omnis vero earum ducimus atque aspernatur. Blanditiis dicta
          ipsum earum. Corporis, veniam ex eum minus earum quidem atque sit!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-[2.5rem] mt-[5rem]">
        {cardsInfo.map((card, i) => {
          const { img, descr, title } = card;
          return <Card key={i} img={img} descr={descr} title={title} />;
        })}
      </div>
      <div className="mx-auto mt-[4rem] md:mt-[7rem] w-fit">
        <WhiteButton content="See All Our Services"/>
      </div>
    </section>
  );
}
