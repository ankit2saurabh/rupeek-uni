import React from "react";
import AOS from "aos";
import {
  ArrowSection,
  DarkSection,
  Footer,
  GradientText,
  Header,
  LayoutWrapper,
  LighterSection,
  StickyFooter,
} from "..";
import { images } from "../../utils/constants";
import { AppStore, PlayStore } from "../../assets/svg";

const Layout = () => {
  React.useLayoutEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className="max-w-[1330px] w-full mx-auto">
        <div className="px-[20px] sm:px-[35px] md:px-[45px]">
          <Header />
        </div>
      </div>
      <video
        src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
        autoPlay={true}
        muted
        loop={true}
        playsInline
        className="w-[100vw] h-[100vh] object-cover"
      />
      <div className="w-full bottom-0 z-40 fixed md:hidden py-8 footer-background">
        <div className="w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium">
          <div className="flex flex-col transition-all ease-in">
            <button className="p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]">
              <span>Apply now</span>
              <img
                src={images.rightArrow}
                alt="right_arrow"
                width="21px"
                className="inline ml-3 css-0"
              />
            </button>
          </div>
        </div>
      </div>
      <LayoutWrapper>
        <ArrowSection />
        <LighterSection />
      </LayoutWrapper>
      <DarkSection />
      <StickyFooter />
      <div className="bg-[#222627] py-[8rem]">
        <LayoutWrapper>
          <h2 className="text-white text-center text-4xl md:max-w-6xl">
            At Uni, we’re committed to{" "}
            <GradientText text="delivering an unmatched credit experience" />{" "}
            for millions of Indians.
          </h2>
          <p className="mt-8 max-w-[500px] mx-auto text-center text-[#BFC9CC]">
            On this mission, we’ve partnered with some of the best in the
            business.
          </p>
          <div className="img-sbm mt-20">
            <img src={images.sbmBank} alt="sbmBank" className="mx-auto" />
          </div>
        </LayoutWrapper>
      </div>
      <div className="bg-black py-16">
        <LayoutWrapper>
          <p className="max-w-3xl mx-auto text-center text-[#BFC9CC] text-xl">
            Please note that to stay compliant with RBI guidelines, we have
            discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
          </p>
        </LayoutWrapper>
      </div>
      <div className="bg-[linear-gradient(158deg,#5ad6c4,#fdef78)] py-20 md:py-[8rem]">
        <LayoutWrapper>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row mb-8 md:mb-0">
            <div className="heading-div flex-1">
              <p className="mb-6 sm:mb-0 text-[28px] font-medium md:text-[42px] leading-tight">
                Download now to get started
              </p>
            </div>
            <div className="button-div flex flex-1 md:justify-center space-x-2">
              <button className="flex items-center justify-center space-x-2 w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg border-2 rounded-xl border-black google-btn-2">
                <span className="w-4">
                  <PlayStore />
                </span>
                <span>Google Play</span>
              </button>
              <button className="flex items-center justify-center space-x-2 w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg border-2 rounded-xl border-black google-btn-2">
                <span className="w-4">
                  <AppStore />
                </span>
                <span>App Store</span>
              </button>
            </div>
          </div>
        </LayoutWrapper>
      </div>
      <div className="bg-[#222222]">
        <LayoutWrapper>
          <div className="flex items-center justify-center py-6">
            <p className="text-[#BFC9CC]">
              Uni maintains the highest level of security standards
            </p>
            <img
              src={images.pciDss}
              className="ml-3 w-20 css-0"
              width="80px"
              loading="lazy"
              alt=""
            />
          </div>
        </LayoutWrapper>
      </div>
      <Footer />
      <div className="h-[5.8rem] border" />
    </section>
  );
};

export default Layout;
