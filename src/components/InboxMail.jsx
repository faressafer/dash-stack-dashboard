import React from "react";
import { IoSearch } from "react-icons/io5";

const InboxMail = () => {
  const mailItems = new Array(12).fill(0);

  return (
    <div className="border p-4 space-y-4 bg-white rounded-[14px]">
      <div className="justify-between flex items-center">
        <div className="relative w-[332px] h-[40px] flex-shrink-0">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <IoSearch className="h-5 w-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full pl-12 rounded-[19px] border-[0.6px] border-search-gray bg-custom-bg placeholder-gray-500 text-sm"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="131"
          height="42"
          viewBox="0 0 131 42"
          fill="none"
        >
          {/* SVG content */}
        </svg>
      </div>

      {mailItems.map((_, index) => (
        <div key={index} className="flex p-3 items-center justify-between">
          <div className="justify-start space-x-4 flex w-3/5">
            <input
              id={`default-checkbox-${index}`}
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 rounded-[9px]"
            />
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
                d="M9.51719 1.31697L11.8966 6.03091L16.4761 6.48459C16.6987 6.50309 16.8902 6.6494 16.9666 6.85931C17.043 7.06923 16.9903 7.30441 16.8316 7.46165L13.0628 11.1971L14.4601 16.273C14.5185 16.4929 14.4425 16.7266 14.2659 16.8701C14.0892 17.0136 13.8449 17.0401 13.6416 16.9379L8.99879 14.6389L4.36237 16.935C4.15908 17.0373 3.91474 17.0107 3.73813 16.8673C3.56152 16.7238 3.48549 16.4901 3.54389 16.2701L4.94121 11.1943L1.1695 7.45881C1.01084 7.30156 0.958138 7.06639 1.03453 6.85647C1.11092 6.64655 1.30244 6.50025 1.52505 6.48175L6.10459 6.02806L8.4804 1.31697C8.58002 1.1224 8.7802 1 8.99879 1C9.21739 1 9.41757 1.1224 9.51719 1.31697Z"
                fill="#FFD56D"
                stroke="#FFD56D"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </svg>
            <span className="text-[#202224] font-nunito text-[14px] font-bold leading-normal">
              John Doe
            </span>
            <span className="text-[#202224] font-nunito text-[14px] font-semibold leading-normal opacity-90">
              Our Bachelor of Commerce program is ACBSP-accredited.
            </span>
          </div>

          <span className="text-[#202224] font-nunito text-[14px] font-semibold leading-normal opacity-70">
            8:38 AM
          </span>
        </div>
      ))}
    </div>
  );
};

export default InboxMail;
