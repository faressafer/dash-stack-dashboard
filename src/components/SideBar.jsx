import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaRegCalendarAlt, FaElementor } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdFavoriteBorder, MdOutlineContactPhone } from "react-icons/md";
import {
  IoChatbubblesOutline,
  IoGiftOutline,
  IoArchiveOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { RiTodoLine, RiTeamLine, RiLogoutBoxRLine } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: <FaHome /> },
  { to: "/products", label: "Products", icon: <AiOutlineProduct /> },
  { to: "/favorites", label: "Favorites", icon: <MdFavoriteBorder /> },
  { to: "/inbox", label: "Inbox", icon: <IoChatbubblesOutline /> },
  { to: "/OrderLists", label: "Order Lists", icon: <CiBoxList /> },
  { to: "/Productstock", label: "Product Stock", icon: <IoArchiveOutline /> },
  { to: "/pricing", label: "Pricing", icon: <IoGiftOutline /> },
  { to: "/calendar", label: "Calendar", icon: <FaRegCalendarAlt /> },
  { to: "/todo", label: "To-Do", icon: <RiTodoLine /> },
  { to: "/team", label: "Team", icon: <RiTeamLine /> },
  { to: "/contact", label: "Contact", icon: <MdOutlineContactPhone /> },
  { to: "/invoice", label: "Invoice", icon: <TbFileInvoice /> },
  { to: "/settings", label: "Settings", icon: <IoSettingsOutline /> },
  { to: "/logout", label: "Logout", icon: <RiLogoutBoxRLine /> },
];

const SideBar = () => {
  const [currentNav, setCurrentNav] = useState("dashboard");

  return (
    <div className="h-screen md:overflow-hidden overflow-auto w-[240px] pb-10">
      <div className="justify-between items-center">
        <Link
          to="/"
          className="items-center m-9 justify-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900 w-full"
        >
          DashStack
        </Link>

        {navItems.map(({ to, label, icon }, index) => (
          <NavLink
            key={index}
            to={to}
            onClick={() => setCurrentNav(label.toLowerCase())}
            className="w-[240px] h-[50px]"
          >
            <div
              className={`ml-3 mr-3 h-[50px] ${
                currentNav === label.toLowerCase()
                  ? "border bg-[#4880FF] rounded-[6px]"
                  : ""
              }`}
            >
              <div className="flex m-3">
                {React.cloneElement(icon, {
                  className: `w-[25px] h-[25px] mr-5 ${
                    currentNav === label.toLowerCase()
                      ? "text-white"
                      : "text-black"
                  }`,
                })}
                <span
                  className={`font-nunito-san tracking-custom ${
                    currentNav === label.toLowerCase()
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {label}
                </span>
              </div>
            </div>
          </NavLink>
        ))}

        <div className="h-2"></div>
        <div className="w-[240px] h-[35px] ml-3 text-custom-gray font-nunito-sans text-[12px] font-bold leading-none tracking-custom">
          Pages
        </div>
      </div>
    </div>
  );
};

export default SideBar;
