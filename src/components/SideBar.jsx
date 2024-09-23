import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import {
  IoChatbubblesOutline,
  IoGiftOutline,
  IoArchiveOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { FaRegCalendarAlt, FaElementor } from "react-icons/fa";
import { RiTodoLine, RiTeamLine, RiLogoutBoxRLine } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
import { FaTableList } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";

const SideBar = () => {
  const [currentNav, setCurrentNav] = useState("dashboard"); // Set the default nav to 'dashboard'

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto  w-[240px] pb-10">
      <div className="justify-between items-center">
        <Link
          to="/"
          className="items-center m-9 justify-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900 w-full"
        >
          DashStack
        </Link>

        {/* Dashboard Link */}
        <NavLink
          to="/dashboard"
          onClick={() => setCurrentNav("dashboard")}
          className="h-[50px]"
        >
          <div
            className={`ml-3 mr-3 ${
              currentNav === "dashboard"
                ? "border bg-[#4880FF] rounded-[6px]"
                : ""
            }`}
          >
            <div className="flex m-3">
              <FaHome
                className={`w-[25px] h-[25px] mr-5 ${
                  currentNav === "dashboard" ? "text-white" : "text-black"
                }`}
              />
              <span
                className={`font-nunito-san tracking-custom ${
                  currentNav === "dashboard" ? "text-white" : "text-black"
                }`}
              >
                Dashboard
              </span>
            </div>
          </div>
        </NavLink>

        {/* Products Link */}
        <NavLink
          to="/products"
          onClick={() => setCurrentNav("products")}
          className="w-[240px]"
        >
          <div
            className={`ml-3 mr-3  h-[50px] ${
              currentNav === "products"
                ? "border bg-[#4880FF] rounded-[6px]"
                : ""
            }`}
          >
            <div className="flex m-3">
              <AiOutlineProduct
                className={`w-[25px] h-[25px] mr-5 ${
                  currentNav === "products" ? "text-white" : "text-black"
                }`}
              />
              <span
                className={`font-nunito-san tracking-custom ${
                  currentNav === "products" ? "text-white" : "text-black"
                }`}
              >
                Products
              </span>
            </div>
          </div>
        </NavLink>

        {/* Favorites Link */}
        <NavLink
          to="/favorites"
          onClick={() => setCurrentNav("favorites")}
          className="w-[240px]"
        >
          <div
            className={`ml-3 mr-3 h-[50px] ${
              currentNav === "favorites"
                ? "border bg-[#4880FF] rounded-[6px]"
                : ""
            }`}
          >
            <div className="flex m-3">
              <MdFavoriteBorder
                className={`w-[25px] h-[25px] mr-5 ${
                  currentNav === "favorites" ? "text-white" : "text-black"
                }`}
              />
              <span
                className={`font-nunito-san tracking-custom ${
                  currentNav === "favorites" ? "text-white" : "text-black"
                }`}
              >
                Favorites
              </span>
            </div>
          </div>
        </NavLink>

        {/* Inbox Link */}
        <NavLink
          to="/inbox"
          onClick={() => setCurrentNav("inbox")}
          className="w-[240px] h-[50px]"
        >
          <div
            className={`ml-3 mr-3 h-[50px] ${
              currentNav === "inbox" ? "border bg-[#4880FF] rounded-[6px]" : ""
            }`}
          >
            <div className="flex m-3">
              <IoChatbubblesOutline
                className={`w-[25px] h-[25px] mr-5 ${
                  currentNav === "inbox" ? "text-white" : "text-black"
                }`}
              />
              <span
                className={`font-nunito-san tracking-custom ${
                  currentNav === "inbox" ? "text-white" : "text-black"
                }`}
              >
                Inbox
              </span>
            </div>
          </div>
        </NavLink>

        {/* Order Lists Link */}
        <NavLink
          to="/OrderLists"
          onClick={() => setCurrentNav("OrderLists")}
          className="w-[240px] h-[50px]"
        >
          <div
            className={`ml-3 mr-3 h-[50px] ${
              currentNav === "OrderLists"
                ? "border bg-[#4880FF] rounded-[6px]"
                : ""
            }`}
          >
            <div className="flex m-3">
              <CiBoxList
                className={`w-[25px] h-[25px] mr-5 ${
                  currentNav === "OrderLists" ? "text-white" : "text-black"
                }`}
              />
              <span
                className={`font-nunito-san tracking-custom ${
                  currentNav === "OrderLists" ? "text-white" : "text-black"
                }`}
              >
                Order Lists
              </span>
            </div>
          </div>
        </NavLink>

        {/* Product Stock Link */}
        <NavLink
          to="/Productstock"
          onClick={() => setCurrentNav("Productstock")}
          className="w-[240px] h-[50px]"
        >
          <div
            className={`ml-3 mr-3 h-[50px] ${
              currentNav === "Productstock"
                ? "border bg-[#4880FF] rounded-[6px]"
                : ""
            }`}
          >
            <div className="flex m-3">
              <IoArchiveOutline
                className={`w-[25px] h-[25px] mr-5 ${
                  currentNav === "Productstock" ? "text-white" : "text-black"
                }`}
              />
              <span
                className={`font-nunito-san tracking-custom ${
                  currentNav === "Productstock" ? "text-white" : "text-black"
                }`}
              >
                Product Stock
              </span>
            </div>
          </div>
        </NavLink>

        {/* Pages Section Header */}
        <div className="h-2"></div>
        <div className="w-[240px] h-[35px]">
          <div className="ml-3 h-full rounded-[6px] text-custom-gray font-nunito-sans text-[12px] font-bold leading-none tracking-custom">
            Pages
          </div>
        </div>

        {/* Pricing Link */}
        <NavLink
          to="/pricing"
          onClick={() => setCurrentNav("pricing")}
          className="w-[240px] h-[50px]"
        >
          <div
            className={`ml-3 mr-3 h-[50px] ${
              currentNav === "pricing"
                ? "border bg-[#4880FF] rounded-[6px]"
                : ""
            }`}
          >
            <div className="flex m-3">
              <IoGiftOutline
                className={`w-[25px] h-[25px] mr-5 ${
                  currentNav === "pricing" ? "text-white" : "text-black"
                }`}
              />
              <span
                className={`font-nunito-san tracking-custom ${
                  currentNav === "pricing" ? "text-white" : "text-black"
                }`}
              >
                Pricing
              </span>
            </div>
          </div>
        </NavLink>

        {/* Calendar Link */}
        <NavLink
          to="/calendar"
          onClick={() => setCurrentNav("calendar")}
          className="w-[240px] h-[50px]"
        >
          <div
            className={`ml-3 mr-3 h-[50px] ${
              currentNav === "calendar"
                ? "border bg-[#4880FF] rounded-[6px]"
                : ""
            }`}
          >
            <div className="flex m-3">
              <FaRegCalendarAlt
                className={`w-[25px] h-[25px] mr-5 ${
                  currentNav === "calendar" ? "text-white" : "text-black"
                }`}
              />
              <span
                className={`font-nunito-san tracking-custom ${
                  currentNav === "calendar" ? "text-white" : "text-black"
                }`}
              >
                Calendar
              </span>
            </div>
          </div>
        </NavLink>

        {/* To-Do Link */}
        <NavLink
          to="/todo"
          onClick={() => setCurrentNav("todo")}
          className="w-[240px] h-[50px]"
        >
          <div
            className={`ml-3 mr-3 h-[50px] ${
              currentNav === "todo" ? "border bg-[#4880FF] rounded-[6px]" : ""
            }`}
          >
            <div className="flex m-3">
              <RiTodoLine
                className={`w-[25px] h-[25px] mr-5 ${
                  currentNav === "todo" ? "text-white" : "text-black"
                }`}
              />
              <span
                className={`font-nunito-san tracking-custom ${
                  currentNav === "todo" ? "text-white" : "text-black"
                }`}
              >
                To-Do
              </span>
            </div>
          </div>
        </NavLink>

        {/* Team Link */}
        <NavLink
          to="/team"
          onClick={() => setCurrentNav("team")}
          className="w-[240px] h-[50px]"
        >
          <div
            className={`ml-3 mr-3 h-[50px] ${
              currentNav === "team" ? "border bg-[#4880FF] rounded-[6px]" : ""
            }`}
          >
            <div className="flex m-3">
              <RiTeamLine
                className={`w-[25px] h-[25px] mr-5 ${
                  currentNav === "team" ? "text-white" : "text-black"
                }`}
              />
              <span
                className={`font-nunito-san tracking-custom ${
                  currentNav === "team" ? "text-white" : "text-black"
                }`}
              >
                Team
              </span>
            </div>
          </div>
        </NavLink>

        {/* Contact Link */}
        <NavLink
          to="/contact"
          onClick={() => setCurrentNav("contact")}
          className="w-[240px] h-[50px]"
        >
          <div
            className={`ml-3 mr-3 h-[50px] ${
              currentNav === "contact"
                ? "border bg-[#4880FF] rounded-[6px]"
                : ""
            }`}
          >
            <div className="flex m-3">
              <MdOutlineContactPhone
                className={`w-[25px] h-[25px] mr-5 ${
                  currentNav === "contact" ? "text-white" : "text-black"
                }`}
              />
              <span
                className={`font-nunito-san tracking-custom ${
                  currentNav === "contact" ? "text-white" : "text-black"
                }`}
              >
                Contact
              </span>
            </div>
          </div>
        </NavLink>

        {/* Invoice Link */}
        <NavLink
          to="/invoice"
          onClick={() => setCurrentNav("invoice")}
          className="w-[240px] h-[50px]"
        >
          <div
            className={`ml-3 mr-3 h-[40px] ${
              currentNav === "invoice"
                ? "border bg-[#4880FF] rounded-[6px]"
                : ""
            }`}
          >
            <div className="flex m-3">
              <TbFileInvoice
                className={`w-[25px] h-[25px] mr-5 ${
                  currentNav === "invoice" ? "text-white" : "text-black"
                }`}
              />
              <span
                className={`font-nunito-san tracking-custom ${
                  currentNav === "invoice" ? "text-white" : "text-black"
                }`}
              >
                Invoice
              </span>
            </div>
          </div>
        </NavLink>

        {/* Settings Link */}
        <NavLink
          to="/settings"
          onClick={() => setCurrentNav("settings")}
          className="w-[240px] h-[50px]"
        >
          <div
            className={`ml-3 mr-3 h-[50px] ${
              currentNav === "settings"
                ? "border bg-[#4880FF] rounded-[6px]"
                : ""
            }`}
          >
            <div className="flex m-3">
              <IoSettingsOutline
                className={`w-[25px] h-[25px] mr-5 ${
                  currentNav === "settings" ? "text-white" : "text-black"
                }`}
              />
              <span
                className={`font-nunito-san tracking-custom ${
                  currentNav === "settings" ? "text-white" : "text-black"
                }`}
              >
                Settings
              </span>
            </div>
          </div>
        </NavLink>

        {/* Logout Link */}
        <NavLink
          to="/logout"
          onClick={() => setCurrentNav("logout")}
          className="w-[240px] h-[50px]"
        >
          <div
            className={`ml-3 mr-3 h-full ${
              currentNav === "logout" ? "border bg-[#4880FF] rounded-[6px]" : ""
            }`}
          >
            <div className="flex m-3">
              <RiLogoutBoxRLine
                className={`w-[25px] h-[25px] mr-5 ${
                  currentNav === "logout" ? "text-white" : "text-black"
                }`}
              />
              <span
                className={`font-nunito-san tracking-custom ${
                  currentNav === "logout" ? "text-white" : "text-black"
                }`}
              >
                Logout
              </span>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
