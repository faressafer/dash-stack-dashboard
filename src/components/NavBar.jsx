import React from "react";
import { IoReorderThreeOutline, IoSearch, IoChevronDown } from "react-icons/io5";
import UK from "../assets/UK.png";
import profile from "../assets/profile.png";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 ml-[240px] flex justify-between p-4 h-[70px] bg-white shadow-md">
      <div className="flex justify-between w-full">
        <div className="flex">
          <IoReorderThreeOutline className="w-[35px] h-[35px] mr-4" />
          <div className="relative w-[388px] h-[38px] flex-shrink-0">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <IoSearch className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full pl-12 rounded-[19px] border-[0.6px] border-search-gray bg-custom-bg placeholder-gray-500 text-sm"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0277 0C7.73472 0 5.80843 1.72411 5.55522 4.00306L4.5 13.5H1.5C0.671573 13.5 0 14.1716 0 15V16.5C0 17.3284 0.671573 18 1.5 18H22.5C23.3284 18 24 17.3284 24 16.5V15C24 14.1716 23.3284 13.5 22.5 13.5H19.5L18.4448 4.00306C18.1916 1.72411 16.2653 0 13.9723 0H10.0277Z"
              fill="#4880FF"
            />
            <rect
              opacity="0.3"
              x="9"
              y="19.5"
              width="6"
              height="6"
              rx="2.25"
              fill="#FF0000"
            />
          </svg>
          <div className="flex items-center space-x-2">
            <img
              src={UK}
              alt="country flag"
              className="w-[40px] h-[27px] flex-shrink-0"
            />
            <span className="text-gray-700 font-medium">United Kingdom</span>
            <IoChevronDown className="h-5 w-5 text-gray-500" />
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative w-[50px] h-[52px] flex-shrink-0">
              <img
                src={profile}
                alt="User"
                className="w-full h-full border rounded-lg"
              />
            </div>
            <div className="text-gray-800 font-medium">
              <span className="text-gray-700 font-bold text-sm">Fares</span>
              <p className="text-gray-600 font-semibold text-xs font-nunito">Admin</p>
            </div>
            <IoChevronDown className="h-5 w-5 text-gray-500 border rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
