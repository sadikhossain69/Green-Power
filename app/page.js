"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutUs from "@/components/pages/home/AboutUs/AboutUs";
import BigImage from "@/components/pages/home/BigImage/BigImage";
import ContactAddress from "@/components/pages/home/ContactAddress/ContactAddress";
import HeroSection from "@/components/pages/home/HeroSection/HeroSection";
import LogoSlider from "@/components/pages/home/LogoSlider/LogoSlider";
import OurServices from "@/components/pages/home/OurServices/OurServices";
import WhatWeDo from "@/components/pages/home/WhatWeDo/WhatWeDo";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {


  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
  }, []);


  return (
    <main>
      {
        loading ? <Loading /> :
          <>
            <Navbar />
            <HeroSection />
            <AboutUs />
            <WhatWeDo />
            <OurServices />
            <LogoSlider />
            <BigImage />
            <ContactAddress />
            <Footer />
          </>
      }
    </main>
  )
}
