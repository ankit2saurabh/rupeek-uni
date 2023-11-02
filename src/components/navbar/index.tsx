import { useState } from "react";
import Logo from "../../assets/svg/logo";
import React from "react";
import { ArrowRightWhite, Close, Hamburger } from "../../assets/svg";
const Navbar = () => {
  const [isClose, setIsClose] = useState(false);
  return (
    <div className="relative">
      <div className="absolute w-full -mt-4 z-10">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Logo size={120} />
          </div>
          <div className="pressable-section relative">
            <a
              href="/"
              className="visited:text-white text-white text-sm font-medium hover:text-[#7DEDDD] bg-black bg-opacity-60 hover:bg-black rounded-xl py-[11px] px-[30px] hidden md:block"
            >
              Uni Paycheck
            </a>
            <span
              className="md:hidden"
              onClick={() => setIsClose((data) => !data)}
            >
              {isClose ? <Close /> : <Hamburger />}
            </span>
          </div>
        </div>
        <div
          className={`md:hidden -mx-5 sm:-mx-10 md:mx-0 -mt-6 border-t border-[rgba(255, 255, 255, 0.4)] ${
            isClose ? "visible" : "invisible"
          }`}
        >
          <div className="text-white bg-[rgba(0,0,0,.6)] shadow-lg transition-opacity">
            <div className="p-4 px-5 font-medium text-sm leading-7 css-5z988z">
              <a
                href="https://paychek.uni.club/"
                className="flex justify-between items-center"
              >
                <span>Uni Paychek</span>
                <ArrowRightWhite />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
