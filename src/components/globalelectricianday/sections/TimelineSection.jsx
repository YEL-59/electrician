import { Check } from "lucide-react";

async function getTimeline() {
  try {
    const res = await fetch(
      "https://verbalmdt.softvencefsd.xyz/api/timelines",
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch timeline data");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching timeline data:", error);
    return null;
  }
}

// ✅ Server Component
const TimelineSection = async () => {
  const data = await getTimeline();
  const timelineData = data?.data?.[0];

  if (!timelineData) {
    return (
      <div className="text-center py-20 text-gray-500">
        Failed to load timeline data.
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      {/* Title & Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {timelineData.title}
        </h2>
        <p className="text-gray-600">{timelineData.subtitle}</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gray-200" />

        <div className="space-y-8">
          {timelineData.name.map((year, index) => (
            <div key={index} className="relative pl-8">
              {/* Timeline Circle */}
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gray-800" />

              {/* Year & Description */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{year}</h3>
                <div className="space-y-2">
                  {(timelineData.description[index] || []).map((desc, i) => (
                    <div key={i} className="flex gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
