import React from "react";
import { CARDS_DATA, DARK_CARD_DATA, images } from "../../../utils/constants";
import GradientText from "../../gradientText";
import SmallCard from "../../card/smallCard";
import LayoutWrapper from "../../layout/layoutWrapper";

const DarkSection = () => {
  return (
    <section className="bg-black pb-[8rem]">
      <LayoutWrapper>
        <div className="bg-image relative">
          <img
            src={images.circles}
            alt="dark-circle"
            className="absolute top-0 h-auto w-[70%]"
          />
        </div>
        {DARK_CARD_DATA.map((value) => (
          <div
            className="flex items-center justify-between pt-[8rem] flex-col md:flex-row"
            key={value.id}
          >
            <div className="flex-1 pt-8 md:pt-0">
              <p className="text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]">
                {value.title}
                <GradientText text={value.colouredText} />
              </p>
              <p className="text-[#BFC9CC] pt-8rem text-lg">{value.subtitle}</p>
            </div>
            <div className="flex-1">
              <img
                src={value.imgSrc}
                alt="screen_1"
                className="w-[80%] h-auto mx-auto md:ml-auto md:mx-0"
              />
            </div>
          </div>
        ))}
        <div className="flex justify-between flex-col md:flex-row md:mt-[6rem]">
          {CARDS_DATA.map((value) => (
            <SmallCard
              key={value.id}
              isReverse={value.isReverse}
              title={value.title}
              imgSrc={value.imgSrc}
              type={value.type}
              subtitle={value.subtitle}
            />
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default DarkSection;
