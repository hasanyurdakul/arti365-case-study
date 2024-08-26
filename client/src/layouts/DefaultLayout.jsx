import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/defaultLayoutComponents/Navbar";

function DefaultLayout() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
