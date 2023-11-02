import React from "react";
import LayoutWrapper from "../layout/layoutWrapper";
import { Logo } from "../../assets/svg";
import { SOCIAL_MEDIA } from "../../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-24">
      <LayoutWrapper>
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <span className="-my-8">
              <Logo color="#fff" size={120} />
            </span>
          </div>
          <p className="text-[#8D8D94] mb-3 text-[13px] md:text-base">
            Indiqube Sigma No.3/B, Nexus
            <br /> Koramangala 3rd Block SBI Colony,
            <br />
            Koramangala, Bengaluru, Karnataka 560034
          </p>
          <p className="text-[#8D8D94]">
            <span>Contact Us: 080 68216821</span>
            <br />
            <span>
              Email: <a href="mailto:care@uni.club">care@uni.club</a>
            </span>
          </p>
          <div className="mt-4 border-t w-full">
            <p className="py-4">
              <a
                href="https://www.sbmbank.co.in/aboutus/grievance-redressal-mechanism.php"
                className="text-[#FFFFFF]"
              >
                <u>Grievance Redressal Mechanism</u> - SBM Bank India
              </a>
            </p>
            <div className="h-[1px] spacer-gradient-border" />
          </div>
          <div className="mt-4 flex items-center justify-between flex-col md:flex-row w-full pt-8 inv md:visited:">
            <div className="flex items-center space-x-4 flex-1 flex-col md:flex-row">
              {SOCIAL_MEDIA.map(({ id, title, link }) => (
                <a href={link} key={id}>
                  {title}
                </a>
              ))}
            </div>
            <div className="flex flex-1 items-center justify-end flex-col md:flex-row mt-12 md:mt-0">
              <p className="whitespace-nowrap">
                Credit Card T&Cs <span className="mx-3">|</span>
              </p>
              <p className="whitespace-nowrap">
                Uni T&Cs<span className="mx-3">|</span>
              </p>
              <p className="whitespace-nowrap">
                Lending Partner TnCs<span className="mx-3">|</span>
              </p>
              <p className="whitespace-nowrap">Lending Partner TnCs</p>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </footer>
  );
};

export default Footer;
