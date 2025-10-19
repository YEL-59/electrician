import img from "../../../../public/assets/story.png";
import Image from "next/image";
// ✅ Fetch data server-side
async function getMatter() {
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
const Matter = async () => {
  const data = await getMatter();
  const matter = data?.data?.[0]?.matters;
  console.log(matter);

  if (!matter) {
    return (
      <div className="text-center py-20 text-gray-500">
        Failed to load matter data.
      </div>
    );
  }
  return (
    <div className=" bg-[#E6EDFF] py-12 px-4 sm:px-6 lg:px-8">
      <div className=" container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 ">
        {" "}
        {/* Image Section */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl  h-[400px] lg:h-[500px]">
            <div className="w-full h-full bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 flex items-center justify-center">
              <div className="text-center text-white p-8 ">
                <Image
                  src={matter?.image}
                  alt="Celebration Image"
                  layout="fill"
                  objectFit="cover  "
                  className="opacity-90 rounded-lg h-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Text Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              {matter?.name}
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{matter?.description}</p>
              {/* 
              <div className="my-6">
                <Badge
                  variant="outline"
                  className="text-sm py-2 px-4 bg-blue-50 border-blue-200"
                >
                  📄 Instrument #118833216, Pages 1-24
                </Badge>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matter;
