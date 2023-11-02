import React, { SetStateAction } from "react";

const StyledCheckBox = ({
  setIsChecked,
  isChecked,
}: {
  setIsChecked: React.Dispatch<SetStateAction<boolean>>;
  isChecked: boolean;
}) => {
  return (
    <div className="flex mt-3">
      <input
        type="checkbox"
        name="labelCheck"
        id="labelCheck"
        className="mr-2 block"
        defaultChecked={isChecked}
        onChange={() => setIsChecked((state) => !state)}
      />
      <label
        htmlFor="labelCheck"
        className="consent text-white md:text-black text-[10px] cursor-pointer"
      >
        You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp
        to guide you through your application.
      </label>
    </div>
  );
};

export default StyledCheckBox;
