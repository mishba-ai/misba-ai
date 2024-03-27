import React from "react";
const Header = () => {
  return (
    <div className="justify-around  flex bg-transparent font-semibold  w-full z-10 pt-6 text-lg text-[#A6A9AA] font-code">
      <div className="flex flex-col gap-y-3">
        <a
          href="#home"
          className="hover:border-2 hover:border-[#19C84A] hover:text-[#19C84A] px-1 py-1 hover:translate-x-2 w-44 text-center"
        >
          {"//"}01. &lt;Home/&gt;
        </a>
        <a
          href="#projects"
          className="hover:border-2 hover:border-[#19C84A] hover:text-[#19C84A] px-1 py-1 hover:translate-x-2 w-44 text-center"
        >
          {" "}
          {"//"}02. &lt;Projects/&gt;
        </a>
      </div>
      <div className="flex flex-col gap-y-3">
        <a
          href="#press"
          className="hover:border-2 hover:border-[#19C84A] hover:text-[#19C84A] px-1 py-1 hover:translate-x-2 w-44 text-center"
        >
          {"//"}03. &lt;Press/&gt;
        </a>
        <a
          href="#footer"
          className="hover:border-2 hover:border-[#19C84A] hover:text-[#19C84A] px-1 py-1 hover:translate-x-2 w-44 text-center"
        >
          {"//"}04. &lt;Contact/&gt;
        </a>
      </div>
    </div>
  );
};

export default Header;
