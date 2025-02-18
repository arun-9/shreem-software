import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Image Import for Vite/Webpack
const companyLogoUrl = new URL("./image.png", import.meta.url).href;

const ShreemMap = () => {
  const position = [13.029004587361223, 77.57591496131514]; // Actual coordinates
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMapLoaded(true), 500); // Smooth fade-in effect
  }, []);

  // Custom marker icon with fallback to default if image fails
  const customIcon = new L.Icon({
    iconUrl: companyLogoUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  return (
    <section className="flex flex-col items-center justify-center py-10 px-4">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Our Location</h2>

      {/* Map Container */}
      <div
        className={`w-full md:w-4/5 lg:w-3/4 mx-auto p-4 md:p-6 rounded-xl overflow-hidden shadow-lg bg-white transition-opacity duration-500 ${
          isMapLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <MapContainer
          center={position}
          zoom={15}
          className="w-full h-[350px] md:h-[450px] rounded-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <strong>Shreem Software Pvt. Ltd.</strong>
              <br /> Bengaluru, India
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default ShreemMap;
