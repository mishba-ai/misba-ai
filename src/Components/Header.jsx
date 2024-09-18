import React from "react";
// import portfoliologo from "../images/portfoliologo.png";
import { Link } from "react-router-dom";
const Header = () => {
  // current page is highlighted
  const currentPage = window.location.pathname;
  //if current page is home then  underline the home li,same for other pages
  // function for highlighting the current page
  // const highlightCurrentPage = (page) => {
  //   if (currentPage === page) {
  //     return "underline underline-thickness[2px] underline-offset[5px] underline-violet-400";
  //   }
  //
  // };

  return (
    <div className="flex bg-transparent font-medium text-violet-400 w-[36rem] h-10 mt-9 bg-red- text-xl text-gray font-Kode ">
      <ul className="flex justify-center items-center gap-x-6">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/projects">
          {" "}
          <li>Projects</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
      </ul>
    </div>
    // <div className="justify-around  flex bg-transparent font-semibold  w-full z-10 pt-6 text-lg text-gray font-code">
    //   <div className="flex flex-col gap-y-3">
    //     <a
    //       href="#home"
    //       className="hover:border-2 hover:border-greenSecondary hover:text-greenSecondary px-1 py-1 hover:translate-x-2 w-44 text-center"
    //     >
    //       {"//"}01. &lt;Home/&gt;
    //     </a>
    //     <a
    //       href="#projects"
    //       className="hover:border-2 hover:border-greenSecondary hover:text-greenSecondary px-1 py-1 hover:translate-x-2 w-44 text-center"
    //     >
    //       {"//"}02. &lt;Projects/&gt;
    //     </a>
    //   </div>
    //   <div>
    //     <img src={portfoliologo} alt="" className="w-20 h-20" />
    //   </div>
    //   <div className="flex flex-col gap-y-3">
    //     <a
    //       href="#press"
    //       className="hover:border-2 hover:border-greenSecondary hover:text-greenSecondary px-1 py-1 hover:translate-x-2 w-44 text-center"
    //     >
    //       {"//"}03. &lt;Press/&gt;
    //     </a>
    //     <a
    //       href="#footer"
    //       className="hover:border-2 hover:border-greenSecondary  hover:text-greenSecondary  px-1 py-1 hover:translate-x-2 w-44 text-center"
    //     >
    //       {"//"}04. &lt;Contact/&gt;
    //     </a>
    //   </div>
    // </div>
  );
};

export default Header;
