import React from "react";

import copyright from "../images/svg/copyright.svg";

const Footer = () => {
  return (
    <div
      id="footer"
      className=" bg-neutral-9 flex text-neutral-500 mt-14 justify-start items-center w-full   pb-[2rem]"
    >
      <span className="flex gap-x-2">
        <img src={copyright} alt="" />
        <p>Misba Bagban . All Rights Reserved</p>
      </span>
    </div>
  );
};

export default Footer;
