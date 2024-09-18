import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { TEChart } from "tw-elements-react";

const SalesDetails = () => {
  return (
    <div className="bg-white h-[444px]  rounded-[14px] p-4 space-y-3 flex flex-col">
      <div className=" flex justify-between">
        <h2 className="text-[#202224] font-nunito-sans text-xl font-bold leading-[20px]">
          Sales Details
        </h2>
        <div className="rounded border-[0.6px] border-[#D5D5D5] bg-[#FCFDFD] w-[115px] h-[28px] flex-shrink-0 flex items-center p-4">
          <p className="mr-1">October</p>
          <IoChevronDown />
        </div>
      </div>
      <div className="flex-grow ">
        <TEChart
          type="line"
          data={{
            labels: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            datasets: [
              {
                label: "Traffic",
                data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

export default SalesDetails;
