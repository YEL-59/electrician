// "use client";

// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Search,
//   MapPin,
//   Phone,
//   Star,
//   Heart,
//   ChevronDown,
//   Filter,
// } from "lucide-react";

// const SearchListingPage = () => {
//   const [filters, setFilters] = useState({
//     services: [],
//     experience: [],
//     rating: [],
//     distance: [],
//     pricing: [],
//   });

//   const [searchQuery, setSearchQuery] = useState("");
//   const [location, setLocation] = useState("");
//   const [category, setCategory] = useState("");

//   const providers = [
//     {
//       id: 1,
//       name: "Falcon Electric",
//       image:
//         "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
//       rating: 4.9,
//       distance: "0.6 km",
//       minTime: "15 min",
//       members: "20+ Members",
//       experience: "6-10 year",
//       extraChargeLabel: "Highest cost",
//       charge: "$2.99",
//       phone: "(219) 555-0114",
//     },
//     {
//       id: 2,
//       name: "Falcon Electric",
//       image:
//         "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
//       rating: 4.9,
//       distance: "0.8 km",
//       minTime: "20 min",
//       members: "15+ Members",
//       experience: "5-8 year",
//       extraChargeLabel: "Top Choice",
//       charge: "$1.99",
//       phone: "(219) 555-0114",
//     },
//     {
//       id: 3,
//       name: "Falcon Electric",
//       image:
//         "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
//       rating: 4.9,
//       distance: "1.2 km",
//       minTime: "25 min",
//       members: "30+ Members",
//       experience: "10+ year",
//       extraChargeLabel: "Experience",
//       charge: "$3.99",
//       phone: "(219) 555-0114",
//     },
//   ];

//   const serviceFilters = [
//     { id: "personal", label: "Personal Services", count: 10 },
//     { id: "installation", label: "Installation and Electric", count: 8 },
//     { id: "outlet", label: "Outlet and switches", count: 6 },
//     { id: "inside", label: "Inside Residential work", count: 5 },
//     { id: "estimates", label: "Estimates", count: 3 },
//   ];

//   const experienceFilters = [
//     { id: "1-3", label: "1 - 3 years" },
//     { id: "3-5", label: "3 - 5 years" },
//     { id: "5-10", label: "5 - 10 years" },
//   ];

//   const ratingFilters = [
//     { id: "5", label: "5 stars" },
//     { id: "4", label: "4 stars" },
//     { id: "3", label: "3 stars" },
//     { id: "2", label: "2 stars" },
//     { id: "1", label: "1 star" },
//   ];

//   const distanceFilters = [
//     { id: "walking", label: "Walking (1 mi.)", icon: "🚶" },
//     { id: "cycling", label: "Biking (2 mi.)", icon: "🚴" },
//     { id: "driving", label: "Driving (5 mi.)", icon: "🚗" },
//     { id: "within", label: "Within 4 blocks", icon: "📍" },
//   ];

//   const pricingFilters = [
//     { id: "low", label: "$0 - $100" },
//     { id: "mid", label: "$100 - $300" },
//     { id: "high", label: "$300 - $500" },
//     { id: "premium", label: "$500+" },
//   ];

//   const toggleFilter = (category, value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [category]: prev[category].includes(value)
//         ? prev[category].filter((item) => item !== value)
//         : [...prev[category], value],
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-6">
//         {/* Search Bar */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//           <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-6">
//             <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <Label className="text-sm font-semibold text-gray-700 mb-2 block">
//                   Listing type
//                 </Label>
//                 <Select value={searchQuery} onValueChange={setSearchQuery}>
//                   <SelectTrigger className="w-full">
//                     <SelectValue placeholder="Electrical Contractor" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="electrical">
//                       Electrical Contractor
//                     </SelectItem>
//                     <SelectItem value="plumbing">
//                       Plumbing Contractor
//                     </SelectItem>
//                     <SelectItem value="hvac">HVAC Contractor</SelectItem>
//                     <SelectItem value="general">General Contractor</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <Label className="text-sm font-semibold text-gray-700 mb-2 block">
//                   Location
//                 </Label>
//                 <div className="relative">
//                   <Input
//                     placeholder="Michigan, USA"
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                     className="pr-10"
//                   />
//                   <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 </div>
//               </div>

