import React from "react";
import Image from "next/image";

// ✅ Server-side fetch function
async function getRemembeSection() {
  try {
    const res = await fetch(
      "https://verbalmdt.softvencefsd.xyz/api/electrician-day-banners",
      {
        cache: "no-store", // always fetch fresh data
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch electrician images");
    }

    const data = await res.json();
    console.log("✅ [Server Log] API Response:", data); // <-- appears in terminal
    return data;
  } catch (error) {
    console.error("❌ [Server Log] Fetch error:", error);
    return null;
  }
}

// ✅ Server Component
const RemembeSection = async () => {
  const data = await getRemembeSection();
  const banner = data?.data?.[0];
  const imageUrl = banner?.image;
  const title =
    banner?.title || "Global Electrician Day 2024 — A Celebration to Remember";
  const subtitle =
    banner?.subtitle || "Honoring the heroes who power our world.";

  if (!banner) {
    return (
      <div className="text-center py-20 text-gray-500">
        Failed to load hero image.
      </div>
    );
  }

  return (
    <div className="bg-[#D7DDDD] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="p-0">
          {/* Content Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                  {title}
                </h2>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>{subtitle}</p>

                  <p>
                    On the last Saturday of May 2024, electricians, engineers,
                    and communities came together across the globe to celebrate
                    Global Electrician Day. From inspiring keynote talks to
                    electrifying contests, GED 2024 was more than an event — it
                    was a movement recognizing those who keep our world running.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px] lg:min-h-[500px]">
                <div className="relative w-full h-full">
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 👇 Optional: Log to browser console for debugging */}
      <script
        dangerouslySetInnerHTML={{
          __html: `console.log("✅ [Client Log] Banner data:", ${JSON.stringify(
            banner
          )});`,
        }}
      />
    </div>
  );
};

export default RemembeSection;
