import React from "react";
import { IBigCard } from "../../../utils/interface";

const BigCard: React.FC<IBigCard> = ({
  isReverse,
  imageSrc,
  titleBold,
  titleNormal,
  subtitle,
}) => {
  return (
    <div
      className={`md:pt-[50px] pb-12 pt-12 md:pb-[30px] flex items-center justify-between md:space-x-2 flex-col-reverse ${
        isReverse ? "md:flex-row-reverse" : "md:flex-row"
      } `}
    >
      <div className="left-container flex-1 pt-8 md:pt-0">
        <h5 className="text-4xl text-[#9EA7AE] font-[700]">
          <span className="text-[#1C2132]">{titleBold}</span>
          {titleNormal}
        </h5>
        {subtitle && <p className="text-[#B2B8BD] mt-8">{subtitle}</p>}
      </div>
      <div className="right-container flex-1 text-center">
        <img
          src={imageSrc}
          alt="parentCashback"
          className={`w-[280px] lg:w-[448px] h-auto mx-auto ${
            isReverse ? "lg:mr-auto" : "lg:ml-auto"
          } md:mx-0`}
        />
      </div>
    </div>
  );
};

export default BigCard;
