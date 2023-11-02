import shapeFuture from "../../../../assets/home-page/hero/shape-future.png";
export default function HeroSection() {

  return (
    <>
      <section className="h-screen section-hero hidden sm:block">
        <img
          src={shapeFuture}
          alt="shape-future"
          className="w-full  object-cover"
        />
      </section>
    </>
  );
}
