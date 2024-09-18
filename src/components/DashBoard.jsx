import React from "react";
import Numbers from "./Numbers";
import SalesDetails from "./SalesDetails";
import DealsDetails from "./DealsDetails";

const DashBoard = () => {
  return (
    <div className="ml-[240px] mt-[70px] p-6  border min-h-screen">
      <div className=" space-y-4">
        <h1 className="text-[#202224] font-nunito-sans text-[32px] font-bold tracking-[-0.114px]">
          Dashboard
        </h1>
        <div className="w-full">
            <Numbers/>
        </div>
        <div className=" w-full">
            <SalesDetails/>
        </div>
        <div className=" w-full">
            <DealsDetails/>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
