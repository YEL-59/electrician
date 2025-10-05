import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import img from "../../../../public/assets/story.png";
import Image from "next/image";

const GlobalElectricianDayHero = () => {
  return (
    <div className=" bg-[#D7DDDD] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="p-0">
          {/* Header Section */}
          <div className="text-center py-16 px-6 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Global Electrician Day™
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Founded 2019 – The Original Celebration of the People Who Light
              the World
            </p>
          </div>

          {/* Content Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 ">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                  Our Story
                </h2>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Global Electrician Day™ was established in 2019 through a
                    collective effort of electricians, community leaders,
                    contractors, and local businesses who recognized the need to
                    honor the essential role electricians play in modern life.
                    On May 23, 2018, 66 community members and trades
                    professionals formally signed a declaration designating the
                    last Saturday in May as Global Electrician Day. The
                    declaration was officially recorded in the Broward County
                    Public Records under:
                  </p>

                  <div className="my-6">
                    <Badge
                      variant="outline"
                      className="text-sm py-2 px-4 bg-blue-50 border-blue-200"
                    >
                      📄 Instrument #118833216, Pages 1-24
                    </Badge>
                  </div>

                  <p>
                    This initiative was endorsed by respected civic leaders,
                    including former Broward County Mayor Dale Holness.
                  </p>

                  <p>
                    At the time of its founding, no other dedicated "Electrician
                    Day" observance appeared prominently in online search
                    results or public records. This declaration was the first
                    known organized effort to establish a formal day recognizing
                    electricians globally.
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

export default GlobalElectricianDayHero;
