import React from "react";
import portfoliologo from "../images/portfoliologo.png";
const Header = () => {
  return (
    <div className="justify-around  flex bg-transparent font-semibold  w-full z-10 pt-6 text-lg text-[#A6A9AA] font-code">
      <div className="flex flex-col gap-y-3">
        <a href="#home">.&lt;Home/&gt;</a>
        <a href="#about">.&lt;Projects/&gt;</a>
      </div>
      <div>
        <img src={portfoliologo} alt="" className="w-36 h-36 -mt-8" />
      </div>
      <div className="flex flex-col gap-y-3">
        <a href="#portfolio">.&lt;Portfolio/&gt;</a>
        <a href="#footer">.&lt;Contact/&gt;</a>
      </div>
    </div>
  );
};

export default Header;
