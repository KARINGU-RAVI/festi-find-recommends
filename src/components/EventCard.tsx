
import { Event } from "@/lib/types";
import { MapPin } from "lucide-react";

interface EventCardProps {
  event: Event;
  type: "recommended" | "upcoming";
  index: number;
}

const placeholderImages = [
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
];


const EventCard = ({ event, type, index }: EventCardProps) => {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const imageUrl = placeholderImages[index % placeholderImages.length];

  if (type === "recommended") {
    return (
      <div className="flex-shrink-0 w-72 h-96 rounded-lg overflow-hidden relative text-white">
        <img src={imageUrl} alt={event.eventName} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="font-bold text-lg truncate">{event.eventName}</h3>
          <div className="flex justify-between items-center text-sm opacity-80 mt-2">
            <p className="truncate">{event.cityName}</p>
            <p>{formattedDate}</p>
          </div>
        </div>
      </div>
    );
  }

  // Upcoming Event Card
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-custom-border/50 flex flex-col">
      <div className="relative">
        <img src={imageUrl} alt={event.eventName} className="w-full h-40 object-cover" />
        <div className="absolute top-2 left-2 bg-white/90 text-black text-xs px-2 py-1 rounded">
          {formattedDate}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-custom-heading">{event.eventName}</h3>
        <div className="flex items-center text-sm text-custom-subtitle mt-2">
          <MapPin className="w-4 h-4 mr-2" />
          <p>{event.cityName}</p>
        </div>
        <p className="text-sm text-custom-subtitle mt-1">{`${event.weather.replace(/C/g, '°C')} | ${Math.round(parseFloat(event.distanceKm))} km`}</p>
      </div>
    </div>
  );
};

export default EventCard;
