import Header from "./Components/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

export default function Layout() {
  return (
    <div className="w-full bg-black min-h-screen flex justify-center ">
      <div className="text-white max-w-[700px] w-full mx-auto min-h-screen px-5 flex flex-col translate scale-80">
        <div>
          <Header />
        </div>
        <div className="mt-10 flex-1">
          <Outlet />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
