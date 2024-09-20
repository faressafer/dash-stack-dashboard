import React from "react";
import NavigationInbox from "./NavigationInbox";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Inbox = () => {
  const cardCount = 8; // Total number of cards
  const cardsPerRow = 4; // Cards in each row

  return (
    <BrowserRouter>
      <div className="ml-[240px] mt-[70px] p-6 border min-h-screen space-y-4">
        <h1 className="text-[#202224] font-nunito-sans text-[32px] font-bold tracking-[-0.114px]">
          Inbox
        </h1>
        <div className="flex space-x-4">
          <div className="w-1/6 border min-h-screen">
            <NavigationInbox />
          </div>
          <div className="w-5/6 border">
            <Routes>
              <Route path="/inbox/InBox" element={hahahahah} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Inbox;
