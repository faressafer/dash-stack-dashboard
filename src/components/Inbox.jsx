import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationInbox from "./NavigationInbox";
import InboxMail from "./InboxMail";


const Inbox = () => {
  return (
    <div className="ml-[240px] mt-[70px] p-6 border min-h-screen space-y-4">
      <h1 className="text-[#202224] font-nunito-sans text-[32px] font-bold tracking-[-0.114px]">
        Inbox
      </h1>
      <div className="flex space-x-4">
        <div className="w-1/6 border min-h-screen">
          <NavigationInbox />
        </div>
        <div className="w-5/6 border">
          {/* Define nested routes for the Inbox component */}
          <Routes>
            {/* Subroute to display InboxMail */}
            <Route path="inbox" element={<InboxMail />} />
            <Route path="inbox" element={<InboxMail />} />
            <Route path="inbox" element={<InboxMail />} />
            <Route path="inbox" element={<InboxMail />} />
            <Route path="inbox" element={<InboxMail />} />
            <Route path="inbox" element={<InboxMail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
