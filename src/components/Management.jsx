const Management = () => {
  return (
    <section className="flex justify-center items-center max-md:flex-col mt-12 sm:gap-12 gap-8 w-full min-container">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-bold lg:max-w-lg text-gray-900">
          project management
        </h2>
        <p className="mt-5 md:max-w-lg text-gray-600 font-medium">
          Extensive experience in leading cross-functional teams to deliver
          projects on time and within budget.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-[#626ae7] text-white font-semibold leading-7 py-2 px-6 rounded-xl hover:bg-[#3e47c9] transition-all duration-300">
            Try now
          </button>
          <button className="font-semibold text-[#626ae7] leading-7 py-2 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300">
            Learn more
          </button>
        </div>
      </div>

      <div className="flex flex-1 justify-end items-center">
        <img
          src="/management.jpg"
          alt="project management"
          width={460}
          height={500}
          className="object-contain rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Management;
