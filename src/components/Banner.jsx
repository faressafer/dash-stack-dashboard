import React from "react";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="h-[346px] border rounded-[14px] bg-[#4880FF]">
      <div className="p-6 text-white h-full flex ">
        <div className="border h-full w-[41px] flex items-center justify-start mr-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
          >
            <path
              opacity="0.730073"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.5 41C9.17816 41 0 31.8218 0 20.5C0 9.17816 9.17816 0 20.5 0C31.8218 0 41 9.17816 41 20.5C41 31.8218 31.8218 41 20.5 41Z"
              fill="#F4F4F4"
            />
            <path
              d="M23.6599 25.09L19.0799 20.5L23.6599 15.91L22.2499 14.5L16.2499 20.5L22.2499 26.5L23.6599 25.09Z"
              fill="#363636"
            />
          </svg>
        </div>
        <div className="justify-between flex border w-full">
          <div className="flex flex-col justify-between w-[413px]">
            <p className="text-white font-nunito-sans text-base font-semibold leading-[30px]">
              September 12-22
            </p>
            <h1 className="text-white font-nunito-sans text-[37px] font-extrabold leading-[48px]">
              Enjoy free home delivery in this summer{" "}
            </h1>
            <p className="text-white font-nunito-sans text-base font-semibold leading-[30px] opacity-80">
              Designer Dresses - Pick from trendy Designer Dress.{" "}
            </p>
            <button className="w-[156px] h-[44px] flex-shrink-0 rounded-[11px] bg-[#FF8743]">
              <span className="text-white font-nunito-sans text-sm font-bold leading-[28px] tracking-wide">
                Get Started
              </span>
            </button>
          </div>
          <div className="border h-full w-[41px] flex items-center justify-end ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <path
                opacity="0.730073"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.5 41C9.17816 41 0 31.8218 0 20.5C0 9.17816 9.17816 0 20.5 0C31.8218 0 41 9.17816 41 20.5C41 31.8218 31.8218 41 20.5 41Z"
                fill="#F4F4F4"
              />
              <path
                d="M23.6599 25.09L19.0799 20.5L23.6599 15.91L22.2499 14.5L16.2499 20.5L22.2499 26.5L23.6599 25.09Z"
                fill="#363636"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
