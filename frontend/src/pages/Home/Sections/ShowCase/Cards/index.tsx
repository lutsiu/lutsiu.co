import Card from "../Card";
import cardsInfo from "../data/cards-info";
import WhiteButton from "../../../../../components/Buttons/WhiteButton";
export default function Cards() {
  return (
    <div className="flex flex-col  mt-[5rem] px-[3rem] sm:px-[8rem] xl:px-[17rem] 2xl:px-[20rem] lg:absolute top-[35rem]">
      <div className="gap-[2.5rem] flex lg:flex-row flex-col">
        {cardsInfo.map((card, i) => {
          const { img, link, title, descr } = card;
          return (
            <Card key={i} img={img} link={link} title={title} descr={descr} />
          );
        })}
      </div>
      <div className="text-black">
        <p
          className="mt-[3.5rem] sm:mt-[4.5rem] lg:mt-[7rem] text-left text-2xl lg:text-4xl font-normal mx-auto "
          style={{ fontFamily: "Montserrat" }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
          iure labore magni id temporibus molestiae quasi sint perferendis rerum
          molestias quas maiores earum consequatur quis ipsam odit vero dicta
          saepe.
        </p>
        <div className="w-fit mx-auto mt-[4rem] md:mt-[7rem]">
        <WhiteButton content="Check Out Our Work" />
        </div>
      </div>
    </div>
  );
}
