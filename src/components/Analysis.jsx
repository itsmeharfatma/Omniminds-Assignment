const Analysis = () => {
  return (
    <section className="flex justify-center items-center max-md:flex-col mt-12 sm:gap-16 gap-8 w-full min-container">
      <div className="flex flex-1 justify-start items-center">
        <img
          src="/analysis.jpg"
          alt="data analysis"
          width={460}
          height={500}
          className="object-contain rounded-2xl"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-bold lg:max-w-lg">
          Data Analysis
        </h2>
        <p className="mt-5 md:max-w-lg text-gray-600 font-medium">
          Proficient in analyzing complex datasets to derive actionable insights
          and inform strategic decisions.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-[#626ae7] text-white font-semibold text-lg leading-7 py-2 px-6 rounded-xl hover:bg-[#3e47c9] transition-all duration-300">
            Try now
          </button>
          <button className="font-semibold text-[#626ae7] text-lg leading-7 py-2 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
