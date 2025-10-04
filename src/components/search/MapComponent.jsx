"use client";

import { useEffect, useRef } from "react";

const MapComponent = ({ providers }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || loadedRef.current) return;

    const initMap = () => {
      if (!mapRef.current || mapInstanceRef.current || !window.L) return;

      try {
        // Initialize map
        const map = window.L.map(mapRef.current).setView(
          [28.5383, -81.3792],
          13
        );

        // Add OpenStreetMap tiles
        window.L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution: "© OpenStreetMap contributors",
            maxZoom: 19,
          }
        ).addTo(map);

        // Add markers for each provider
        providers.forEach((provider) => {
          window.L.marker([
            provider.coordinates.lat,
            provider.coordinates.lng,
          ]).addTo(map).bindPopup(`
              <div style="text-align: center;">
                <strong>${provider.name}</strong><br/>
                ⭐ ${provider.rating}<br/>
                📍 ${provider.distance}
              </div>
            `);
        });

        mapInstanceRef.current = map;
      } catch (error) {
        console.error("Map initialization error:", error);
      }
    };

    // Check if Leaflet is already loaded
    if (window.L) {
      initMap();
      loadedRef.current = true;
      return;
    }

    // Load Leaflet CSS
    if (!document.querySelector('link[href*="leaflet.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
      link.crossOrigin = "";
      document.head.appendChild(link);
    }

    // Load Leaflet JS
    if (!document.querySelector('script[src*="leaflet.js"]')) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
      script.crossOrigin = "";
      script.async = false; // Changed to false for synchronous loading

      script.onload = () => {
        setTimeout(initMap, 100); // Small delay to ensure DOM is ready
        loadedRef.current = true;
      };

      script.onerror = () => {
        console.error("Failed to load Leaflet script");
      };

      document.head.appendChild(script);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [providers]);

  return (
    <div
      ref={mapRef}
      className="w-full h-full rounded-lg"
      style={{ minHeight: "600px", zIndex: 0 }}
    />
  );
};

export default MapComponent;
