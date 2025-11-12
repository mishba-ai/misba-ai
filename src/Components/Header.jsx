import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  // current page is highlighted
  // const currentPage = window.location.pathname;
  const location = useLocation();

  const isCurrentPage = (page) => {
    return location.pathname === page ? "underline underline-offset-4 underline-violet-400 " : "";
  };

  return (
    <div className="flex bg-transparent font-medium text-violet-400 sm: h-10 mt-9 text-xl text-gray font-Kode max-sm:text-[1.05rem]">
      <ul className="flex justify-center items-center gap-x-6 ">
        <Link to="/">
          <li className={`${isCurrentPage("/")}`}>Home</li>
        </Link>
        <Link to="/projects">
          {" "}
          <li className={`${isCurrentPage("/projects")}`}>Projects</li>
        </Link>
        {/* <Link to="/blog">
          <li className={`${isCurrentPage("/blog")}`}>Blog</li>
        </Link> */}
        <Link to="/contact-me">
          <li className={`${isCurrentPage("/contact-me")}`}>Contact Me</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
