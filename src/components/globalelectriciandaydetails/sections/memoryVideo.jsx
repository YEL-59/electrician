import { Card, CardContent } from "@/components/ui/card";

// ✅ Server-side fetch function
async function getMemoryVideo() {
  try {
    const res = await fetch(
      "https://verbalmdt.softvencefsd.xyz/api/electrician-day-videos",
      { cache: "no-store" } // always fetch fresh data
    );

    if (!res.ok) {
      throw new Error("Failed to fetch electrician videos");
    }

    const data = await res.json();
    console.log("✅ [Server Log] API Response:", data); // visible in terminal only
    return data;
  } catch (error) {
    console.error("❌ [Server Log] Fetch error:", error);
    return null;
  }
}

// ✅ Server Component
const MemoryVideo = async () => {
  const data = await getMemoryVideo();
  const videoUrl = data?.data?.[0]?.video;
  const title = data?.data?.[0]?.title ?? "Memory Video";
  const subtitle = data?.data?.[0]?.subtitle ?? "Watch the Journey";

  if (!videoUrl) {
    return (
      <div className="text-center py-20 text-gray-500">
        Failed to load video.
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col justify-center items-center py-5">
        <h1 className="text-3xl font-bold text-black py-2">{title}</h1>
        <p>{subtitle}</p>
      </div>

      {/* Video Card */}
      <Card className="w-full max-w-5xl mx-auto bg-gradient-to-br from-pink-50 to-amber-50 border border-amber-200 rounded-xl overflow-hidden shadow-lg">
        <CardContent className="p-0">
          <video
            className="w-full aspect-video object-cover"
            controls
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </CardContent>
      </Card>

      {/* Optional client-side log (so you can see it in browser console) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `console.log("✅ [Client Log] Video URL:", "${videoUrl}");`,
        }}
      />
    </div>
  );
};

export default MemoryVideo;
