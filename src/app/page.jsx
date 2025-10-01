import HeroCategorySection from "@/components/home/sections/HeroCategorySection";
import HeroSection from "@/components/home/sections/HeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HeroCategorySection />
    </div>
  );
}
