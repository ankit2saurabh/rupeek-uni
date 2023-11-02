import React, { ReactNode } from "react";

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1330px] w-full mx-auto">
      <div className="px-[20px] sm:px-[35px] md:px-[45px]">{children}</div>
    </div>
  );
};

export default LayoutWrapper;
