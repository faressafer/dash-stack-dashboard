import React from "react";
import DisplayProduct from "../assets/DisplayProduct.png";

const Card = () => {
  return (
    <>
      <div className="flex justify-between space-x-2">
        <div className="border h-[497px] w-1/4 bg-white rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] relative">
          <div className="w-full h-[317px] border relative overflow-hidden">
            <img
              src={DisplayProduct}
              className="w-full h-full object-cover"
              alt="DisplayProduct"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5 41C9.17816 41 0 31.8218 0 20.5C0 9.17816 9.17816 0 20.5 0C31.8218 0 41 9.17816 41 20.5C41 31.8218 31.8218 41 20.5 41Z"
                fill="#E2EAF8"
              />
              <path
                d="M23.6599 25.09L19.0799 20.5L23.6599 15.91L22.2499 14.5L16.2499 20.5L22.2499 26.5L23.6599 25.09Z"
                fill="#626262"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41Z"
                fill="#E2EAF8"
              />
              <path
                d="M17.3401 25.09L21.9201 20.5L17.3401 15.91L18.7501 14.5L24.7501 20.5L18.7501 26.5L17.3401 25.09Z"
                fill="#626262"
              />
            </svg>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="text-[#202224] font-nunito-sans text-[18px] font-bold leading-[20px]">
                  Apple Watch Series 4
                </h3>
                <p className="text-[#4880FF] font-nunito-sans text-base font-bold leading-[20px]">
                  $120.00
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11"
                viewBox="0 0 44 44"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44Z"
                  fill="#F9F9F9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 29.883L29.191 22.383C30.4871 21.0879 30.8083 19.1083 29.9882 17.4697C29.3765 16.2467 28.2142 15.3921 26.8643 15.1731C25.5144 14.9541 24.1415 15.3973 23.1745 16.3642L22 17.538L20.8255 16.3642C19.8584 15.3973 18.4855 14.9541 17.1357 15.1731C15.7858 15.3921 14.6234 16.2467 14.0117 17.4697C13.1927 19.1076 13.5136 21.0857 14.8082 22.3807L22 29.883Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 10.88L3.29772 14.4721L5.26096 8.88997L0.391548 5.52786L6.30718 5.67003L8 0L9.69282 5.67003L15.6085 5.52786L10.739 8.88997L12.7023 14.4721L8 10.88Z"
                    fill={index < 4 ? "#FF9500" : "#FF9500"}
                    opacity={index === 4 ? "0.2" : "1"}
                  />
                </svg>
              ))}
              <p className="text-black font-nunito-sans text-sm font-semibold leading-normal tracking-tight">
                (131)
              </p>
            </div>
            <button className="w-[126px] h-[38px] flex-shrink-0 rounded-[12px] bg-[#E2EAF8] opacity-70">
              <span className="text-[#202224] font-nunito-sans text-sm font-bold leading-[28px]">
                Edit Product
              </span>
            </button>
          </div>
        </div>
        <div className="border h-[497px] w-1/4 bg-white rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] relative">
          <div className="w-full h-[317px] border relative overflow-hidden">
            <img
              src={DisplayProduct}
              className="w-full h-full object-cover"
              alt="DisplayProduct"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5 41C9.17816 41 0 31.8218 0 20.5C0 9.17816 9.17816 0 20.5 0C31.8218 0 41 9.17816 41 20.5C41 31.8218 31.8218 41 20.5 41Z"
                fill="#E2EAF8"
              />
              <path
                d="M23.6599 25.09L19.0799 20.5L23.6599 15.91L22.2499 14.5L16.2499 20.5L22.2499 26.5L23.6599 25.09Z"
                fill="#626262"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41Z"
                fill="#E2EAF8"
              />
              <path
                d="M17.3401 25.09L21.9201 20.5L17.3401 15.91L18.7501 14.5L24.7501 20.5L18.7501 26.5L17.3401 25.09Z"
                fill="#626262"
              />
            </svg>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="text-[#202224] font-nunito-sans text-[18px] font-bold leading-[20px]">
                  Apple Watch Series 4
                </h3>
                <p className="text-[#4880FF] font-nunito-sans text-base font-bold leading-[20px]">
                  $120.00
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11"
                viewBox="0 0 44 44"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44Z"
                  fill="#F9F9F9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 29.883L29.191 22.383C30.4871 21.0879 30.8083 19.1083 29.9882 17.4697C29.3765 16.2467 28.2142 15.3921 26.8643 15.1731C25.5144 14.9541 24.1415 15.3973 23.1745 16.3642L22 17.538L20.8255 16.3642C19.8584 15.3973 18.4855 14.9541 17.1357 15.1731C15.7858 15.3921 14.6234 16.2467 14.0117 17.4697C13.1927 19.1076 13.5136 21.0857 14.8082 22.3807L22 29.883Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 10.88L3.29772 14.4721L5.26096 8.88997L0.391548 5.52786L6.30718 5.67003L8 0L9.69282 5.67003L15.6085 5.52786L10.739 8.88997L12.7023 14.4721L8 10.88Z"
                    fill={index < 4 ? "#FF9500" : "#FF9500"}
                    opacity={index === 4 ? "0.2" : "1"}
                  />
                </svg>
              ))}
              <p className="text-black font-nunito-sans text-sm font-semibold leading-normal tracking-tight">
                (131)
              </p>
            </div>
            <button className="w-[126px] h-[38px] flex-shrink-0 rounded-[12px] bg-[#E2EAF8] opacity-70">
              <span className="text-[#202224] font-nunito-sans text-sm font-bold leading-[28px]">
                Edit Product
              </span>
            </button>
          </div>
        </div>
        <div className="border h-[497px] w-1/4 bg-white rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] relative">
          <div className="w-full h-[317px] border relative overflow-hidden">
            <img
              src={DisplayProduct}
              className="w-full h-full object-cover"
              alt="DisplayProduct"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5 41C9.17816 41 0 31.8218 0 20.5C0 9.17816 9.17816 0 20.5 0C31.8218 0 41 9.17816 41 20.5C41 31.8218 31.8218 41 20.5 41Z"
                fill="#E2EAF8"
              />
              <path
                d="M23.6599 25.09L19.0799 20.5L23.6599 15.91L22.2499 14.5L16.2499 20.5L22.2499 26.5L23.6599 25.09Z"
                fill="#626262"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41Z"
                fill="#E2EAF8"
              />
              <path
                d="M17.3401 25.09L21.9201 20.5L17.3401 15.91L18.7501 14.5L24.7501 20.5L18.7501 26.5L17.3401 25.09Z"
                fill="#626262"
              />
            </svg>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="text-[#202224] font-nunito-sans text-[18px] font-bold leading-[20px]">
                  Apple Watch Series 4
                </h3>
                <p className="text-[#4880FF] font-nunito-sans text-base font-bold leading-[20px]">
                  $120.00
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11"
                viewBox="0 0 44 44"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44Z"
                  fill="#F9F9F9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 29.883L29.191 22.383C30.4871 21.0879 30.8083 19.1083 29.9882 17.4697C29.3765 16.2467 28.2142 15.3921 26.8643 15.1731C25.5144 14.9541 24.1415 15.3973 23.1745 16.3642L22 17.538L20.8255 16.3642C19.8584 15.3973 18.4855 14.9541 17.1357 15.1731C15.7858 15.3921 14.6234 16.2467 14.0117 17.4697C13.1927 19.1076 13.5136 21.0857 14.8082 22.3807L22 29.883Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 10.88L3.29772 14.4721L5.26096 8.88997L0.391548 5.52786L6.30718 5.67003L8 0L9.69282 5.67003L15.6085 5.52786L10.739 8.88997L12.7023 14.4721L8 10.88Z"
                    fill={index < 4 ? "#FF9500" : "#FF9500"}
                    opacity={index === 4 ? "0.2" : "1"}
                  />
                </svg>
              ))}
              <p className="text-black font-nunito-sans text-sm font-semibold leading-normal tracking-tight">
                (131)
              </p>
            </div>
            <button className="w-[126px] h-[38px] flex-shrink-0 rounded-[12px] bg-[#E2EAF8] opacity-70">
              <span className="text-[#202224] font-nunito-sans text-sm font-bold leading-[28px]">
                Edit Product
              </span>
            </button>
          </div>
        </div>
        <div className="border h-[497px] w-1/4 bg-white rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] relative">
          <div className="w-full h-[317px] border relative overflow-hidden">
            <img
              src={DisplayProduct}
              className="w-full h-full object-cover"
              alt="DisplayProduct"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5 41C9.17816 41 0 31.8218 0 20.5C0 9.17816 9.17816 0 20.5 0C31.8218 0 41 9.17816 41 20.5C41 31.8218 31.8218 41 20.5 41Z"
                fill="#E2EAF8"
              />
              <path
                d="M23.6599 25.09L19.0799 20.5L23.6599 15.91L22.2499 14.5L16.2499 20.5L22.2499 26.5L23.6599 25.09Z"
                fill="#626262"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41Z"
                fill="#E2EAF8"
              />
              <path
                d="M17.3401 25.09L21.9201 20.5L17.3401 15.91L18.7501 14.5L24.7501 20.5L18.7501 26.5L17.3401 25.09Z"
                fill="#626262"
              />
            </svg>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="text-[#202224] font-nunito-sans text-[18px] font-bold leading-[20px]">
                  Apple Watch Series 4
                </h3>
                <p className="text-[#4880FF] font-nunito-sans text-base font-bold leading-[20px]">
                  $120.00
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11"
                viewBox="0 0 44 44"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44Z"
                  fill="#F9F9F9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 29.883L29.191 22.383C30.4871 21.0879 30.8083 19.1083 29.9882 17.4697C29.3765 16.2467 28.2142 15.3921 26.8643 15.1731C25.5144 14.9541 24.1415 15.3973 23.1745 16.3642L22 17.538L20.8255 16.3642C19.8584 15.3973 18.4855 14.9541 17.1357 15.1731C15.7858 15.3921 14.6234 16.2467 14.0117 17.4697C13.1927 19.1076 13.5136 21.0857 14.8082 22.3807L22 29.883Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 10.88L3.29772 14.4721L5.26096 8.88997L0.391548 5.52786L6.30718 5.67003L8 0L9.69282 5.67003L15.6085 5.52786L10.739 8.88997L12.7023 14.4721L8 10.88Z"
                    fill={index < 4 ? "#FF9500" : "#FF9500"}
                    opacity={index === 4 ? "0.2" : "1"}
                  />
                </svg>
              ))}
              <p className="text-black font-nunito-sans text-sm font-semibold leading-normal tracking-tight">
                (131)
              </p>
            </div>
            <button className="w-[126px] h-[38px] flex-shrink-0 rounded-[12px] bg-[#E2EAF8] opacity-70">
              <span className="text-[#202224] font-nunito-sans text-sm font-bold leading-[28px]">
                Edit Product
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
