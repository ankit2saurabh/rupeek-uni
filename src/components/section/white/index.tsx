import React from "react";
import { BIG_CARD_DATA } from "../../../utils/constants";
import BigCard from "../../card/bigCard";

const LighterSection = () => {
  return (
    <section>
      {BIG_CARD_DATA.map((value) => (
        <BigCard
          key={value.id}
          titleBold={value.titleBold}
          titleNormal={value.titleNormal}
          imageSrc={value.imageSrc}
          isReverse={value.isReverse}
          {...(value.subtitle && { subtitle: value.subtitle })}
        />
      ))}
      <h2 className="text-4xl font-[400] text-[#1A202C] md:text-center mt-16 mb-16 md:mb-32">
        Lifetime <span className="text-[#5BD5C4]">frees.</span>{" "}
        <span className="inline-block md:inline">No joining fee.</span> <br />
        No annual charges.
      </h2>
    </section>
  );
};

export default LighterSection;
