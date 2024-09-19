import React from "react";
import Banner from "./Banner";
import Card from "./Card";

const Inbox = () => {
  const cardCount = 8; // Total number of cards
  const cardsPerRow = 4; // Cards in each row

  return (
    <div className="ml-[240px] mt-[70px] p-6 border min-h-screen space-y-4">
      <h1 className="text-[#202224] font-nunito-sans text-[32px] font-bold tracking-[-0.114px]">
        Inbox
      </h1>
      <div className="flex space-x-4">
        <div className="w-1/3 border min-h-screen">
            navigation
        </div>
        <div className="w-2/3 border">
            content
        </div>
      </div>
    </div>
  );
};

export default Inbox;
