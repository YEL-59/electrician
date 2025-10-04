"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Star from "../../../../public/svg/star";
import { Badge } from "@/components/ui/badge";

export default function ProfessionalFinder() {
    // Autoplay plugin ref
    const plugin = React.useRef(
        Autoplay({ delay: 2500, stopOnInteraction: false }) // 2.5s delay
    );

    return (
        <div className="bg-[#FFFBE6] relative z-10">
            <section className="container mx-auto px-4 py-10 grid lg:grid-cols-2 gap-8 items-center ">
                {/* Left Side */}
                <div className="space-y-6 ">

                    <div className="max-w-6xl ">
                        <Badge className="flex items-center text-start  bg-yellow-100 text-yellow-700 px-3 py-3 rounded-full text-sm font-medium">
                            <div className="flex justify-center items-center gap-3">
                                <div>
                                    <Star />
                                </div>
                                <div className="text-base font-semibold">
                                    50+ Company with 1Million+ Happy Customers
                                </div>

                            </div>

                        </Badge>
                    </div>

                    <h2 className="text-5xl font-bold text-[#404040] leading-snug">
                        Find Local Electricians & <br /> Other Licensed Professionals
                    </h2>
                    <p className="text-[#666] font-normal max-w-lg text-xl">
                        Skip the hassle. Instantly book the right electrician or licensed professional for your needs.
                    </p>

                    {/* Form */}
                    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col  gap-3 " >
                        <div className="flex flex-col md:flex-row gap-3 w-full">
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="listingType" className="text-[#404040] text-lg font-bold">Listing Type</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Electrical Contractor" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Light</SelectItem>
                                        <SelectItem value="dark">Dark</SelectItem>
                                        <SelectItem value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="location" className="text-[#404040] text-lg font-bold">Location</Label>
                                <Input
                                    id="location"
                                    type="text"
                                    placeholder="Location (e.g. Michigan, USA)"
                                    className="border rounded-md p-2 w-full"
                                />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="category" className="text-[#404040] text-lg font-bold">Category</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Theme" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Light</SelectItem>
                                        <SelectItem value="dark">Dark</SelectItem>
                                        <SelectItem value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>




                        </div>
                        <Button className="w-full md:w-auto bg-[#194A8C] ">Find a service provider</Button>
                    </div>


                </div>

                {/* Right Side - Auto Slider */}
                <div className="relative">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full max-w-md mx-auto"
                        opts={{ loop: true }} // enable looping
                    >
                        <CarouselContent>
                            {[
                                { title: "Electrician", img: "/assets/electrician.png", bg: "bg-yellow-100" },
                                { title: "Plumber", img: "/assets/plumber.png", bg: "bg-blue-100" },
                                { title: "Mason", img: "/assets/mason.png", bg: "bg-pink-100" },
                                { title: "Engineer", img: "/assets/engineer.png", bg: "bg-green-100" },
                                { title: "Architect", img: "/assets/architect.png", bg: "bg-orange-100" },
                            ].map((pro, i) => (
                                <CarouselItem key={i}>
                                    <Card className={`rounded-xl shadow-lg p-0 ${pro.bg}`}>
                                        <CardHeader>
                                            <CardTitle className="text-start px-4 py-2 text-5xl font-bold text-[#404040] text-black">{pro.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex justify-center p-0">
                                            <img src={pro.img} alt={pro.title} className="h-full object-contain" />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>
        </div>

    );
}
