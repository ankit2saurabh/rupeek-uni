import React from "react";
import { images } from "../../utils/constants";
import { Star } from "../../assets/svg";
import InputForm from "../forms";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full top-[10.6rem] md:top-[14rem] z-10">
        <div className="flex flex-col md:flex-row-reverse">
          <div className="right-align-component ml-1 md:ml-auto">
            <img
              src={images.bannerImages}
              alt="bannerImages"
              className="h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1]"
            />
          </div>
          <div className="left-align-component mt-8 md:mt-0">
            <h1 className="font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6">
              <span>
                <strong>NX Wave.</strong> The next-gen credit card for those who
                love rewards.
              </span>
            </h1>
            <p className="font-medium text-sm md:text-base md:mb-9 flex items-center mt-4 md:mt-0 whitespace-nowrap">
              1% Cashback
              <span className="mx-2">
                <Star />
              </span>
              5x Reward
              <span className="mx-2">
                <Star />
              </span>
              Zero Forex Markup
            </p>
            <InputForm isFullWidth={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
