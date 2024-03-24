import React from "react";
import rightarrow from "../images/rightarrow.svg";
const Press = () => {
  return (
    <section id="press" className="w-full bg-black pt-14">
      <div className="text-[#A6A9AA] flex justify-center items-center flex-col font-medium">
        <span className="text-sm relative right-[12rem]">&lt;h3&gt;</span>
        <h1 className="text-white font-Kode text-7xl mx-4">MY Press</h1>
        <span className="text-sm relative left-[12rem]">&lt;/h3&gt;</span>

        <ul className="mt-12  font-Kode text-white text-4xl text-center flex flex-col justify-center items-center">
          <hr className="border-[#1D5D33] w-[700px]" />
          <li className="hover:bg-greenSecondary hover:text-black cursor-pointer p-4 flex justify-between w-full">
            <p>Hashnode</p>
            <span className="flex justify-center items-center">
              <img src={rightarrow} alt="" />
            </span>
          </li>
          <hr className="border-[#1D5D33] w-[700px]" />

          <li className=" p-4 hover:bg-greenSecondary hover:text-black cursor-pointer flex justify-between w-full">
            <p>Showwcase</p>
            <span className="flex justify-center items-center">
              <img src={rightarrow} className="" alt="" />
            </span>
          </li>
          <hr className="border-[#1D5D33] w-[700px]" />

          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Press;
