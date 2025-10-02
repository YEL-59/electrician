"use client";

import Herobg from "@/components/home/sections/Herobg";
import BlogComponent from "@/components/home/sections/HeroBlog";
import HeroCategorySection from "@/components/home/sections/HeroCategorySection";
import HeroElectricianDay from "@/components/home/sections/HeroElectricianDay";
import FeaturedProviders from "@/components/home/sections/HeroFeaturedProviders";
import HeroSection from "@/components/home/sections/HeroSection";
import HeroService from "@/components/home/sections/HeroService";
import HeroTestimonialCarouselSection from "@/components/home/sections/HeroTestimonialCarouselSection";
import HowItWorks from "@/components/home/sections/HeroWorkSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HeroCategorySection />
      <HeroService />
      <FeaturedProviders />
      <HowItWorks />
      <HeroTestimonialCarouselSection />
      <Herobg />
      <HeroElectricianDay />
      <BlogComponent />
    </div>
  );
}
