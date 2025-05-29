"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import './WorkshopMap.css';

const WorkshopMap = () => {
  const [workshops, setWorkshops] = useState([]);
  const [userPosition, setUserPosition] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markers = useRef([]);
  const userMarker = useRef(null);

  const sampleWorkshops = [
    { id: 1, name: "Taller Mecánico El Poblado", address: "Cl. 10 #43-23, El Poblado", lat: 6.2087, lng: -75.5656, type: "workshop", hours: "8:00 - 18:00" },
    { id: 2, name: "Taller La 65", address: "Cra. 65 #44-45, Laureles", lat: 6.2479, lng: -75.5899, type: "workshop", hours: "7:30 - 17:30" },
    { id: 3, name: "Garaje Automotriz Belén", address: "Cl. 30A #75-12, Belén", lat: 6.2319, lng: -75.6056, type: "garage", hours: "9:00 - 19:00" },
    { id: 4, name: "Taller Robledo", address: "Cra. 80 #65-23, Robledo", lat: 6.2678, lng: -75.6001, type: "workshop", hours: "8:00 - 17:00" },
    { id: 5, name: "Mecánica Rápida Envigado", address: "Cl. 38 Sur #27-45, Envigado", lat: 6.1696, lng: -75.5786, type: "garage", hours: "7:00 - 16:00" },
    { id: 6, name: "Taller Bello", address: "Cra. 50 #52-12, Bello", lat: 6.3333, lng: -75.5667, type: "workshop", hours: "8:30 - 18:30" },
    { id: 7, name: "Garaje Itagüí", address: "Cl. 31 #51-23, Itagüí", lat: 6.1719, lng: -75.6114, type: "garage", hours: "7:00 - 17:00" },
    { id: 8, name: "Taller La América", address: "Cra. 80 #42-56, La América", lat: 6.2512, lng: -75.6100, type: "workshop", hours: "8:00 - 18:00" },
    { id: 9, name: "Mecánica La Floresta", address: "Cl. 47 #75-34, La Floresta", lat: 6.2400, lng: -75.5800, type: "workshop", hours: "9:00 - 19:00" },
    { id: 10, name: "Garaje Sabaneta", address: "Cl. 45 Sur #78-12, Sabaneta", lat: 6.1515, lng: -75.6167, type: "garage", hours: "7:30 - 17:30" }
  ];

  useEffect(() => {
    setWorkshops(sampleWorkshops);
  }, []);

  useEffect(() => {
    if (!mapRef.current) {
      console.log("🔴 El mapRef todavía no está listo.");
      return;
    }

    console.log("🟢 El mapRef ya está listo. Iniciando el mapa...");

    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_MAPS_KEY,
          version: "beta",
          libraries: ["marker", "places"]
        });

        await loader.load();

        if (typeof google === 'undefined') {
          console.error("❌ Google Maps no está disponible.");
          setError("Google Maps no está disponible");
          return;
        }

        mapInstance.current = new google.maps.Map(mapRef.current, {
          center: { lat: 6.2479, lng: -75.5656 },
          zoom: 13,
          mapId: "256e14433607939f",
        });

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              setUserPosition(pos);
              createUserMarker(pos);
              createWorkshopMarkers(pos);
              mapInstance.current.setCenter(pos);
            },
            (error) => {
              console.warn("No se pudo obtener la ubicación del usuario:", error);
              createWorkshopMarkers(null);
            }
          );
        } else {
          console.warn("Geolocalización no soportada.");
          createWorkshopMarkers(null);
        }

      } catch (err) {
        console.error("💥 Error en initMap:", err);
        setError("Error al cargar Google Maps");
      } finally {
        setLoading(false);
      }
    };

    initMap();

    return () => {
      markers.current.forEach(marker => {
        if (marker) marker.setMap(null);
      });
      if (userMarker.current) userMarker.current.setMap(null);
    };
  }, [mapRef]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.handleGoClick = (name) => {
        alert(`Navegando hacia: ${name}`);
      };
    }
  }, []);

  const createUserMarker = (position) => {
    if (typeof document === 'undefined') return;
    const content = document.createElement("div");
    content.className = "property user-marker";
    content.innerHTML = `
      <div class="icon">
        <i class="fa fa-user" title="Tu ubicación"></i>
      </div>
    `;

    userMarker.current = new google.maps.marker.AdvancedMarkerElement({
      map: mapInstance.current,
      content,
      position,
      title: "Tu ubicación",
    });
  };

  const createWorkshopMarkers = (userPos) => {
    markers.current = workshops.map(workshop => {
      const content = buildMarkerContent(workshop, userPos);
      if (!content) return;

      const marker = new google.maps.marker.AdvancedMarkerElement({
        map: mapInstance.current,
        content,
        position: { lat: workshop.lat, lng: workshop.lng },
        title: workshop.name,
      });

      marker.addListener('click', async () => {
        markers.current.forEach(m => m?.content?.classList?.remove("highlight"));
        if (userPos) {
          const details = content.querySelector('.details');
          const dist = details.querySelector('.distance');
          const dur = details.querySelector('.duration');
          dist.textContent = 'Calculando...';
          dur.textContent = 'Calculando...';

          try {
            const { distance, duration } = await calculateRoute(userPos.lat, userPos.lng, workshop.lat, workshop.lng);
            dist.textContent = distance;
            dur.textContent = duration;
          } catch (e) {
            dist.textContent = 'Error';
            dur.textContent = 'Error';
          }
        }
        content.classList.toggle("highlight");
        marker.zIndex = content.classList.contains("highlight") ? 1 : null;
      });

      return marker;
    });
  };

  const calculateRoute = (originLat, originLng, destLat, destLng) => {
    return new Promise((resolve, reject) => {
      const service = new google.maps.DirectionsService();
      service.route({
        origin: { lat: originLat, lng: originLng },
        destination: { lat: destLat, lng: destLng },
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
      }, (response, status) => {
        if (status === "OK") {
          const leg = response.routes[0].legs[0];
          resolve({ distance: leg.distance.text, duration: leg.duration.text });
        } else {
          reject(`Directions error: ${status}`);
        }
      });
    });
  };

  const buildMarkerContent = (workshop, userPos) => {
    if (typeof document === 'undefined') return null;
    const icon = workshop.type === 'garage' ? 'toolbox' : 'wrench';
    const el = document.createElement("div");
    el.className = "property";
    el.innerHTML = `
      <div class="icon">
        <i class="fa fa-${icon}" title="${workshop.name}"></i>
      </div>
      <div class="details">
        <div class="name">${workshop.name}</div>
        <div class="address">${workshop.address}</div>
        <div class="features">
          <div><i class="fa fa-clock"></i> <span class="duration">${userPos ? 'Calculando...' : workshop.hours}</span></div>
          <div><i class="fa fa-road"></i> <span class="distance">${userPos ? 'Calculando...' : 'N/D'}</span></div>
          <button class="go-button" onclick="event.stopPropagation(); window.handleGoClick('${workshop.name}')">Ir</button>
        </div>
      </div>`;
    return el;
  };

  if (loading) {
    return <div className="loading-container">Cargando mapa...</div>;
  }

  if (error) {
    return <div className="error-container">{error}</div>;
  }

  return (
    <div className="pageholder">
      <div className="titleholder">
        <div className="title">Talleres Mecánicos en el Mapa</div>
      </div>
      <div className="linkholder">
        <div className="mapholder">
          <div id="map" ref={mapRef}></div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopMap;
