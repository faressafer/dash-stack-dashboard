import React from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdFavoriteBorder, MdOutlineContactPhone } from "react-icons/md";
import { IoChatbubblesOutline, IoGiftOutline, IoSettingsOutline, IoArchiveOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiTodoLine, RiLogoutBoxRLine, RiTeamLine } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
import { FaElementor, FaTableList } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-[240px] bg-white shadow-md z-40 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      <div className="justify-between items-center">
        <div className="text-xl font-extrabold tracking-tight text-slate-900 m-9 flex justify-center">
          DashStack
        </div>

        <div className="ml-3 mr-3 border bg-[#4880FF] rounded-[6px] flex items-center justify-start p-3">
          <FaHome className="text-white w-[25px] h-[25px] mr-5" />
          <span className="text-white font-nunito-san tracking-custom">Dashboard</span>
        </div>

        <div className="ml-3 mr-3 mt-2 p-3 flex items-center">
          <AiOutlineProduct className="w-[25px] h-[25px] mr-5" />
          <span className="font-nunito-san tracking-custom">Products</span>
        </div>

        <div className="ml-3 mr-3 mt-2 p-3 flex items-center">
          <MdFavoriteBorder className="w-[25px] h-[25px] mr-5" />
          <span className="font-nunito-san tracking-custom">Favorites</span>
        </div>

        <div className="ml-3 mr-3 mt-2 p-3 flex items-center">
          <IoChatbubblesOutline className="w-[25px] h-[25px] mr-5" />
          <span className="font-nunito-san tracking-custom">Inbox</span>
        </div>

        <div className="ml-3 mr-3 mt-2 p-3 flex items-center">
          <CiBoxList className="w-[25px] h-[25px] mr-5" />
          <span className="font-nunito-san tracking-custom">Order Lists</span>
        </div>

        <div className="ml-3 mr-3 mt-2 p-3 flex items-center">
          <IoArchiveOutline className="w-[25px] h-[25px] mr-5" />
          <span className="font-nunito-san tracking-custom">Product Stock</span>
        </div>

        <div className="text-custom-gray font-nunito-sans font-bold text-[12px] ml-3 mt-4">
          Pages
        </div>

        <div className="ml-3 mr-3 mt-2 p-3 flex items-center">
          <IoGiftOutline className="w-[25px] h-[25px] mr-5" />
          <span className="font-nunito-san tracking-custom">Pricing</span>
        </div>

        <div className="ml-3 mr-3 mt-2 p-3 flex items-center">
          <FaRegCalendarAlt className="w-[25px] h-[25px] mr-5" />
          <span className="font-nunito-san tracking-custom">Calendar</span>
        </div>

        <div className="ml-3 mr-3 mt-2 p-3 flex items-center">
          <RiTodoLine className="w-[25px] h-[25px] mr-5" />
          <span className="font-nunito-san tracking-custom">To-Do</span>
        </div>

        <div className="ml-3 mr-3 mt-2 p-3 flex items-center">
          <MdOutlineContactPhone className="w-[25px] h-[25px] mr-5" />
          <span className="font-nunito-san tracking-custom">Contact</span>
        </div>

        <div className="ml-3 mr-3 mt-2 p-3 flex items-center">
          <TbFileInvoice className="w-[25px] h-[25px] mr-5" />
          <span className="font-nunito-san tracking-custom">Invoice</span>
        </div>

        <div className="ml-3 mr-3 mt-2 p-3 flex items-center">
          <FaElementor className="w-[25px] h-[25px] mr-5" />
          <span className="font-nunito-san tracking-custom">Element</span>
        </div>

        <div className="ml-3 mr-3 mt-2 p-3 flex items-center">
          <FaTableList className="w-[25px] h-[25px] mr-5" />
          <span className="font-nunito-san tracking-custom">Table</span>
        </div>

        <div className="ml-3 mr-3 mt-2 p-3 flex items-center">
          <RiTeamLine className="w-[25px] h-[25px] mr-5" />
          <span className="font-nunito-san tracking-custom">Team</span>
        </div>

        <div className="ml-3 mr-3 mt-2 p-3 flex items-center">
          <IoSettingsOutline className="w-[25px] h-[25px] mr-5" />
          <span className="font-nunito-san tracking-custom">Settings</span>
        </div>

        <div className="ml-3 mr-3 mt-2 p-3 flex items-center">
          <RiLogoutBoxRLine className="w-[25px] h-[25px] mr-5" />
          <span className="font-nunito-san tracking-custom">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
