
const Hero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh]">
      <img
        src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop"
        alt="Events banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div className="text-center text-white p-4 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold">
            Discover Exciting Events Happening Near You - Stay Tuned for Updates!
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
