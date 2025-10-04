// lib/data/providers.js
export const providersData = [
  {
    id: 1,
    name: "Falcon Electric",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
    rating: 4.9,
    distance: "0.6 km",
    minTime: "15 min",
    members: "20+ Members",
    experience: "6-10 year",
    extraChargeLabel: "Highest cost",
    charge: "$2.99",
    phone: "(219) 555-0114",
    coordinates: { lat: 28.5383, lng: -81.3792 },
  },
  {
    id: 2,
    name: "Falcon Electric",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
    rating: 4.9,
    distance: "0.8 km",
    minTime: "20 min",
    members: "15+ Members",
    experience: "5-8 year",
    extraChargeLabel: "Top Choice",
    charge: "$1.99",
    phone: "(219) 555-0114",
    coordinates: { lat: 28.5423, lng: -81.3732 },
  },
  {
    id: 3,
    name: "Falcon Electric",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    rating: 4.9,
    distance: "1.2 km",
    minTime: "25 min",
    members: "30+ Members",
    experience: "10+ year",
    extraChargeLabel: "Experience",
    charge: "$3.99",
    phone: "(219) 555-0114",
    coordinates: { lat: 28.5303, lng: -81.3692 },
  },
];

export const serviceFilters = [
  { id: "personal", label: "Personal Services", count: 10 },
  { id: "installation", label: "Installation and Electric", count: 8 },
  { id: "outlet", label: "Outlet and switches", count: 6 },
  { id: "inside", label: "Inside Residential work", count: 5 },
  { id: "estimates", label: "Estimates", count: 3 },
];

export const experienceFilters = [
  { id: "1-3", label: "1 - 3 years" },
  { id: "3-5", label: "3 - 5 years" },
  { id: "5-10", label: "5 - 10 years" },
];

export const ratingFilters = [
  { id: "5", label: "5 stars" },
  { id: "4", label: "4 stars" },
  { id: "3", label: "3 stars" },
  { id: "2", label: "2 stars" },
  { id: "1", label: "1 star" },
];

export const distanceFilters = [
  { id: "walking", label: "Walking (1 mi.)", icon: "🚶" },
  { id: "cycling", label: "Biking (2 mi.)", icon: "🚴" },
  { id: "driving", label: "Driving (5 mi.)", icon: "🚗" },
  { id: "within", label: "Within 4 blocks", icon: "📍" },
];

export const pricingFilters = [
  { id: "low", label: "$0 - $100" },
  { id: "mid", label: "$100 - $300" },
  { id: "high", label: "$300 - $500" },
  { id: "premium", label: "$500+" },
];
