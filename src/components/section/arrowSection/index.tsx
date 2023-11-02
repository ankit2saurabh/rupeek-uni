import React from "react";
import { images } from "../../../utils/constants";
const ArrowSection = () => {
  return (
    <section className="py-12 md:pt-40 md:pb-28">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4">
        <div className="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium max-w-5xl md:mx-auto">
          <p
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="100"
            className="text-[#9ea7ae]"
          >
            <span className="text-[#1A202C]">Earn 1% assured cashback</span> on
            your spends. Get{" "}
          </p>
          <p
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="200"
            className="text-[#9ea7ae] mt-2"
          >
            <span className="text-[#1A202C]">5X more value than cashback</span>{" "}
            at the Uni Store. Enjoy round the clock{" "}
          </p>
          <p
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-delay="300"
            className="text-[#9ea7ae] mt-2"
          >
            <span className="text-[#1A202C]">Whatsapp support.</span> And it's{" "}
          </p>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="400"
            className="text-[#9ea7ae] mt-2"
          >
            <span className="text-[#1A202C]">lifetime free</span>; no joining
            fee, no annual charges.
          </p>
        </div>
        <div
          style={{
            background:
              "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
          }}
          className="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-full justify-center md:mx-auto mt-8"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
        >
          <img
            alt="down_arrow"
            src={images.arrowDown}
            loading="lazy"
            className="w-9 md:w-14 css-0"
          />
        </div>
      </div>
    </section>
  );
};

export default ArrowSection;
