import React, { KeyboardEvent, useState } from "react";
import { Close, Exclamatory, TickRight } from "../../assets/svg";
import { Checkbox } from "..";
import { MOBILE_NUMBER_REGEX } from "../../utils/constants";

const InputForm = ({ isFullWidth }: { isFullWidth?: boolean }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [inputNumber, setInputNumber] = useState("");

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    if (
      /^[0-9]$/.test(key) ||
      event.ctrlKey ||
      event.metaKey ||
      key === "Backspace"
    ) {
      return;
    }
    event.preventDefault();
  };

  return (
    <form
      className={`hidden md:block  ${isFullWidth ? "max-w-[20rem]" : "w-full"}`}
    >
      <div className="flex items-center justify-between">
        <div className="full-width-banner">
          <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
            <div className="flex items-center">
              <input
                className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                placeholder="Enter Phone Number"
                value={inputNumber}
                onChange={(event) => setInputNumber(event.target.value)}
                maxLength={10}
                onKeyDown={handleKeyPress}
              />
              {inputNumber.length && (
                <span className="w-6 flex items-center justify-end h-full">
                  {inputNumber.length < 9 ? (
                    <Close />
                  ) : MOBILE_NUMBER_REGEX.test(inputNumber) ? (
                    <TickRight />
                  ) : (
                    <Exclamatory />
                  )}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="text-center text-xs leading-7 justify-between pt-2 ml-2 bg-[#FDEE78] rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
              disabled={!isChecked}
            >
              Apply Now
            </button>
          </div>
          {isFullWidth && (
            <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
          )}
        </div>
        {!isFullWidth && (
          <div className="full-width-page max-w-[20rem]">
            <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
          </div>
        )}
      </div>
    </form>
  );
};

export default InputForm;
