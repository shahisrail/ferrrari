import React from "react";

const CareerOpportunities = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      <div className="md:max-w-6xl md:mx-auto">
        <div className="flex items-center justify-start mb-6 md:mb-10">
          <strong className="text-red-600 text-base md:text-lg font-semibold">
            1
          </strong>
          <span className="inline-block w-6 md:w-8 h-px bg-red-600 mx-2 md:mx-3"></span>
          <strong className="text-red-600 text-base md:text-lg font-semibold uppercase tracking-wider">
            Opportunities
          </strong>
        </div>

        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-10 uppercase tracking-wide text-black !font-ferrari">
            Career Opportunities
          </h2>
          <div className="text-sm sm:text-base leading-relaxed mb-12 text-gray-800 sm:leading-normal !font-ferrari">
            Working at Ferrari means being part of a unique, passionate,
            future-focused team in which our people are our greatest asset.
            Together, we compete on the track and in markets all over the world.
            If you are ready to make a difference, please look at the job offers
            or send us your spontaneous application at the Careers site.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;
