import Image from "next/image";
import { Heart, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    image: "/assets/building1.jpg",
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
    image: "/assets/building2.jpg",
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
    image: "/assets/building3.jpg",
    extraChargeLabel: "Upfront cost",
  },
];

const FeaturedProviders = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <span className="text-sm px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
          🌟 licensed service providers
        </span>
        <h2 className="text-2xl font-bold mt-2">Featured Providers</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {providers.map((provider, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden relative"
          >
            <div className="relative h-56 w-full">
              <Image
                src={provider.image}
                alt={provider.name}
                fill
                className="object-cover"
              />
              <Button
                variant="ghost"
                className="absolute top-2 right-2 rounded-full p-1"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{provider.name}</h3>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{provider.distance}</span>
                <span>•</span>
                <span>{provider.minTime}</span>
              </div>

              <div className="grid grid-cols-3 text-xs text-gray-600 mt-2">
                <div>
                  <span className="font-medium">Members</span>
                  <p>{provider.members}</p>
                </div>
                <div>
                  <span className="font-medium">Experience</span>
                  <p>{provider.experience}</p>
                </div>
                <div>
                  <span className="font-medium">
                    {provider.extraChargeLabel}
                  </span>
                  <p>{provider.charge}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
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
        <Button variant="outline">View all companies</Button>
      </div>
    </section>
  );
};
export default FeaturedProviders;
