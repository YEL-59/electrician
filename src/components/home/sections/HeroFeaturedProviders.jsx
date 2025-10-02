"use client";

import Image from "next/image";
import { Heart, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocationIcon from "../../../../public/svg/location";
import Clock from "../../../../public/svg/clock";
import Staricon from "../../../../public/svg/staricon";
import { useState } from "react";

const providers = [
  {
    name: "Falcon Electric",
    distance: "2 mile",
    minTime: "2 hour minimum",
    members: "25+",
    experience: "6 Years +",
    charge: "$50/hr",
    rating: 4.5,
    phone: "+1 33 0200200",
    image: "/assets/featurecard1.png",
    extraChargeLabel: "Charge",
  },
  {
    name: "Falcon Electric",
    distance: "2 mile",
    minTime: "2 hour minimum",
    members: "25+",
    experience: "6 Years +",
    charge: "$500",
    rating: 4.5,
    phone: "+1 33 0200200",
    image: "/assets/featurecard2.png",
    extraChargeLabel: "Trip Charge",
  },
  {
    name: "Falcon Electric",
    distance: "2 mile",
    minTime: "2 hour minimum",
    members: "25+",
    experience: "6 Years +",
    charge: "$400",
    rating: 4.5,
    phone: "+1 33 0200200",
    image: "/assets/featurecard3.png",
    extraChargeLabel: "Upfront cost",
  },
  {
    name: "Falcon Electric",
    distance: "2 mile",
    minTime: "2 hour minimum",
    members: "25+",
    experience: "6 Years +",
    charge: "$50/hr",
    rating: 4.5,
    phone: "+1 33 0200200",
    image: "/assets/featurecard1.png",
    extraChargeLabel: "Charge",
  },
  {
    name: "Falcon Electric",
    distance: "2 mile",
    minTime: "2 hour minimum",
    members: "25+",
    experience: "6 Years +",
    charge: "$500",
    rating: 4.5,
    phone: "+1 33 0200200",
    image: "/assets/featurecard2.png",
    extraChargeLabel: "Trip Charge",
  },
  {
    name: "Falcon Electric",
    distance: "2 mile",
    minTime: "2 hour minimum",
    members: "25+",
    experience: "6 Years +",
    charge: "$400",
    rating: 4.5,
    phone: "+1 33 0200200",
    image: "/assets/featurecard3.png",
    extraChargeLabel: "Upfront cost",
  },
  {
    name: "Falcon Electric",
    distance: "2 mile",
    minTime: "2 hour minimum",
    members: "25+",
    experience: "6 Years +",
    charge: "$400",
    rating: 4.5,
    phone: "+1 33 0200200",
    image: "/assets/featurecard3.png",
    extraChargeLabel: "Upfront cost",
  },
];

const FeaturedProviders = () => {
  const [viewmore, setViewmore] = useState(false);
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <span className="text-sm px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
          🌟 licensed service providers
        </span>
        <h2 className="text-2xl font-bold mt-2">Featured Providers</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {providers
          .slice(0, viewmore ? providers.length : 6)
          .map((provider, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden relative w-full mx-auto"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={provider.image}
                  alt={provider.name}
                  fill
                  className="object-cover"
                />
                <Button
                  variant="ghost"
                  className="absolute top-2 right-2 rounded-full p-1 bg-[#1B1B1B] hover:bg-white"
                >
                  <Heart className="w-5 h-5 text-white hover:text-black" />
                </Button>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-3xl font-semibold">{provider.name}</h3>

                <div className="flex justify-between items-center gap-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <LocationIcon />

                    <p className="text-[#7F7F7F] font-semibold text-base">
                      {provider.distance}
                    </p>
                  </span>
                  {/* <span>•</span> */}
                  <span className="flex items-center gap-1">
                    <Clock />
                    <p className="text-[#7F7F7F] font-semibold text-base">
                      {provider.minTime}
                    </p>
                  </span>
                  <span className="flex items-center gap-1">
                    <Staricon className="w-4 h-4 text-yellow-500" />
                    <p className="text-[#7F7F7F] font-semibold text-base">
                      {provider.rating}
                    </p>
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-600 py-4">
                  <div>
                    <span className="font-medium text-xl">Members</span>
                    <p className="text-base font-normal text-[#7F7F7F]">
                      {provider.members}
                    </p>
                  </div>
                  <div>
                    <span className="h-full border-l-2 border-gray-300 mx-2"></span>
                  </div>

                  <div>
                    <span className="font-medium text-xl">Experience</span>
                    <p className="text-base font-normal text-[#7F7F7F]">
                      {provider.experience}
                    </p>
                  </div>
                  <div>
                    <span className="h-full border-l-2 border-gray-300 mx-2"></span>
                  </div>

                  <div>
                    <span className="font-medium text-xl">
                      {provider.extraChargeLabel}
                    </span>
                    <p className="text-base font-normal text-[#7F7F7F]">
                      {provider.charge}
                    </p>
                  </div>
                </div>

                <div className="flex  items-center justify-center gap-5 mt-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm bg-[#F9FAFB] p-2 rounded-md">
                    <Phone className="w-4 h-4" />
                    <span>{provider.phone}</span>
                  </div>
                  <Button>View profile</Button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="text-center mt-8">
        <Button onClick={() => setViewmore(!viewmore)} variant="outline">
          {viewmore ? "View less" : "View all companies"}
        </Button>
      </div>
    </section>
  );
};
export default FeaturedProviders;
