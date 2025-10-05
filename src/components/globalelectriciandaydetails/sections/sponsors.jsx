"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const sponsors = [
    { src: "/assets/sponsors/ramp.png", alt: "Ramp" },
    { src: "/assets/sponsors/hex.png", alt: "HEX" },
    { src: "/assets/sponsors/vercel.png", alt: "Vercel" },
    { src: "/assets/sponsors/descript.png", alt: "Descript" },
    { src: "/assets/sponsors/cashapp.png", alt: "Cash App" },
    { src: "/assets/sponsors/supercell.png", alt: "Supercell" },
];

const Sponsors = () => {
    const plugin = useRef(
        Autoplay({ delay: 2500, stopOnInteraction: false })
    );

    return (
        <section className="bg-[#E6EDFF] py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                    Sponsors & Partners
                </h2>
                <p className="text-gray-600 mb-8">
                    Thank you to our 2024 Partners. Your support powered the success of
                    Global Electrician Day 2024.
                </p>

                {/* Carousel Section */}
                <Carousel
                    plugins={[plugin.current]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-5xl mx-auto"
                >
                    <CarouselContent className="flex items-center">
                        {sponsors.map((sponsor, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-1/3 md:basis-1/6 flex justify-center"
                            >
                                <div className="flex items-center justify-center p-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
                                    <Image
                                        src={sponsor.src}
                                        alt={sponsor.alt}
                                        width={120}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default Sponsors;
