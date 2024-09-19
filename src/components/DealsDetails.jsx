import React from "react";
import { IoChevronDown } from "react-icons/io5";
import product1 from "../assets/product1.png";
import { productData, months } from "../dummyData"; // Import data from the new file

const DealsDetails = () => {
  return (
    <div className="bg-white h-[444px] rounded-[14px] p-4 space-y-3 flex flex-col">
      <div className="flex justify-between">
        <h2 className="text-[#202224] font-nunito-sans text-xl font-bold leading-[20px]">
          Deals Details
        </h2>
        <div className="rounded border-[0.6px] border-[#D5D5D5] bg-[#FCFDFD] w-[115px] h-[28px] flex-shrink-0 flex items-center p-4">
          <p className="mr-1">{months[3]}</p>
          <IoChevronDown />
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="w-[1074px] h-[48px] bg-[#F1F4F9] rounded-[12px] flex-shrink-0 mb-8">
            <tr>
              <th
                scope="col"
                className="px-4 py-2 text-left font-semibold text-gray-700"
              >
                Product Name
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left font-semibold text-gray-700"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left font-semibold text-gray-700"
              >
                Date-Time
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left font-semibold text-gray-700"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left font-semibold text-gray-700"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="w-[1074px]">
            {productData.map((product, index) => (
              <tr key={index} className="h-[57px] bg-white border-b">
                <td className="px-4 py-2 text-left text-gray-700">
                  <div className="flex items-center space-x-3">
                    <img
                      src={product1}
                      alt={product.name}
                      className="w-8 h-8 rounded"
                    />
                    <span>{product.name}</span>
                  </div>
                </td>
                <td className="px-4 py-2 text-left text-gray-700">
                  {product.location}
                </td>
                <td className="px-4 py-2 text-left text-gray-700">
                  {product.dateTime}
                </td>
                <td className="px-4 py-2 text-left text-gray-700">
                  {product.amount}
                </td>
                <td className="px-4 py-2 text-left text-gray-700">
                  {product.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DealsDetails;
