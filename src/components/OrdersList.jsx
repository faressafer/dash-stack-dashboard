import React from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";

const OrdersList = () => {
  const orders = Array(10).fill({
    id: "00001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt. 448",
    date: "04 Sep 2019",
    type: "Electric",
    status: "Completed",
  });

  return (
    <div className="ml-[240px] mt-[70px] p-6 border min-h-screen">
      <div className="space-y-4">
        <h1 className="text-[#202224] font-nunito-sans text-[32px] font-bold tracking-[-0.114px]">
          Order Lists
        </h1>
        <div className="w-[818px] h-[70px] justify-between items-center flex p-4 flex-shrink-0 rounded-[10px] border-[0.6px] border-[#D5D5D5] bg-[#F9F9FB]">
          <div className="flex space-x-4 items-center">
            <HiOutlineFilter className="w-[30px] h-[40px]" />
            <div className="h-[70px] border items-center flex p-4 w-[100px] bg-[#F9F9FB]">
              <span>Filter By</span>
            </div>
          </div>

          <div className="h-[60px] items-center flex space-x-4 p-4 w-[100px] bg-[#F9F9FB]">
            <span>Date</span>
            <IoChevronDown />
          </div>

          <div className="h-[60px] items-center flex space-x-4 p-4 w-[150px] bg-[#F9F9FB]">
            <span>Order Type</span>
            <IoChevronDown />
          </div>

          <div className="h-[60px] items-center flex space-x-4 p-4 w-[160px] bg-[#F9F9FB]">
            <span>Order Status</span>
            <IoChevronDown />
          </div>

          <div className="h-[60px] items-center flex space-x-4 p-4 w-[100px] bg-[#F9F9FB]">
            <IoChevronDown />
            <span className="text-[#EA0234] font-nunito text-[14px] font-semibold leading-normal">
              Date
            </span>
          </div>
        </div>
        <div className="w-full border overflow-x-auto rounded-lg">
          <table className="w-full bg-white rounded-lg">
            <thead className="h-[48px] bg-[#F1F4F9] rounded-[12px] flex-shrink-0 mb-8">
              <tr>
                <th scope="col" className="px-4 py-2 text-left font-semibold text-gray-700 border">ID</th>
                <th scope="col" className="px-4 py-2 text-left font-semibold text-gray-700 border">Name</th>
                <th scope="col" className="px-4 py-2 text-left font-semibold text-gray-700 border">ADDRESS</th>
                <th scope="col" className="px-4 py-2 text-left font-semibold text-gray-700 border">Date</th>
                <th scope="col" className="px-4 py-2 text-left font-semibold text-gray-700 border">Type</th>
                <th scope="col" className="px-4 py-2 text-left font-semibold text-gray-700 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-left text-gray-700">{order.id}</td>
                  <td className="px-4 py-2 text-left text-gray-700">{order.name}</td>
                  <td className="px-4 py-2 text-left text-gray-700">{order.address}</td>
                  <td className="px-4 py-2 text-left text-gray-700">{order.date}</td>
                  <td className="px-4 py-2 text-left text-gray-700">{order.type}</td>
                  <td className="px-4 py-2 text-left text-gray-700">
                    <div className="flex w-[93px] h-[27px] justify-center items-center flex-shrink-0 bg-[#00B69B] rounded-[8px] p-4">
                      <span>{order.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
