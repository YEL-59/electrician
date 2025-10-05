"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const photosByYear = {
  2024: [
    {
      id: "1",
      url: "https://images.pexels.com/photos/5989930/pexels-photo-5989930.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Event photo 1",
    },
    {
      id: "2",
      url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Event photo 2",
    },
    {
      id: "3",
      url: "https://images.pexels.com/photos/7647038/pexels-photo-7647038.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Event photo 3",
    },
    {
      id: "4",
      url: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Event photo 4",
    },
    {
      id: "5",
      url: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Event photo 5",
    },
    {
      id: "6",
      url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Event photo 6",
    },
    {
      id: "7",
      url: "https://images.pexels.com/photos/5989924/pexels-photo-5989924.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Event photo 7",
    },
    {
      id: "8",
      url: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Event photo 8",
    },
  ],
  2023: [
    {
      id: "9",
      url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "2023 Event 1",
    },
    {
      id: "10",
      url: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "2023 Event 2",
    },
  ],
};

export default function Archive() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const years = Object.keys(photosByYear).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  return (
    <div className="w-full mx-auto py-16  bg-[#E6EDFF]">
      <div className="grid md:grid-cols-2 gap-6 mb-10 px-10 items-center">
        <div >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Archive</h2>
          <p className="text-gray-600">
            Browse past celebrations, highlights, sponsors, and resources for
            Global Electrician Day.
          </p>
        </div>
        <div className="flex justify-end">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-56 bg-white shadow-sm">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="bg-[#E6EDFF] border-none">
        <CardContent className="p-0">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Annual Global Electrician Day {selectedYear}!
          </h3>

          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
            </TabsList>

            <TabsContent value="photos" className="space-y-6">
              <style>{`
                @keyframes marquee-left {
                  from { transform: translateX(0); }
                  to { transform: translateX(calc(-100% - 1rem)); }
                }
                @keyframes marquee-right {
                  from { transform: translateX(calc(-100% - 1rem)); }
                  to { transform: translateX(0); }
                }
                .marquee-left { animation: marquee-left 30s linear infinite; }
                .marquee-right { animation: marquee-right 30s linear infinite; }
                .marquee-container:hover .marquee-left,
                .marquee-container:hover .marquee-right { animation-play-state: paused; }
                .marquee-track { display: flex; gap: 1rem; }
              `}</style>

              {/* First Row - Left to Right */}
              <div className="marquee-container overflow-hidden relative">
                <div className="marquee-left marquee-track">
                  {/* Original set */}
                  {photosByYear[selectedYear]?.slice(0, 4).map((photo, idx) => (
                    <div
                      key={`row1-orig-${idx}`}
                      className="flex-shrink-0 w-64 aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    >
                      <img
                        src={photo.url}
                        alt={photo.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {photosByYear[selectedYear]?.slice(0, 4).map((photo, idx) => (
                    <div
                      key={`row1-dup-${idx}`}
                      className="flex-shrink-0 w-64 aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    >
                      <img
                        src={photo.url}
                        alt={photo.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Row - Right to Left */}
              <div className="marquee-container overflow-hidden relative">
                <div className="marquee-right marquee-track">
                  {/* Original set */}
                  {photosByYear[selectedYear]?.slice(4, 8).map((photo, idx) => (
                    <div
                      key={`row2-orig-${idx}`}
                      className="flex-shrink-0 w-64 aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    >
                      <img
                        src={photo.url}
                        alt={photo.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {photosByYear[selectedYear]?.slice(4, 8).map((photo, idx) => (
                    <div
                      key={`row2-dup-${idx}`}
                      className="flex-shrink-0 w-64 aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    >
                      <img
                        src={photo.url}
                        alt={photo.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                >
                  Load More
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="videos" className="space-y-6">
              <div className="text-center py-12 text-gray-600">
                <p>Video content coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
