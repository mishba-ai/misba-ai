import Header from "./Components/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
export default function Layout() {
  return (
    <div className="w-full bg-black flex justify-center items-center ">
      <div className="min-h-screen flex flex-col w-[690px] px-2  flex-wrap text-white">
        <div>
          <Header />
        </div>
        <div className="mt-12 ">
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
