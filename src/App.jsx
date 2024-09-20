import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";
import Products from "./components/Products";
import Favorites from "./components/Favorites";
import Inbox from "./components/Inbox"; // This will manage subroutes
import OrdersList from "./components/OrdersList";
import Productstock from "./components/Productstock";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="w-70 border fixed bg-white">
          <SideBar />
        </div>
        <div className="fixed border md:static bg-main-bg dark:bg-main-dark-bg navbar">
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Favorites" element={<Favorites />} />
            {/* The main Inbox route will load the Inbox component */}
            <Route path="/Inbox/*" element={<Inbox />} />
            <Route path="/OrderLists" element={<OrdersList />} />
            <Route path="/Productstock*" element={<Productstock />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
