"use client";

import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import Star from "../../../../public/svg/star";

const services = [
  {
    title: "Electrical Contractor",
    description:
      "Powering homes, businesses, and industries with safe, reliable electrical solutions.",
    img: "/assets/service1.png",
  },
  {
    title: "Plumbing Contractor",
    description:
      "From leaks to full installations — expert plumbing services you can trust.",
    img: "/assets/service2.png",
  },
  {
    title: "Roofing Contractor",
    description:
      "Durable, weatherproof roofing built to protect what matters most.",
    img: "/assets/service3.png",
  },
  {
    title: "Electrical Contractor",
    description:
      "Powering homes, businesses, and industries with safe, reliable electrical solutions.",
    img: "/assets/service4.jpg",
  },
  {
    title: "Plumbing Contractor",
    description:
      "From leaks to full installations — expert plumbing services you can trust.",
    img: "/assets/service1.png",
  },
  {
    title: "Roofing Contractor",
    description:
      "Durable, weatherproof roofing built to protect what matters most.",
    img: "/assets/service3.png",
  },
];

const HeroService = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }) // 3s delay, pauses on hover/interaction
  );

  return (
    <section className="bg-[#0B2B60] py-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="max-w-6xl  mx-auto flex justify-center">
            <Badge className="flex items-center text-start  bg-white text-yellow-700 px-3 py-3 rounded-full text-sm font-medium">
              <div className="flex justify-center items-center gap-3">
                <div>
                  <Star />
                </div>
                <div className="text-base font-semibold">
                  licensed service providers
                </div>
              </div>
            </Badge>
          </div>
          <h2 className="text-5xl font-bold text-white mt-4">Our services</h2>
        </div>

        {/* Carousel */}
        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true, // 🔥 makes it seamless looping, no flicker
          }}
          className="w-full max-w-container mx-auto"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 px-2"
              >
                <div className="bg-transparent  overflow-hidden shadow-md flex flex-col h-full">
                  <div className="w-[556px] h-[371px]">
                    <AspectRatio
                      ratio={556 / 371}
                      className="bg-muted  overflow-hidden"
                    >
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        className="object-cover dark:brightness-[0.2] dark:grayscale"
                      />
                    </AspectRatio>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-2xl text-[#fff]">
                      {service.title}
                    </h3>
                    <p className="font-normal text-xl text-[#fff] mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroService;
