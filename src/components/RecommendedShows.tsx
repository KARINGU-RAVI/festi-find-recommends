import { useQuery } from "@tanstack/react-query";
import { Event } from "@/lib/types";
import EventCard from "./EventCard";
import Spinner from "./Spinner";
import { ArrowRight } from "lucide-react";

const fetchRecommendedEvents = async (): Promise<Event[]> => {
  const res = await fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  // The API returns img_url, let's map it to imgUrl to match our type
  return data.events.map((event: any) => ({ ...event, imgUrl: event.img_url }));
};

const RecommendedShows = () => {
  const { data: events, isLoading, isError } = useQuery<Event[]>({
    queryKey: ["recommendedEvents"],
    queryFn: fetchRecommendedEvents,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return <div className="text-center text-red-500 py-10">Failed to load recommended shows.</div>;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-custom-heading flex items-center">
            Recommended Shows <ArrowRight className="ml-2" />
          </h2>
          <a href="#" className="text-custom-subtitle text-sm">See all</a>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
          {events?.map((event, index) => (
            <EventCard key={`${event.eventName}-${index}`} event={event} type="recommended" index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedShows;