//               <div>
//                 <Label className="text-sm font-semibold text-gray-700 mb-2 block">
//                   Category
//                 </Label>
//                 <Select value={category} onValueChange={setCategory}>
//                   <SelectTrigger className="w-full">
//                     <SelectValue placeholder="Electrician" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="electrician">Electrician</SelectItem>
//                     <SelectItem value="plumber">Plumber</SelectItem>
//                     <SelectItem value="hvac">HVAC Technician</SelectItem>
//                     <SelectItem value="carpenter">Carpenter</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//             <div>
//               <div>
//                 <Label className="text-sm font-semibold text-gray-700 mb-2 block">
//                   Search by name
//                 </Label>
//                 <div className="relative">
//                   <Input placeholder="Electrician" className="pr-10" />
//                   <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//           {/* Sidebar Filters */}
//           <div className="lg:col-span-1 space-y-4">
//             {/* Tags Filter */}
//             <Card>
//               <CardContent className="p-4">
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className="font-semibold text-gray-900">Tags</h3>
//                   <ChevronDown className="w-4 h-4 text-gray-500" />
//                 </div>
//                 <div className="space-y-2">
//                   {serviceFilters.map((filter) => (
//                     <div
//                       key={filter.id}
//                       className="flex items-center justify-between"
//                     >
//                       <div className="flex items-center space-x-2">
//                         <Checkbox
//                           id={filter.id}
//                           checked={filters.services.includes(filter.id)}
//                           onCheckedChange={() =>
//                             toggleFilter("services", filter.id)
//                           }
//                         />
//                         <Label
//                           htmlFor={filter.id}
//                           className="text-sm cursor-pointer"
//                         >
//                           {filter.label}
//                         </Label>
//                       </div>
//                       <span className="text-xs text-gray-500">
//                         {filter.count}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Rating Filter */}
//             <Card>
//               <CardContent className="p-4">
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className="font-semibold text-gray-900">Rating</h3>
//                   <ChevronDown className="w-4 h-4 text-gray-500" />
//                 </div>
//                 <div className="space-y-2">
//                   {ratingFilters.map((filter) => (
//                     <div
//                       key={filter.id}
//                       className="flex items-center space-x-2"
//                     >
//                       <Checkbox
//                         id={`rating-${filter.id}`}
//                         checked={filters.rating.includes(filter.id)}
//                         onCheckedChange={() =>
//                           toggleFilter("rating", filter.id)
//                         }
//                       />
//                       <Label
//                         htmlFor={`rating-${filter.id}`}
//                         className="text-sm cursor-pointer"
//                       >
//                         {filter.label}
//                       </Label>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Experience Filter */}
//             <Card>
//               <CardContent className="p-4">
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className="font-semibold text-gray-900">Experience</h3>
//                   <ChevronDown className="w-4 h-4 text-gray-500" />
//                 </div>
//                 <div className="space-y-2">
//                   {experienceFilters.map((filter) => (
//                     <div
//                       key={filter.id}
//                       className="flex items-center space-x-2"
//                     >
//                       <Checkbox
//                         id={`exp-${filter.id}`}
//                         checked={filters.experience.includes(filter.id)}
//                         onCheckedChange={() =>
//                           toggleFilter("experience", filter.id)
//                         }
//                       />
//                       <Label
//                         htmlFor={`exp-${filter.id}`}
//                         className="text-sm cursor-pointer"
//                       >
//                         {filter.label}
//                       </Label>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Distance Filter */}
//             <Card>
//               <CardContent className="p-4">
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className="font-semibold text-gray-900">Distance</h3>
//                   <ChevronDown className="w-4 h-4 text-gray-500" />
//                 </div>
//                 <div className="space-y-2">
//                   {distanceFilters.map((filter) => (
//                     <div
//                       key={filter.id}
//                       className="flex items-center space-x-2"
//                     >
//                       <Checkbox
//                         id={`dist-${filter.id}`}
//                         checked={filters.distance.includes(filter.id)}
//                         onCheckedChange={() =>
//                           toggleFilter("distance", filter.id)
//                         }
//                       />
//                       <Label
//                         htmlFor={`dist-${filter.id}`}
//                         className="text-sm cursor-pointer flex items-center"
//                       >
//                         <span className="mr-1">{filter.icon}</span>
//                         {filter.label}
//                       </Label>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Pricing Filter */}
//             <Card>
//               <CardContent className="p-4">
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className="font-semibold text-gray-900">Pricing</h3>
//                   <ChevronDown className="w-4 h-4 text-gray-500" />
//                 </div>
//                 <div className="space-y-2">
//                   {pricingFilters.map((filter) => (
//                     <div
//                       key={filter.id}
//                       className="flex items-center space-x-2"
//                     >
//                       <Checkbox
//                         id={`price-${filter.id}`}
//                         checked={filters.pricing.includes(filter.id)}
//                         onCheckedChange={() =>
//                           toggleFilter("pricing", filter.id)
//                         }
//                       />
//                       <Label
//                         htmlFor={`price-${filter.id}`}
//                         className="text-sm cursor-pointer"
//                       >
//                         {filter.label}
//                       </Label>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Main Content Area */}
//           <div className="lg:col-span-3">
//             <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
//               {/* Listings Column */}
//               <div className="space-y-4">
//                 {providers.map((provider) => (
//                   <div
//                     key={provider.id}
//                     className="bg-white rounded-lg shadow-md overflow-hidden relative w-full"
//                   >
//                     <div className="relative h-72 w-full">
//                       <img
//                         src={provider.image}
//                         alt={provider.name}
//                         className="w-full h-full object-cover"
//                       />
//                       <Button
//                         variant="ghost"
//                         className="absolute top-2 right-2 rounded-full p-1 bg-[#1B1B1B] hover:bg-white"
//                       >
//                         <Heart className="w-5 h-5 text-white hover:text-black" />
//                       </Button>
//                     </div>

