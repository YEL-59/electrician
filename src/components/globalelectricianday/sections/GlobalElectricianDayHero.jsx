import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import img from "../../../../public/assets/story.png";

// ✅ Fetch data server-side
async function getGlobalElectrician() {
  try {
    const res = await fetch(
      "https://verbalmdt.softvencefsd.xyz/api/global-electrician-days/",
      {
        cache: "no-store", // uncomment for always fresh data (no cache)
        // next: { revalidate: 60 }, // revalidate every 60s
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch global electrician data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching global electrician data:", error);
    return null;
  }
}

// ✅ Server Component
const GlobalElectricianDayHero = async () => {
  const data = await getGlobalElectrician();

  if (!data) {
    return (
      <div className="text-center py-20 text-gray-500">
        Failed to load Global Electrician Day data.
      </div>
    );
  }

  return (
    <div className="bg-[#f5fbff] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center py-16 px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {data?.title || "Global Electrician Day"}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {data?.subtitle ||
              "Celebrating electricians and their contributions worldwide."}
          </p>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                {data?.data?.[0]?.story?.name}
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{data?.data?.[0]?.story?.description}</p>

                {/* 
                <div className="my-6">
                  <Badge
                    variant="outline"
                    className="text-sm py-2 px-4 bg-blue-50 border-blue-200"
                  >
                    📄 Instrument #118833216, Pages 1–24
                  </Badge>
                </div> */}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px] lg:min-h-[500px]">
              <div className="relative w-full h-full">
                <Image
                  src={data?.data?.[0]?.story?.image || img}
                  alt="Global Electrician Celebration"
                  fill
                  className="object-cover opacity-90 rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalElectricianDayHero;
