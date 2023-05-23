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
import Spinner from "@/utils/Spinner";
import Contact from "@/components/pages/home/Contact/Contact";
import { AnimatePresence } from "framer-motion";

export default function Home() {


  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
  }, []);


  return (
    <>
      {
        loading
          ?
          <div className="flex justify-center items-center w-screen h-screen">
            <Spinner />
          </div>
          :
          <>
            <AnimatePresence mode="wait">
              <Navbar />
              <main className="md:px-16">
                <HeroSection />
                <AboutUs />
                <WhatWeDo />
                <OurServices />
                <LogoSlider />
                <BigImage />
                <Contact />
                <ContactAddress />
              </main>
              <Footer />
            </AnimatePresence>
          </>
      }
    </>
  )
}
