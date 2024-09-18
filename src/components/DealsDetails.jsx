import React from "react";
import { IoChevronDown } from "react-icons/io5";
import product1 from "../assets/product1.png";

const DealsDetails = () => {
  return (
    <div className="bg-white h-[444px]  rounded-[14px] p-4 space-y-3 flex flex-col">
      <div className=" flex justify-between">
        <h2 className="text-[#202224] font-nunito-sans text-xl font-bold leading-[20px]">
          Deals Details
        </h2>
        <div className="rounded border-[0.6px] border-[#D5D5D5] bg-[#FCFDFD] w-[115px] h-[28px] flex-shrink-0 flex items-center p-4">
          <p className="mr-1">October</p>
          <IoChevronDown />
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full bg-white  rounded-lg ">
          <thead className="w-[1074px] h-[48px] bg-[#F1F4F9] rounded-[12px] flex-shrink-0 mb-8">
            <tr>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">
                Product Name
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">
                Location
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">
                Date-Time
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">
                Amount
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="w-[1074px]">
            <tr className="h-[57px] bg-white border-b">
              <td className="px-4 py-2 text-left text-gray-700">
                <div className="flex items-center space-x-3">
                  <img
                    src={product1}
                    alt="Product 1"
                    className="w-8 h-8 rounded"
                  />
                  <span>Product 1</span>
                </div>
              </td>
              <td className="px-4 py-2 text-left text-gray-700">New York</td>
              <td className="px-4 py-2 text-left text-gray-700">
                2024-09-15 14:00
              </td>
              <td className="px-4 py-2 text-left text-gray-700">$100</td>
              <td className="px-4 py-2 text-left text-gray-700">Completed</td>
            </tr>
            <tr className="h-[57px] bg-white border-b">
              <td className="px-4 py-2 text-left text-gray-700">
                <div className="flex items-center space-x-3">
                  <img
                    src={product1}
                    alt="Product 1"
                    className="w-8 h-8 rounded"
                  />
                  <span>Product 1</span>
                </div>
              </td>
              <td className="px-4 py-2 text-left text-gray-700">New York</td>
              <td className="px-4 py-2 text-left text-gray-700">
                2024-09-15 14:00
              </td>
              <td className="px-4 py-2 text-left text-gray-700">$100</td>
              <td className="px-4 py-2 text-left text-gray-700">Completed</td>
            </tr>
            <tr className="h-[57px] bg-white border-b">
              <td className="px-4 py-2 text-left text-gray-700">
                <div className="flex items-center space-x-3">
                  <img
                    src={product1}
                    alt="Product 1"
                    className="w-8 h-8 rounded"
                  />
                  <span>Product 1</span>
                </div>
              </td>
              <td className="px-4 py-2 text-left text-gray-700">New York</td>
              <td className="px-4 py-2 text-left text-gray-700">
                2024-09-15 14:00
              </td>
              <td className="px-4 py-2 text-left text-gray-700">$100</td>
              <td className="px-4 py-2 text-left text-gray-700">Completed</td>
            </tr>
            <tr className="h-[57px] bg-white border-b">
              <td className="px-4 py-2 text-left text-gray-700">
                <div className="flex items-center space-x-3">
                  <img
                    src={product1}
                    alt="Product 1"
                    className="w-8 h-8 rounded"
                  />
                  <span>Product 1</span>
                </div>
              </td>
              <td className="px-4 py-2 text-left text-gray-700">New York</td>
              <td className="px-4 py-2 text-left text-gray-700">
                2024-09-15 14:00
              </td>
              <td className="px-4 py-2 text-left text-gray-700">$100</td>
              <td className="px-4 py-2 text-left text-gray-700">Completed</td>
            </tr>
            <tr className="h-[57px] bg-white border-b">
              <td className="px-4 py-2 text-left text-gray-700">
                <div className="flex items-center space-x-3">
                  <img
                    src={product1}
                    alt="Product 1"
                    className="w-8 h-8 rounded"
                  />
                  <span>Product 1</span>
                </div>
              </td>
              <td className="px-4 py-2 text-left text-gray-700">New York</td>
              <td className="px-4 py-2 text-left text-gray-700">
                2024-09-15 14:00
              </td>
              <td className="px-4 py-2 text-left text-gray-700">$100</td>
              <td className="px-4 py-2 text-left text-gray-700">Completed</td>
            </tr>
            <tr className="h-[57px] bg-white border-b">
              <td className="px-4 py-2 text-left text-gray-700">
                <div className="flex items-center space-x-3">
                  <img
                    src={product1}
                    alt="Product 1"
                    className="w-8 h-8 rounded"
                  />
                  <span>Product 1</span>
                </div>
              </td>
              <td className="px-4 py-2 text-left text-gray-700">New York</td>
              <td className="px-4 py-2 text-left text-gray-700">
                2024-09-15 14:00
              </td>
              <td className="px-4 py-2 text-left text-gray-700">$100</td>
              <td className="px-4 py-2 text-left text-gray-700">Completed</td>
            </tr>
            <tr className="h-[57px] bg-white border-b">
              <td className="px-4 py-2 text-left text-gray-700">
                <div className="flex items-center space-x-3">
                  <img
                    src={product1}
                    alt="Product 1"
                    className="w-8 h-8 rounded"
                  />
                  <span>Product 1</span>
                </div>
              </td>
              <td className="px-4 py-2 text-left text-gray-700">New York</td>
              <td className="px-4 py-2 text-left text-gray-700">
                2024-09-15 14:00
              </td>
              <td className="px-4 py-2 text-left text-gray-700">$100</td>
              <td className="px-4 py-2 text-left text-gray-700">Completed</td>
            </tr>
            <tr className="h-[57px] bg-white border-b">
              <td className="px-4 py-2 text-left text-gray-700">
                <div className="flex items-center space-x-3">
                  <img
                    src={product1}
                    alt="Product 1"
                    className="w-8 h-8 rounded"
                  />
                  <span>Product 1</span>
                </div>
              </td>
              <td className="px-4 py-2 text-left text-gray-700">New York</td>
              <td className="px-4 py-2 text-left text-gray-700">
                2024-09-15 14:00
              </td>
              <td className="px-4 py-2 text-left text-gray-700">$100</td>
              <td className="px-4 py-2 text-left text-gray-700">Completed</td>
            </tr>
            <tr className="h-[57px] bg-white border-b">
              <td className="px-4 py-2 text-left text-gray-700">
                <div className="flex items-center space-x-3">
                  <img
                    src={product1}
                    alt="Product 1"
                    className="w-8 h-8 rounded"
                  />
                  <span>Product 1</span>
                </div>
              </td>
              <td className="px-4 py-2 text-left text-gray-700">New York</td>
              <td className="px-4 py-2 text-left text-gray-700">
                2024-09-15 14:00
              </td>
              <td className="px-4 py-2 text-left text-gray-700">$100</td>
              <td className="px-4 py-2 text-left text-gray-700">Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DealsDetails;
