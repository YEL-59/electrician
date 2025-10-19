"use client";

import { useState, useEffect } from "react";
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
import Link from "next/link";

// API constants and helpers
const API_BASE = "https://verbalmdt.softvencefsd.xyz";
const API_URL = `/api/global-multimedia`; // use local proxy to avoid CORS
const STORAGE_BASE = `${API_BASE}/storage/`;

function normalizeUrls(arr) {
  return (arr || []).map((u) => String(u).replace(/[\`"']/g, "").trim());
}
function fullUrls(rawPaths) {
  return (rawPaths || []).map((p) => `${STORAGE_BASE}${String(p).replace(/[\`"']/g, "").trim()}`);
}

export default function Archive() {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch available years on mount
  useEffect(() => {
    async function fetchYears() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const items = data?.data?.data || [];
        const availableYears = Array.from(new Set(items.map((item) => item.year))).sort(
          (a, b) => parseInt(b) - parseInt(a)
        );
        setYears(availableYears);
        if (availableYears.length) setSelectedYear(availableYears[0]);
      } catch (error) {
        console.error("Failed to fetch years:", error);
        setYears([]);
      }
    }
    fetchYears();
  }, []);

  // Fetch media for selected year
  useEffect(() => {
    if (!selectedYear) return;
    async function fetchMedia() {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}?year=${selectedYear}`);
        const data = await res.json();
        const media = (data?.data?.data || [])[0] || {};

        const images = normalizeUrls(media.images);
        const imagesRaw = fullUrls(media.images_raw);
        const videosNormalized = normalizeUrls(media.videos);
        const videosRaw = fullUrls(media.videos_raw);

        setPhotos(images.length ? images : imagesRaw);
        setVideos(videosNormalized.length ? videosNormalized : videosRaw);
      } catch (error) {
        console.error("Failed to fetch media:", error);
        setPhotos([]);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    }
    fetchMedia();
  }, [selectedYear]);

  // Split photos into two rows for marquee
  const row1 = photos.slice(0, Math.ceil(photos.length / 2));
  const row2 = photos.slice(Math.ceil(photos.length / 2));

  return (
    <div className="w-full mx-auto py-16 bg-[#E6EDFF]">
      <div className="grid md:grid-cols-2 gap-6 mb-10 px-10 items-center">
        <div>
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

          {loading ? (
            <p className="text-center py-12 text-gray-600">Loading media...</p>
          ) : (
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
                    {[...row1, ...row1].map((url, idx) => (
                      <div
                        key={`row1-${idx}`}
                        className="flex-shrink-0 w-64 aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      >
                        <img
                          src={url}
                          alt={`Event photo ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Second Row - Right to Left */}
                <div className="marquee-container overflow-hidden relative">
                  <div className="marquee-right marquee-track">
                    {[...row2, ...row2].map((url, idx) => (
                      <div
                        key={`row2-${idx}`}
                        className="flex-shrink-0 w-64 aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      >
                        <img
                          src={url}
                          alt={`Event photo ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Link href={"/globalelectriciandaydetails"}>
                    <Button
                      variant="default"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                    >
                      Load More
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="videos" className="space-y-6">
                {videos.length ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {videos.map((video, idx) => (
                      <video
                        key={idx}
                        controls
                        className="w-full h-48 rounded-lg shadow-md"
                      >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-600">
                    <p>No videos available for {selectedYear}.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
