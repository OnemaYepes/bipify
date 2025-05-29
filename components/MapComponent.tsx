// components/MapComponent.tsx
"use client";

import { useEffect, useState } from "react";

export default function MapComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Esta función se ejecutará cuando el componente se monte
    const loadMap = async () => {
      try {
        const response = await fetch("/api/map");
        if (!response.ok) {
          throw new Error("Failed to load map");
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading map:", error);
        setIsLoading(false);
      }
    };

    loadMap();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p>Loading map...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe 
        src="/api/map" 
        className="w-full h-full border-none"
        title="Mapa de Talleres"
      />
    </div>
  );
}