import useScrollToTheTop from "../../hooks/useScrollToTheTop";
import GridCollection from "./GridCollection";
import HeroSection from "./Hero";

export default function BlogPage() {
  useScrollToTheTop();
  return (
    <div>
      <HeroSection/>
      <GridCollection/>
    </div>
  )
}