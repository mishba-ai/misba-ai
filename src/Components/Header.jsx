import React from "react";

const Header = () => {
  return (
    <div className="justify-around  flex bg-transparent font-semibold  w-full z-10 pt-4 text-lg text-[#A6A9AA] font-code">
      <div className="flex flex-col gap-y-2">
        <a href="#home">.&lt;Home/&gt;</a>
        <a href="#about">.&lt;About/&gt;</a>
      </div>
      <div className="flex flex-col gap-y-2">
        <a href="#portfolio">.&lt;Portfolio/&gt;</a>
        <a href="#footer">.&lt;Contact/&gt;</a>
      </div>
    </div>
  );
};

export default Header;
