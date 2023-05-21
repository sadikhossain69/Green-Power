import AboutUs from "@/components/pages/home/AboutUs/AboutUs";
import BigImage from "@/components/pages/home/BigImage/BigImage";
import HeroSection from "@/components/pages/home/HeroSection/HeroSection";
import OurServices from "@/components/pages/home/OurServices/OurServices";
import WhatWeDo from "@/components/pages/home/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <WhatWeDo />
      <OurServices />
      <BigImage />
    </main>
  )
}
