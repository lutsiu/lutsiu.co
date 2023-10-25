
import HeroSection from "./Sections/Hero";
import WhatWeDoSection from "./Sections/WhatWeDo";
import ServicesSection from "./Sections/Services";
import ShowCaseSection from "./Sections/ShowCase";
import CultureSection from "./Sections/Culture";
import BlogSection from "./Sections/Blog";
import ContactUsSection from "./Sections/ContactUs";
export default function HomePage() {
  
  return (
    <div >
      <HeroSection/>
      <WhatWeDoSection/>
      <ServicesSection/>
      <ShowCaseSection/>
      <CultureSection/>
      <BlogSection/>
      <ContactUsSection/>
    </div>
  );
}