//                     <div className="p-4 space-y-2">
//                       <h3 className="text-3xl font-semibold">
//                         {provider.name}
//                       </h3>

//                       <div className="flex justify-between items-center gap-2 text-sm text-gray-500">
//                         <span className="flex items-center gap-1">
//                           <MapPin className="w-4 h-4" />
//                           <p className="text-[#7F7F7F] font-semibold text-base">
//                             {provider.distance}
//                           </p>
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <svg
//                             className="w-4 h-4"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <circle
//                               cx="12"
//                               cy="12"
//                               r="10"
//                               stroke="currentColor"
//                               strokeWidth="2"
//                             />
//                             <path
//                               d="M12 6V12L16 14"
//                               stroke="currentColor"
//                               strokeWidth="2"
//                               strokeLinecap="round"
//                             />
//                           </svg>
//                           <p className="text-[#7F7F7F] font-semibold text-base">
//                             {provider.minTime}
//                           </p>
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                           <p className="text-[#7F7F7F] font-semibold text-base">
//                             {provider.rating}
//                           </p>
//                         </span>
//                       </div>

//                       <div className="flex justify-between items-center text-xs text-gray-600 py-4">
//                         <div>
//                           <span className="font-medium text-xl">Members</span>
//                           <p className="text-base font-normal text-[#7F7F7F]">
//                             {provider.members}
//                           </p>
//                         </div>
//                         <div>
//                           <span className="h-full border-l-2 border-gray-300 mx-2"></span>
//                         </div>
//                         <div>
//                           <span className="font-medium text-xl">
//                             Experience
//                           </span>
//                           <p className="text-base font-normal text-[#7F7F7F]">
//                             {provider.experience}
//                           </p>
//                         </div>
//                         <div>
//                           <span className="h-full border-l-2 border-gray-300 mx-2"></span>
//                         </div>
//                         <div>
//                           <span className="font-medium text-xl">
//                             {provider.extraChargeLabel}
//                           </span>
//                           <p className="text-base font-normal text-[#7F7F7F]">
//                             {provider.charge}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-center justify-center gap-5 mt-4">
//                         <div className="flex items-center gap-2 text-gray-600 text-sm bg-[#F9FAFB] p-2 rounded-md">
//                           <Phone className="w-4 h-4" />
//                           <span>{provider.phone}</span>
//                         </div>
//                         <Button className="bg-blue-600 hover:bg-blue-700">
//                           View profile
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Map Column */}
//               <div className="hidden xl:block">
//                 <div className="sticky top-6">
//                   <Card className="overflow-hidden h-[calc(100vh-8rem)]">
//                     <CardContent className="p-0 h-full">
//                       <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
//                         <img
//                           src="https://maps.googleapis.com/maps/api/staticmap?center=Florida&zoom=8&size=600x800&key=YOUR_API_KEY"
//                           alt="Map"
//                           className="w-full h-full object-cover"
//                           onError={(e) => {
//                             e.target.src =
//                               'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="800"%3E%3Crect fill="%23e5e7eb" width="600" height="800"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af"%3EMap View%3C/text%3E%3C/svg%3E';
//                           }}
//                         />
//                         <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded shadow text-sm">
//                           Google Maps
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchListingPage;

