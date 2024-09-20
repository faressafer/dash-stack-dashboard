import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiTodoLine } from "react-icons/ri";
import { MdOutlineContactPhone } from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import { FaElementor } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import { FaTableList } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoGiftOutline } from "react-icons/io5";
import { IoArchiveOutline } from "react-icons/io5";

const SideBar = () => {
  


  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      <div className="justify-between items-center">
        <Link
          to="/"
          className="items-center m-9 justify-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900 w-full"
        >
          DashStack
        </Link>

        <NavLink
          to="/dashboard"
          className={({ isActive }) => `w-[240px] h-[50px]`}
        >
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 h-full ${
                isActive ? "border bg-[#4880FF] rounded-[6px]" : ""
              }`}
            >
              <div className="flex m-3">
                <FaHome
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  Dashboard
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) => `w-[240px] h-[50px]`}
        >
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 rounded-[6px] ${
                isActive ? "border bg-[#4880FF]" : ""
              }`}
            >
              <div className="flex m-3">
                <AiOutlineProduct
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  Products
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) => `w-[240px] h-[50px]`}
        >
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 rounded-[6px] ${
                isActive ? "border bg-[#4880FF]" : ""
              }`}
            >
              <div className="flex m-3">
                <MdFavoriteBorder
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  Favorites
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink to="/inbox" className={({ isActive }) => `w-[240px] h-[50px]`}>
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 rounded-[6px] ${
                isActive ? "border bg-[#4880FF]" : ""
              }`}
            >
              <div className="flex m-3">
                <IoChatbubblesOutline
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  Inbox
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink
          to="/OrderLists"
          className={({ isActive }) => `w-[240px] h-[50px]`}
        >
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 rounded-[6px] ${
                isActive ? "border bg-[#4880FF]" : ""
              }`}
            >
              <div className="flex m-3">
                <CiBoxList
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  Order Lists
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink
          to="/Productstock"
          className={({ isActive }) => `w-[240px] h-[50px]`}
        >
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 rounded-[6px] ${
                isActive ? "border bg-[#4880FF]" : ""
              }`}
            >
              <div className="flex m-3">
                <IoArchiveOutline
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  Product Stock
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <div className="h-2"></div>

        <div className="w-[240px] h-[35px]">
          <div className="ml-3 h-full rounded-[6px] text-custom-gray font-nunito-sans text-[12px] font-bold leading-none tracking-custom">
            Pages
          </div>
        </div>

        <NavLink
          to="/pricing"
          className={({ isActive }) => `w-[240px] h-[50px]`}
        >
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 rounded-[6px] ${
                isActive ? "border bg-[#4880FF]" : ""
              }`}
            >
              <div className="flex m-3">
                <IoGiftOutline
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  Pricing
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) => `w-[240px] h-[50px]`}
        >
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 rounded-[6px] ${
                isActive ? "border bg-[#4880FF]" : ""
              }`}
            >
              <div className="flex m-3">
                <FaRegCalendarAlt
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  Calendar
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink to="/todo" className={({ isActive }) => `w-[240px] h-[50px]`}>
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 rounded-[6px] ${
                isActive ? "border bg-[#4880FF]" : ""
              }`}
            >
              <div className="flex m-3">
                <RiTodoLine
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  To-Do
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => `w-[240px] h-[50px]`}
        >
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 rounded-[6px] ${
                isActive ? "border bg-[#4880FF]" : ""
              }`}
            >
              <div className="flex m-3">
                <MdOutlineContactPhone
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  Contact
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink
          to="/invoice"
          className={({ isActive }) => `w-[240px] h-[50px]`}
        >
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 rounded-[6px] ${
                isActive ? "border bg-[#4880FF]" : ""
              }`}
            >
              <div className="flex m-3">
                <TbFileInvoice
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  Invoice
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink
          to="/ui-elements"
          className={({ isActive }) => `w-[240px] h-[50px]`}
        >
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 rounded-[6px] ${
                isActive ? "border bg-[#4880FF]" : ""
              }`}
            >
              <div className="flex m-3">
                <FaElementor
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  UI Elements
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink to="/team" className={({ isActive }) => `w-[240px] h-[50px]`}>
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 rounded-[6px] ${
                isActive ? "border bg-[#4880FF]" : ""
              }`}
            >
              <div className="flex m-3">
                <RiTeamLine
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  Team
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink to="/table" className={({ isActive }) => `w-[240px] h-[50px]`}>
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 rounded-[6px] ${
                isActive ? "border bg-[#4880FF]" : ""
              }`}
            >
              <div className="flex m-3">
                <FaTableList
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  Table
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <div className="h-2"></div>

        <NavLink
          to="/settings"
          className={({ isActive }) => `w-[240px] h-[50px]`}
        >
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 rounded-[6px] ${
                isActive ? "border bg-[#4880FF]" : ""
              }`}
            >
              <div className="flex m-3">
                <IoSettingsOutline
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  Settings
                </span>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink
          to="/logout"
          className={({ isActive }) => `w-[240px] h-[50px]`}
        >
          {({ isActive }) => (
            <div
              className={`ml-3 mr-3 rounded-[6px] ${
                isActive ? "border bg-[#4880FF]" : ""
              }`}
            >
              <div className="flex m-3">
                <RiLogoutBoxRLine
                  className={`w-[25px] h-[25px] mr-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                />
                <span
                  className={`font-nunito-san tracking-custom ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  Logout
                </span>
              </div>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
