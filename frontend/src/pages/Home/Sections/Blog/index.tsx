import TopPart from "./TopPart";
import BottomPart from "./BottomPart";
export default function Blog() {
  return (
    <>
      <section className="blog-section px-[3rem] sm:px-[7rem] lg:px-[10rem] 2xl:px-[15rem] py-[6rem]">
      <TopPart />
      <BottomPart />
    </section>
    <div className="bg-black h-[.1rem] mt-[6rem] lg:mt-[8rem]"></div>
    </>
  );
}
