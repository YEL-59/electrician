import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star, Heart } from "lucide-react";
import { useFavorites } from "@/components/providers/FavoritesProvider";

const ProviderCard = ({ provider }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  // Create a slug from the provider name and id
  const slug = `${provider.name.toLowerCase().replace(/\s+/g, '-')}-${provider.id}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative w-full hover:shadow-lg transition-shadow">
      <div className="relative h-72 w-full">
        <img
          src={provider.image}
          alt={provider.name}
          className="w-full h-full object-cover"
        />
        <Button
          onClick={() => toggleFavorite(provider.id)}
          variant="ghost"
          className="absolute top-2 right-2 rounded-full p-1 bg-[#1B1B1B] hover:bg-white"
          aria-label={isFavorite(provider.id) ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={`w-5 h-5 ${isFavorite(provider.id) ? 'text-red-500' : 'text-white'} hover:text-black`} />
        </Button>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-3xl font-semibold">{provider.name}</h3>

        <div className="flex justify-between items-center gap-2 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <p className="text-[#7F7F7F] font-semibold text-base">
              {provider.distance}
            </p>
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 6V12L16 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-[#7F7F7F] font-semibold text-base">
              {provider.minTime}
            </p>
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <p className="text-[#7F7F7F] font-semibold text-base">
              {provider.rating}
            </p>
          </span>
        </div>

        <div className="flex justify-between items-center text-xs text-gray-600 py-4">
          <div>
            <span className="font-medium text-xl">Members</span>
            <p className="text-base font-normal text-[#7F7F7F]">
              {provider.members}
            </p>
          </div>
          <div>
            <span className="h-full border-l-2 border-gray-300 mx-2"></span>
          </div>
          <div>
            <span className="font-medium text-xl">Experience</span>
            <p className="text-base font-normal text-[#7F7F7F]">
              {provider.experience}
            </p>
          </div>
          <div>
            <span className="h-full border-l-2 border-gray-300 mx-2"></span>
          </div>
          <div>
            <span className="font-medium text-xl">
              {provider.extraChargeLabel}
            </span>
            <p className="text-base font-normal text-[#7F7F7F]">
              {provider.charge}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 mt-4">
          <div className="flex items-center gap-2 text-gray-600 text-sm bg-[#F9FAFB] p-2 rounded-md">
            <Phone className="w-4 h-4" />
            <span>{provider.phone}</span>
          </div>
          <Link href={`/search/${slug}`}>
            <Button className="bg-blue-600 hover:bg-blue-700">
              View profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