"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin, ChevronDown } from "lucide-react";

import {
  providersData,
  serviceFilters,
  experienceFilters,
  ratingFilters,
  distanceFilters,
  pricingFilters,
} from "@/lib/providers";
import ProviderCard from "./ProviderCard";
import MapComponent from "./MapComponent";

const SearchListingPage = () => {
  const [filters, setFilters] = useState({
    services: [],
    experience: [],
    rating: [],
    distance: [],
    pricing: [],
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const toggleFilter = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const FilterSection = ({ title, filters: filterList, category }) => (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
        <div className="space-y-2">
          {filterList.map((filter) => (
            <div key={filter.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`${category}-${filter.id}`}
                  checked={filters[category].includes(filter.id)}
                  onCheckedChange={() => toggleFilter(category, filter.id)}
                />
                <Label
                  htmlFor={`${category}-${filter.id}`}
                  className="text-sm cursor-pointer flex items-center"
                >
                  {filter.icon && <span className="mr-1">{filter.icon}</span>}
                  {filter.label}
                </Label>
              </div>
              {filter.count && (
                <span className="text-xs text-gray-500">{filter.count}</span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Listing type
                </Label>
                <Select value={searchQuery} onValueChange={setSearchQuery}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Electrical Contractor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electrical">
                      Electrical Contractor
                    </SelectItem>
                    <SelectItem value="plumbing">
                      Plumbing Contractor
                    </SelectItem>
                    <SelectItem value="hvac">HVAC Contractor</SelectItem>
                    <SelectItem value="general">General Contractor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Location
                </Label>
                <div className="relative">
                  <Input
                    placeholder="Michigan, USA"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pr-10"
                  />
                  <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Category
                </Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Electrician" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electrician">Electrician</SelectItem>
                    <SelectItem value="plumber">Plumber</SelectItem>
                    <SelectItem value="hvac">HVAC Technician</SelectItem>
                    <SelectItem value="carpenter">Carpenter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                Search by name
              </Label>
              <div className="relative">
                <Input placeholder="Electrician" className="pr-10" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-4">
            <FilterSection
              title="Tags"
              filters={serviceFilters}
              category="services"
            />
            <FilterSection
              title="Rating"
              filters={ratingFilters}
              category="rating"
            />
            <FilterSection
              title="Experience"
              filters={experienceFilters}
              category="experience"
            />
            <FilterSection
              title="Distance"
              filters={distanceFilters}
              category="distance"
            />
            <FilterSection
              title="Pricing"
              filters={pricingFilters}
              category="pricing"
            />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Listings Column */}
              <div className="space-y-4">
                {providersData.map((provider) => (
                  <ProviderCard key={provider.id} provider={provider} />
                ))}
              </div>

              {/* Map Column */}
              <div className="hidden xl:block">
                <div className="sticky top-6">
                  <Card className="overflow-hidden h-[calc(100vh-8rem)]">
                    <CardContent className="p-0 h-full">
                      <MapComponent providers={providersData} />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchListingPage;
