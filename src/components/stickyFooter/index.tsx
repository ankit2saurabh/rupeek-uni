import React from "react";
import InputForm from "../forms";

const StickyFooter = () => {
  return (
    <section
      className="hidden sm:block fixed bottom-0 w-screen bg-uni-grey py-5 z-10 bg-[#F5F5F5]"
      data-aos="fade-up"
      data-aos-offset="800"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <div className="mx-auto max-w-7xl px-12 w-full flex justify-between">
        <InputForm />
      </div>
    </section>
  );
};

export default StickyFooter;
