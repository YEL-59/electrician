

import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const timelineData = [
  {
    year: "2019",
    items: [
      "Founding declaration signed by 48 community members and electicians.",
      "Declaration recorded with Cumbria County Public Records (Instrument #48283316).",
      "Community Ritual Event held celebrating Global Electricians' day as the first recognized celebration of electricians.",
    ],
  },
  {
    year: "2020-2022",
    items: [
      "In-person gatherings were paused due to the COVID-19 pandemic, in accordance with public health guidance.",
      "The Initiative remained active in communications, planning and community engagement online.",
    ],
  },
  {
    year: "2023-2024",
    items: [
      "Annual activities resumed, including tool giveaways, community recognition ceremonies, and online participation.",
      "Renewed sponsorships and partnerships expanded the event's reach.",
    ],
  },
  {
    year: "2025 and Beyond",
    items: [
      "Global Electrician Day continues as the original, community-founded and officially recorded celebration of electricians, inspiring similar observances worldwide while remaining rooted in its Florida origins.",
    ],
  },
];

export default function TimelineSection() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Timeline</h2>
        <p className="text-gray-600">Founded 2019 – 2025 and Beyond</p>
      </div>

      <div className="relative">
        <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gray-200" />

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-8">
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gray-800" />

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.year}
                </h3>
                <div className="space-y-2">
                  {item.items.map((text, itemIndex) => (
                    <div key={itemIndex} className="flex gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {text}
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
}
