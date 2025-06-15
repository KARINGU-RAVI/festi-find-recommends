import React from "react";
import { useInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { Event, ApiResponse } from "@/lib/types";
import EventCard from "./EventCard";
import Spinner from "./Spinner";
import { ArrowRight } from "lucide-react";

const fetchUpcomingEvents = async ({ pageParam = 1 }: { pageParam: unknown }): Promise<ApiResponse> => {
  const res = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageParam}&type=upcoming`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  // Map img_url to imgUrl
  const eventsWithCamelCase = data.events.map((event: any) => ({ ...event, imgUrl: event.img_url }));
  return { ...data, events: eventsWithCamelCase };
};

const UpcomingEvents = () => {
  const { ref, inView } = useInView();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<ApiResponse, Error, InfiniteData<ApiResponse>, string[], number>({
    queryKey: ["upcomingEvents"],
    queryFn: fetchUpcomingEvents,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined;
    },
  });

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-custom-heading flex items-center">
            Upcoming Events <ArrowRight className="ml-2" />
          </h2>
          <a href="#" className="text-custom-subtitle text-sm">See all</a>
        </div>
        {status === 'pending' ? (
          <div className="flex justify-center items-center h-96"><Spinner /></div>
        ) : status === 'error' ? (
          <div className="text-center text-red-500 py-10">Error: {error.message}</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.pages.map((page, i) => (
                <React.Fragment key={i}>
                  {page.events.map((event: Event, index: number) => (
                    <EventCard key={`${event.eventName}-${index}`} event={event} type="upcoming" index={index} />
                  ))}
                </React.Fragment>
              ))}
            </div>
            <div ref={ref} className="flex justify-center py-8">
              {isFetchingNextPage && <Spinner />}
            </div>
            {!hasNextPage && <p className="text-center text-custom-subtitle mt-8">You've reached the end of the list.</p>}
          </>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
