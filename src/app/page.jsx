import HeroCategorySection from "@/components/home/sections/HeroCategorySection";
import FeaturedProviders from "@/components/home/sections/HeroFeaturedProviders";
import HeroSection from "@/components/home/sections/HeroSection";
import HeroService from "@/components/home/sections/HeroService";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HeroCategorySection />
      <HeroService />
      <FeaturedProviders />
    </div>
  );
}
