import React from "react";
import Numbers from "./Numbers";
import SalesDetails from "./SalesDetails";
import DealsDetails from "./DealsDetails";
import Banner from "./Banner";
import Card from "./Card";

const Products = () => {
  return (
    <div className="ml-[240px] mt-[70px] p-6  border min-h-screen">
      <div className=" space-y-4">
        <h1 className="text-[#202224] font-nunito-sans text-[32px] font-bold tracking-[-0.114px]">
          Products
        </h1>
        <div className="  w-full">
          <Banner />
        </div>
        <div className=" flex justify-between w-full space-x-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Products;
