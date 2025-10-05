import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import img from "../../../../public/assets/story.png";
import Image from "next/image";

const RemembeSection = () => {
    return (
        <div className=" bg-[#D7DDDD] py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="p-0">


                    {/* Content Section */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 ">
                        {/* Text Content */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                                    Global Electrician Day 2024 — A Celebration to Remember
                                </h2>

                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Honoring the heroes who power our world. Relive the energy, the passion, and the unforgettable moments of GED 2024.On the last Saturday of May 2024, electricians, engineers, and communities came together across the globe to celebrate Global Electrician Day. From inspiring keynote talks to electrifying contests, GED 2024 was more than an event — it was a movement recognizing those who keep our world running.
                                    </p>



                                    <p>
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </p>


                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px] lg:min-h-[500px]">
                                <div className="w-full h-full bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 flex items-center justify-center">
                                    <div className="text-center text-white p-8 ">
                                        <Image
                                            src={img}
                                            alt="Celebration Image"
                                            layout="fill"
                                            objectFit="cover  "
                                            className="opacity-90 rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemembeSection;
