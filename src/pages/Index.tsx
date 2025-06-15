
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecommendedShows from "@/components/RecommendedShows";
import UpcomingEvents from "@/components/UpcomingEvents";

const Index = () => {
  return (
    <div className="bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <RecommendedShows />
        <UpcomingEvents />
      </main>
    </div>
  );
};

export default Index;
