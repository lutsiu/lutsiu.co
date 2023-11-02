import useScrollToTheTop from "../../hooks/useScrollToTheTop";
import DescriptionSection from "./Sections/DescriptionSection";
import HeroSection from "./Sections/Hero";

import StaffSection from "./Sections/Staff";


export default function CulturePage() {
  useScrollToTheTop();
  return (
    <div>
      <HeroSection/>
      <DescriptionSection/>
      <StaffSection/>
    </div>
  )
}