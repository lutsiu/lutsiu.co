import HeroSection from "./Sections/Hero";
import ShowcaseSection from "./Sections/Showcase";
import useScrollToTheTop from "../../hooks/useScrollToTheTop";
export default function WorkPage() {
  useScrollToTheTop();
  return (
    <div>
      <HeroSection/>
      <ShowcaseSection/>
    </div>
  )
}