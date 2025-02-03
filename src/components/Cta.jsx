import React from "react";

const CTA = () => {
  return (
    <div className="flex flex-col items-center max-sm:items-start max-sm:justify-start gap-3 mb-16">
      <h3 className="text-xl font-semibold text-gray-200">
        Subscribe to our newsletter
      </h3>
      <div className="md:max-w-[45%] w-full flex items-center justify-between max-sm:flex-col gap-2 pl-4 sm:border sm:border-slate-gray rounded-full">
        <div className="flex items-center gap-2">
          <i class="fa-regular fa-envelope fa-lg text-gray-300"></i>
          <input
            type="text"
            placeholder="Input your Email"
            className="input bg-transparent focus-within:outline-none text-gray-200"
          />
        </div>
        <div className="flex max-sm:justify-start items-center max-sm:w-full text-white">
          <button className="bg-[#626ae7] py-2 px-4 rounded-r-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
