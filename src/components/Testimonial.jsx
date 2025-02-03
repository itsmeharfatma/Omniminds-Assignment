const Testimonial = () => {
  return (
    <section className="sm:px-16 px-8 sm:pt-12 sm:pb-20 py-12 fontStyle">
      <div className="flex justify-center items-center max-md:flex-col mt-6 sm:gap-16 gap-8 w-full min-container">
        <div className="flex justify-start items-center">
          <img
            src="/testimonial.jpg"
            alt="testimonial"
            width={260}
            height={500}
            className="object-contain rounded-2xl"
          />
        </div>

        <div className="flex flex-1 flex-col gap-5">
          <div className="flex gap-1">
            <i class="fa-solid fa-star fa-sm text-yellow-400 fa-xl"></i>
            <i class="fa-solid fa-star fa-sm text-yellow-400 fa-xl"></i>
            <i class="fa-solid fa-star fa-sm text-yellow-400 fa-xl"></i>
            <i class="fa-solid fa-star fa-sm text-yellow-400 fa-xl"></i>
            <i class="fa-solid fa-star fa-sm text-yellow-400 fa-xl"></i>
          </div>
          <p className="mt-4 text-gray-900 font-medium text-lg">
            Working with you has been an absolute pleasure. Your attention to
            detail and creativity are unparalleled.
          </p>
          <div className="mt-10 flex flex-col">
            <p className="text-gray-900 font-bold text-lg">Jessica Lee</p>
            <p className="text-gray-600 text-lg">Marketing Director at Innovate Inc.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
