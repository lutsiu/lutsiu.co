import useScrollToTheTop from "../../hooks/useScrollToTheTop";
import HeroSection from "./Sections/Hero";
import ServiceSection from "./Sections/Service";

export default function Services() {
  useScrollToTheTop();
  return (
    <div >
      <HeroSection/>
      <ServiceSection/>
    </div>
  )
}