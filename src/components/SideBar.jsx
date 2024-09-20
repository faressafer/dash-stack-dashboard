import React from "react";
import { Link } from "react-router-dom";
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

        <Link to="/dashboard" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full border bg-[#4880FF] rounded-[6px]">
            <div className="flex m-3">
              <FaHome className="w-[25px] h-[25px] text-white mr-5" />
              <span className="text-white font-nunito-san tracking-custom">
                Dashboard
              </span>
            </div>
          </div>
        </Link>

        <Link to="/products" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full border bg-[#4880FF] rounded-[6px]">
            <div className="flex m-3">
              <AiOutlineProduct className="w-[25px] h-[25px] mr-5" />
              <span className="font-nunito-san tracking-custom">Products</span>
            </div>
          </div>
        </Link>

        <Link to="/favorites" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full rounded-[6px]">
            <div className="flex m-3">
              <MdFavoriteBorder className="w-[25px] h-[25px] mr-5" />
              <span className="font-nunito-san tracking-custom">Favorites</span>
            </div>
          </div>
        </Link>

        <Link to="/inbox" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full rounded-[6px]">
            <div className="flex m-3">
              <IoChatbubblesOutline className="w-[25px] h-[25px] mr-5" />
              <span className="font-nunito-san tracking-custom">Inbox</span>
            </div>
          </div>
        </Link>

        <Link to="/OrderLists" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full rounded-[6px]">
            <div className="flex m-3">
              <CiBoxList className="w-[25px] h-[25px] mr-5" />
              <span className="font-nunito-san tracking-custom">
                Order Lists
              </span>
            </div>
          </div>
        </Link>

        <Link to="/product-stock" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full rounded-[6px]">
            <div className="flex m-3">
              <IoArchiveOutline className="w-[25px] h-[25px] mr-5" />
              <span className="font-nunito-san tracking-custom">
                Product Stock
              </span>
            </div>
          </div>
        </Link>

        <div className="h-2"></div>

        <div className="w-[240px] h-[35px]">
          <div className="ml-3 h-full rounded-[6px] text-custom-gray font-nunito-sans text-[12px] font-bold leading-none tracking-custom">
            Pages
          </div>
        </div>

        <Link to="/pricing" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full rounded-[6px]">
            <div className="flex m-3">
              <IoGiftOutline className="w-[25px] h-[25px] mr-5" />
              <span className="font-nunito-san tracking-custom">Pricing</span>
            </div>
          </div>
        </Link>

        <Link to="/calendar" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full rounded-[6px]">
            <div className="flex m-3">
              <FaRegCalendarAlt className="w-[25px] h-[25px] mr-5" />
              <span className="font-nunito-san tracking-custom">Calendar</span>
            </div>
          </div>
        </Link>

        <Link to="/todo" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full rounded-[6px]">
            <div className="flex m-3">
              <RiTodoLine className="w-[25px] h-[25px] mr-5" />
              <span className="font-nunito-san tracking-custom">To-Do</span>
            </div>
          </div>
        </Link>

        <Link to="/contact" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full rounded-[6px]">
            <div className="flex m-3">
              <MdOutlineContactPhone className="w-[25px] h-[25px] mr-5" />
              <span className="font-nunito-san tracking-custom">Contact</span>
            </div>
          </div>
        </Link>

        <Link to="/invoice" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full rounded-[6px]">
            <div className="flex m-3">
              <TbFileInvoice className="w-[25px] h-[25px] mr-5" />
              <span className="font-nunito-san tracking-custom">Invoice</span>
            </div>
          </div>
        </Link>

        <Link to="/ui-elements" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full rounded-[6px]">
            <div className="flex m-3">
              <FaElementor className="w-[25px] h-[25px] mr-5" />
              <span className="font-nunito-san tracking-custom">
                UI Elements
              </span>
            </div>
          </div>
        </Link>

        <Link to="/team" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full rounded-[6px]">
            <div className="flex m-3">
              <RiTeamLine className="w-[25px] h-[25px] mr-5" />
              <span className="font-nunito-san tracking-custom">Team</span>
            </div>
          </div>
        </Link>

        <Link to="/table" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full rounded-[6px]">
            <div className="flex m-3">
              <FaTableList className="w-[25px] h-[25px] mr-5" />
              <span className="font-nunito-san tracking-custom">Table</span>
            </div>
          </div>
        </Link>

        <div className="h-2"></div>

        <Link to="/settings" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full rounded-[6px]">
            <div className="flex m-3">
              <IoSettingsOutline className="w-[25px] h-[25px] mr-5" />
              <span className="font-nunito-san tracking-custom">Settings</span>
            </div>
          </div>
        </Link>

        <Link to="/logout" className="w-[240px] h-[50px]">
          <div className="ml-3 mr-3 h-full rounded-[6px]">
            <div className="flex m-3">
              <RiLogoutBoxRLine className="w-[25px] h-[25px] mr-5" />
              <span className="font-nunito-san tracking-custom">Logout</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
