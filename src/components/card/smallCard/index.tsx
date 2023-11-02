import React from "react";
import { ISmallCard } from "../../../utils/interface";

const SmallCard: React.FC<ISmallCard> = ({
  isReverse,
  imgSrc,
  subtitle,
  title,
  type,
}) => {
  return (
    <div className="p-2 max-w-[18rem] mt-24">
      <div
        className={`flex items-center md:items-start md:flex-col ${
          isReverse ? "flex-row-reverse" : "flex-row "
        }`}
      >
        <div className="image-container flex-1 md:mb-8">
          <img
            src={imgSrc}
            alt="whatsapp"
            className={`w-[5.5rem] md:w-[8rem] h-auto ${
              isReverse ? "ml-auto" : "mx-auto"
            } md:mx-0`}
          />
        </div>
        <div className="text-container flex-1">
          <div className={`${isReverse ? "" : "-mr-12"} md:mr-0`}>
            <div className="heading">
              <h3 className="text-white text-xl">{title}</h3>
            </div>
            <div className="title mt-3">
              {type === "TEXT" ? (
                <p className="text-[#8E9393]">{subtitle}</p>
              ) : (
                <img src={subtitle} alt="pciDss" className="mx-auto mt-8" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
