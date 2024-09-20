import React from "react";
import { Link } from "react-router-dom";

const NavigationInbox = () => {
  return (
    <div className="border p-4 space-y-4 bg-white rounded-[14px]">
      <button className="w-full h-[43px] flex-shrink-0 rounded-lg opacity-90 bg-[#4880FF]">
        + Compose
      </button>
      <h4 className="text-[#202224] font-nunito-sans text-[16px] font-bold leading-normal tracking-[-0.057px]">
        My Email
      </h4>

      {/* Inbox Link */}
      <Link to="/inbox/InBox">
        <div className="w-full h-[43px] rounded-md flex items-center border p-4 justify-between mt-1">
          <div className="flex space-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
            >
              <rect
                x="1.36377"
                y="1.54545"
                width="15.2727"
                height="10.9091"
                rx="1.5"
                stroke="#202224"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.39 1.94545L10.4671 6.50109C9.60228 7.16636 8.39806 7.16636 7.53326 6.50109L1.61035 1.94545"
                stroke="#202224"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[#202224] font-nunito-sans text-[14px] font-semibold leading-normal tracking-[-0.05px]">
              Inbox
            </p>
          </div>
          <span className="text-[#202224] text-right font-nunito-sans text-[14px] font-semibold leading-normal opacity-60">
            1234
          </span>
        </div>
      </Link>
      {/* STARRED LINK */}
      <Link to="/Inbox/starred">
        <div className="w-full h-[43px] rounded-md flex items-center border p-4 justify-between mt-1">
          <div className="flex space-x-2  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.48588 1.8L11.7165 6.21933L16.0099 6.64467C16.2186 6.66201 16.3981 6.79917 16.4698 6.99597C16.5414 7.19277 16.492 7.41325 16.3432 7.56067L12.8099 11.0627L14.1199 15.8213C14.1746 16.0275 14.1034 16.2466 13.9378 16.3811C13.7722 16.5156 13.5431 16.5405 13.3525 16.4447L8.99988 14.2893L4.65322 16.442C4.46263 16.5378 4.23356 16.513 4.06799 16.3785C3.90241 16.244 3.83113 16.0248 3.88588 15.8187L5.19588 11.06L1.65988 7.558C1.51114 7.41058 1.46173 7.1901 1.53335 6.9933C1.60496 6.79651 1.78451 6.65934 1.99322 6.642L6.28655 6.21667L8.51388 1.8C8.60728 1.61759 8.79495 1.50284 8.99988 1.50284C9.20481 1.50284 9.39249 1.61759 9.48588 1.8Z"
                stroke="#202224"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[#202224] font-nunito-sans text-[14px] font-semibold leading-normal tracking-[-0.05px]">
              Starred
            </p>
          </div>
          <span className="text-[#202224] text-right font-nunito-sans text-[14px] font-semibold leading-normal opacity-60">
            245
          </span>
        </div>
      </Link>

      {/* SENT LINK */}
      <Link to="/Inbox/Links">
        {" "}
        <div className="w-full h-[43px] rounded-md flex items-center border p-4 justify-between mt-1">
          <div className="flex space-x-2  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.36671 6.92466C0.948123 6.80658 0.655386 6.42944 0.644826 5.99464C0.634266 5.55984 0.908349 5.16893 1.32071 5.03066L14.7014 0.666665C14.8801 0.608408 15.0764 0.655157 15.2096 0.787718C15.3429 0.92028 15.3907 1.11631 15.3334 1.29533L10.9727 14.6827C10.8351 15.0958 10.4438 15.3706 10.0085 15.3598C9.57314 15.3491 9.19586 15.0554 9.07871 14.636L7.58138 8.41533L1.36671 6.92466Z"
                stroke="#202224"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.2102 0.786667L7.58154 8.41533"
                stroke="#202224"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[#202224] font-nunito-sans text-[14px] font-semibold leading-normal tracking-[-0.05px]">
              Sent
            </p>
          </div>
          <span className="text-[#202224] text-right font-nunito-sans text-[14px] font-semibold leading-normal opacity-60">
            25.532
          </span>
        </div>
      </Link>

      {/* Draft Link */}
      <Link to="/Inbox/Link">
        <div className="w-full h-[43px] rounded-md flex items-center border p-4 justify-between mt-1">
          <div className="flex space-x-2  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.7933 2.20666C15.3346 1.74992 14.7124 1.49544 14.0651 1.49982C13.4178 1.5042 12.7991 1.76709 12.3467 2.23L2.68 11.8967L1.5 16.5L6.10333 15.3193L15.77 5.65266C16.233 5.2004 16.496 4.58177 16.5004 3.93453C16.5048 3.28729 16.2502 2.66516 15.7933 2.20666Z"
                stroke="#202224"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0708 2.50667L15.4935 5.92933"
                stroke="#202224"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.68066 11.896L6.10666 15.316"
                stroke="#202224"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[#202224] font-nunito-sans text-[14px] font-semibold leading-normal tracking-[-0.05px]">
              Draft
            </p>
          </div>
          <span className="text-[#202224] text-right font-nunito-sans text-[14px] font-semibold leading-normal opacity-60">
            09
          </span>
        </div>
      </Link>

      {/* Spam */}
      <Link to="/Inbox/Spam">
        {" "}
        <div className="w-full h-[43px] rounded-md flex items-center border p-4 justify-between mt-1">
          <div className="flex space-x-2  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M8.49984 12.9998C8.36177 12.9998 8.24984 13.1118 8.24984 13.2498C8.24984 13.3879 8.36177 13.4998 8.49984 13.4998C8.63791 13.4998 8.74984 13.3879 8.74984 13.2498C8.74984 13.1118 8.63791 12.9998 8.49984 12.9998V12.9998"
                stroke="black"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.49984 10.9998V5.99985"
                stroke="black"
                stroke-width="1.2"
                stroke-linecap="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.58067 1.67317C9.37826 1.2611 8.95911 1 8.50001 1C8.0409 1 7.62175 1.2611 7.41934 1.67317L1.10401 14.5385C0.949457 14.8529 0.968142 15.2248 1.15343 15.5221C1.33871 15.8195 1.66434 16.0001 2.01467 15.9998H14.9853C15.3357 16.0001 15.6613 15.8195 15.8466 15.5221C16.0319 15.2248 16.0506 14.8529 15.896 14.5385L9.58067 1.67317Z"
                stroke="black"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[#202224] font-nunito-sans text-[14px] font-semibold leading-normal tracking-[-0.05px]">
              Spam
            </p>
          </div>
          <span className="text-[#202224] text-right font-nunito-sans text-[14px] font-semibold leading-normal opacity-60">
            14
          </span>
        </div>
      </Link>

      {/* Important */}

      <Link to="/Inbox/important">
        <div className="w-full h-[43px] rounded-md flex items-center border p-4 justify-between mt-1">
          <div className="flex space-x-2  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5 13C13.0523 13 13.5 12.5523 13.5 12C13.5 11.4477 13.0523 11 12.5 11C11.9477 11 11.5 11.4477 11.5 12C11.5 12.5523 11.9477 13 12.5 13Z"
                stroke="#202224"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.3493 8.13333L13.644 9.102C13.7449 9.43561 14.087 9.63404 14.4267 9.556L15.408 9.32867C15.79 9.242 16.1838 9.41464 16.3789 9.75427C16.5739 10.0939 16.5246 10.5211 16.2573 10.8073L15.5707 11.548C15.3327 11.8039 15.3327 12.2001 15.5707 12.456L16.2573 13.1967C16.5246 13.4829 16.5739 13.9101 16.3789 14.2497C16.1838 14.5894 15.79 14.762 15.408 14.6753L14.4267 14.448C14.087 14.37 13.7449 14.5684 13.644 14.902L13.3493 15.8667C13.2369 16.2418 12.8916 16.4988 12.5 16.4988C12.1084 16.4988 11.7631 16.2418 11.6507 15.8667L11.3553 14.898C11.2547 14.5645 10.9129 14.366 10.5733 14.444L9.59134 14.6713C9.20938 14.758 8.81556 14.5854 8.62048 14.2457C8.4254 13.9061 8.4747 13.4789 8.74201 13.1927L9.42867 12.452C9.66664 12.1961 9.66664 11.7999 9.42867 11.544L8.74201 10.8033C8.4747 10.5171 8.4254 10.0899 8.62048 9.75027C8.81556 9.41064 9.20938 9.238 9.59134 9.32467L10.5733 9.552C10.9129 9.62999 11.2547 9.43151 11.3553 9.098L11.6507 8.12933C11.764 7.75445 12.1099 7.49832 12.5015 7.49924C12.8931 7.50016 13.2378 7.75792 13.3493 8.13333Z"
                stroke="#202224"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.424 7.46666C16.0122 4.64865 13.9342 2.36103 11.1686 1.68117C8.403 1.00131 5.5012 2.06475 3.82982 4.37066C2.15843 6.67658 2.05069 9.76522 3.55733 12.182L1.5 16.5L5.816 14.444C6.04325 14.5854 6.27829 14.7138 6.52 14.8287"
                stroke="#202224"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[#202224] font-nunito-sans text-[14px] font-semibold leading-normal tracking-[-0.05px]">
              Important
            </p>
          </div>
          <span className="text-[#202224] text-right font-nunito-sans text-[14px] font-semibold leading-normal opacity-60">
            18
          </span>
        </div>
      </Link>

      {/* Bin */}
      <Link to="/Inbox/Bin">
        <div className="w-full h-[43px] rounded-md flex items-center border p-4 justify-between mt-1">
          <div className="flex space-x-2  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.2001 15.4H4.8001C4.13736 15.4 3.6001 14.8627 3.6001 14.2V3.39999H14.4001V14.2C14.4001 14.8627 13.8628 15.4 13.2001 15.4Z"
                stroke="black"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.1998 11.8V7"
                stroke="black"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.7999 11.8V7"
                stroke="black"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.2002 3.4H16.8002"
                stroke="black"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z"
                stroke="black"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[#202224] font-nunito-sans text-[14px] font-semibold leading-normal tracking-[-0.05px]">
              Bin
            </p>
          </div>
          <span className="text-[#202224] text-right font-nunito-sans text-[14px] font-semibold leading-normal opacity-60">
            9
          </span>
        </div>
      </Link>

      <h4 className="text-[#202224] font-nunito-sans text-[16px] font-bold leading-normal tracking-[-0.057px]">
        Label
      </h4>

      <div className="w-full h-[43px] rounded-md flex items-center  p-4 justify-between">
        <div className="flex space-x-2  items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 rounded-[9px]"
          />
          <p className="text-[#202224] font-nunito-sans text-[14px] font-semibold leading-normal tracking-[-0.05px]">
            Primary
          </p>
        </div>
      </div>

      <div className="w-full h-[43px] rounded-md flex items-center  p-4 justify-between">
        <div className="flex space-x-2  items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 rounded-[9px]"
          />
          <p className="text-[#202224] font-nunito-sans text-[14px] font-semibold leading-normal tracking-[-0.05px]">
            Social
          </p>
        </div>
      </div>
      <div className="w-full h-[43px] rounded-md flex items-center  p-4 justify-between">
        <div className="flex space-x-2  items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 rounded-[9px]"
          />
          <p className="text-[#202224] font-nunito-sans text-[14px] font-semibold leading-normal tracking-[-0.05px]">
            Work
          </p>
        </div>
      </div>
      <div className="w-full h-[43px] rounded-md flex items-center  p-4 justify-between">
        <div className="flex space-x-2  items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 rounded-[9px]"
          />
          <p className="text-[#202224] font-nunito-sans text-[14px] font-semibold leading-normal tracking-[-0.05px]">
            Friends
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavigationInbox;
