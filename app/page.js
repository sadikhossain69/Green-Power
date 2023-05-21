import AboutUs from "@/components/pages/home/AboutUs/AboutUs";
import BigImage from "@/components/pages/home/BigImage/BigImage";
import HeroSection from "@/components/pages/home/HeroSection/HeroSection";
import LogoSlider from "@/components/pages/home/LogoSlider/LogoSlider";
import OurServices from "@/components/pages/home/OurServices/OurServices";
import WhatWeDo from "@/components/pages/home/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <WhatWeDo />
      <OurServices />
      <LogoSlider />
      <BigImage />
    </main>
  )
}
