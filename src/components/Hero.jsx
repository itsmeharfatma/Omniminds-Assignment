import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:bg-[url(/public/hero.jpg)] bg-no-repeat bg-contain bg-top bg-origin-border w-full justify-center max-container sm:px-16 px-8 sm:py-12 py-12 fontStyle"
    >
      <div className="flex flex-col justify-center items-center w-full pt-24 sm:pt-60 sm:pb-48 text-gray-900 lg:text-white">
        <h1 className="sm:mt-6 mt-4 font-semibold text-center text-4xl lg:text-6xl">
          Crafting Digital Experiences
        </h1>
        <p className="text-center text-lg lg:text-xl leading-7 mt-6 mb-7 sm:mt-7 sm:mb-10">
          Passionate UI/UX designer with a knack for creating intuitive and
          engaging interfaces.
        </p>
        <a href="#skills">
          <button className="bg-[#626ae7] text-white font-semibold text-lg leading-7 py-3 px-8 rounded-lg hover:bg-[#3e47c9] transition-all duration-300">
            Explore My Work
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
