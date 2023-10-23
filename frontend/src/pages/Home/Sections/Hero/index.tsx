import useGetScreenWidth from "../../../../hooks/useGetScreenWidth";
import shapeFuture from "../../../../assets/hero/shape-future.png";
export default function HeroSection() {
  const screenWidth = useGetScreenWidth();
  return (
    <>
      {screenWidth >= 476 && (
        <section className="h-screen section-hero">
          <img
            src={shapeFuture}
            alt="shape-future"
            className="w-full  object-cover"
          />
        </section>
      )}
    </>
  );
}
