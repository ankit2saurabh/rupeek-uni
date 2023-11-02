import React from "react";
import { ILogo } from "../../utils/interface";

const ArrowRight: React.FC<ILogo> = ({ color = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
        color={color}
      />
    </svg>
  );
};

export default ArrowRight;
